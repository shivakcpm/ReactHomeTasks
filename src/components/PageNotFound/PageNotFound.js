import React from 'react';
import './pageNotFound.css';
import { useHistory } from 'react-router-dom';

const PageNotFound =  () => {
    const history = useHistory();
  return (
    <div className="container">
      <div className="header-bar">
        <strong>netflix</strong>
        <span>roulette</span>
      </div>
      <div className="page-body">
      <div class="page-info">Page Not Found</div>
      <img src="/public/404.PNG"></img>
      <button className="go-back" onClick={() => {
history.push('/');
}}>GO BACK TO HOME</button>
      </div>
    </div>
  );
};

export default PageNotFound;
