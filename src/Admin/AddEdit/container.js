import React, { Component } from "react";
import { compose, componentFromProp } from "recompose";
import { connect } from "react-redux";
import Promise from "bluebird";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as selectors from "Store/selectors";
import * as actions from "Store/actions/admin";
import {
  isAddRoute,
  isEditRoute,
  titleCase,
  getDevice,
  kabobCase
} from "Helpers";

const mapStateToProps = state => {
  return {
    devices: selectors.devices(state),
    deviceTypes: selectors.deviceTypes(state),
    controls: selectors.controls(state),
    deviceTypeNames: selectors.deviceTypeNames(state),
    controlNames: selectors.controlNames(state),
    controlTypes: selectors.controlTypes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        deviceControls: [],
        isSaved: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleControlsChange = this.handleControlsChange.bind(this);
    }

    componentDidMount() {
      const { match, devices, controls, deviceTypes } = this.props;
      const { params: { alias, type } } = match;
      const types = {
        device: devices,
        control: controls,
        "device-type": deviceTypes
      };
      if (isEditRoute(match)) {
        // Faux API request/response
        return new Promise((res, rej) => {
          setTimeout(() => {
            res(getDevice(types[type], alias));
          }, 100);
        }).then(r => {
          this.setState({ ...r });
        });
      }
    }

    handleChange({ target: { name, value } }) {
      this.setState({ [name]: value });
    }

    handleControlsChange(e, kind) {
      if (kind === "add") {
        e.persist();
        this.setState(prevState => ({
          deviceControls: prevState.deviceControls.concat([
            this.props.controls.find(c => c.name == e.target.value)
          ])
        }));
      } else {
        this.setState(prevState => ({
          deviceControls: prevState.deviceControls.filter(d => {
            return d.name !== e.name;
          })
        }));
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      const {
        addControl,
        addDevice,
        addDeviceType,
        editControl,
        editDevice,
        editDeviceType,
        match
      } = this.props;

      if (isEditRoute(match)) {
        switch (match.params.type) {
          case "device": {
            return editDevice(this.state);
          }
          case "control": {
            return editControl(this.state);
          }
          case "device-type": {
            return editDeviceType(this.state);
          }
        }
      } else {
        const alias = kabobCase(this.state.name);
        switch (match.params.type) {
          case "device": {
            return addDevice(Object.assign({}, this.state, { alias }));
          }
          case "control": {
            return addControl(Object.assign({}, this.state, { alias }));
          }
          case "device-type": {
            return addDeviceType(Object.assign({}, this.state, { alias }));
          }
        }
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
          handleControlsChange={this.handleControlsChange}
          handleSubmit={this.handleSubmit}
          isEditMode={isEditRoute(match)}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
