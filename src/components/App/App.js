import React from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

const App =  () => {
  return (
    <React.StrictMode>
      <div className="container">
      <Provider store={store}>
          <ContentHolderComponent/>
        </Provider>
      </div>
    </React.StrictMode>
  );
};

export default App;
