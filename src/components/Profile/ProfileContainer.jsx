import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params.profileID)
  }
  render() {
    return <Profile {...this.state} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
  
};

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));
