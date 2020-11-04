import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import StyleContext from 'isomorphic-style-loader/StyleContext'

import App from '../src/components/App/App';
import { StaticRouter as Router } from 'react-router-dom';
import PageNotFound from '../src/components/PageNotFound/PageNotFound';
import {URLS} from '../src/services/api'
import * as actions from '../src/store/actions';
import * as request from 'request';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  rootReducer  from '../src/store/rootReducer';
export const store = createStore(rootReducer, applyMiddleware(thunk));


const PORT = process.env.PORT || 3006;
const app = express();
app.use(express.static('./build'));

const defaultParams = {
    searchBy: 'title',
    sortOrder: 'desc',
    sortBy: 'release_date',
}


app.get('/', (req, res) => {
    return returnResponse(res);
});
app.get('/home', (req, res) => {
    return returnResponse(res);
});
app.get('/search/:query', (req, res) => {
    return returnResponse(res, { search: req.params.query });
});
app.get('/film/:id', (req, res) => {
    return returnResponse(res, null);
});
app.get('*', (req, res) => {
    return returnResponse(res, null, true);
})

function returnResponse(res, params = null, isError = false) {

    let queryParams = { ...params, ...defaultParams };
    request(URLS.getUrl(URLS.MOVIES_URL,null,queryParams), { json: true }, async (err, response, data) => {
        if (err) { return console.log(err); }
        await store.dispatch(actions.getMoviesAction({ moviesData: data }));
        const css = new Set(); // CSS for all rendered React components
        const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
        const body = ReactDOMServer.renderToString(
            <StyleContext.Provider value={{ insertCss }}>
                <Router>
                    {!isError && <App store={store} />}
                    {isError && <PageNotFound />}
                </Router>
            </StyleContext.Provider>);

        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, data) => {
            if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Oops, better luck next time!');
            }

            return res.send(
                data.replace('<div id="root"></div>', `<div id="root"><script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.PRELOADED_STATE = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
              </script>
    ${body}</div>`)
            );
        });
    });
 

}


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});