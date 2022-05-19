import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
  return (
    // <div className="app-wrapper">
    //   <HeaderContainer />
    //   <Navbar />
    //   <div className="app-wrapper-content">
    //     <Routes>
    //       <Route path="/profile/:profileID" element={<ProfileContainer />} />
    //       <Route path="/dialogs/*" element={<DialogsContainer />} />
    //       <Route path="/users" element={<UsersContainer />} />
    //       <Route path="/login" element={<Login />}></Route>
    //     </Routes>
    //   </div>
    // </div>
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer  />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:profileID" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;

