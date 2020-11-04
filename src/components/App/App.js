import React from 'react';
import { Provider } from 'react-redux';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';

const App = ({store}) => {
  return (
    <React.StrictMode>
      <div className="container">
        <Provider store={store}>
          <Switch>
            <Route exact path="/home" component={ContentHolderComponent}  />
            <Route exact path="/film/:id" component={ContentHolderComponent}  />
            <Route exact path="/search/:query" component={ContentHolderComponent} />
            <Redirect exact from="/" to="/home" />
            <Route path='*' component={PageNotFound}/>
          </Switch>
        </Provider>
      </div>
    </React.StrictMode>
  );
};

export default App;
