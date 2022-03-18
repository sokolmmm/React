import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/redux-store';


let rerenderEntireTree = (state) => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
      <App state = {state} 
           store={store}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe ( ()=> {
  let state = (store.getState());
  rerenderEntireTree(state);
});

reportWebVitals();
