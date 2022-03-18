import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import StoreContext from './store-context';


let rerenderEntireTree = (state) => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
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
