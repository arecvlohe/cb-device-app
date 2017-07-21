import React, { Component } from "react";
import { compose, componentFromProp } from "recompose";
import { connect } from "react-redux";
import Promise from "bluebird";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as selectors from "Store/selectors";
import * as actions from "Store/actions/admin";
import { isAddRoute, isEditRoute, titleCase, getDevice } from "../helpers";

const mapStateToProps = state => {
  return {
    devices: selectors.devices(state),
    deviceTypes: selectors.deviceTypes(state),
    controls: selectors.controls(state),
    deviceTypeNames: selectors.deviceTypeNames(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      const { match, devices } = this.props;
      const { params: { alias } } = match;
      if (isEditRoute(match)) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res(getDevice(devices, alias));
          }, 100);
        }).then(r => {
          this.setState({ ...r });
        });
      }
    }

    handleChange({ target: { name, value } }) {
      this.setState({ [name]: value });
    }

    handleSubmit(e) {
      const { editDevice, addDevice, match } = this.props;
      e.preventDefault();
      if (isEditRoute(match)) {
        editDevice(this.state);
      } else {
        addDevice(this.state);
      }
    }

    render() {
      const { match } = this.props;
      const { params: { type } } = match;
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          component={titleCase(type)}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isEditMode={isEditRoute(match)}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
