import React from "react";

class ProfileStatus extends React.Component {
  state = {
    status: this.props.status,
    editMode: false,
  };

  activedEditMode = () => {
      this.setState({
          editMode: true,
      });
  };
  deactivedEditMode = () => {
    this.setState({
        editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChande = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    };
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input onChange={this.onStatusChande} autoFocus={true} onBlur={this.deactivedEditMode}  type="text" value={this.state.status} />
          </div>
        ) : (
          <div>
            <span onClick={this.activedEditMode}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
