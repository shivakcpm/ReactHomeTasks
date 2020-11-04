import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderBarComponent from '../HeaderBarComponent/HeaderBarComponent';
import './pageNotFound.css';

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div className="container">
      <HeaderBarComponent/>
      <div className="page-body">
        <div className="page-info">Page Not Found</div>
        <img src="/public/404.PNG"></img>
        <button
          className="go-back"
          onClick={() => {
            history.push('/');
          }}
        >
          GO BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
