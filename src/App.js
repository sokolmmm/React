import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';  
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';

const App = (props) => {
  return ( 
    <div className = 'app-wrapper'>
      <Header/>
      <Navbar/>
      <div className = 'app-wrapper-content'>
        <Routes>
          <Route 
            path = '/profile' 
            element = {<Profile/>} /> 
          <Route 
            path = '/dialogs/*' 
            element = {<DialogsContainer/>}/>  
          <Route 
          path='/users'
          element = {<Users/>}/>
        </Routes> 
         </div> 
    </div> 
  )
}
export default App;