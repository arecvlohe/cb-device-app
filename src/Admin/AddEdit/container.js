import React, { Component } from "react";
import { compose, componentFromProp } from "recompose";
import { connect } from "react-redux";
import Promise from "bluebird";

import * as selectors from "Store/selectors";
import { isAddRoute, isEditRoute, titleCase, getDevice } from "../helpers";

const mapStateToProps = state => {
  return {
    devices: selectors.devices(state),
    deviceTypes: selectors.deviceTypes(state),
    controls: selectors.controls(state)
  };
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
      e.preventDefault();
      console.log("submitting form");
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

export default compose(connect(mapStateToProps), handlers);
