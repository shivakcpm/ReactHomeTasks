import React from 'react';
import { Provider } from 'react-redux';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { store } from '../../store/store';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';

const App = () => {
  return (
    <React.StrictMode>
      <div className="container">
        <Provider store={store}>
          <Router>
          <Switch>
            <Route exact path="/home" component={ContentHolderComponent}  />
            <Route exact path="/film/:id" component={ContentHolderComponent}  />
            <Route exact path="/search/:query" component={ContentHolderComponent} />
            <Redirect exact from="/" to="/home" />
            <Route path='*' component={PageNotFound}/>
          </Switch>
          </Router>
        </Provider>
      </div>
    </React.StrictMode>
  );
};

export default App;
