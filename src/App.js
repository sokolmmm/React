import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import MainContent from "./MainContent";
import LoginContainer from "./components/Login/LoginContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <Routes>
        <Route path="/login" element={<LoginContainer />}></Route>
        <Route path="/*" element={<MainContent />}></Route>
      </Routes>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
  id: state.auth.id,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);

