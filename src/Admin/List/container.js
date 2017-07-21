import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as selectors from "Store/selectors";
import { removeDevice, removeControl } from "Store/actions/admin";

const mapStateToProps = state => {
  return {
    devices: selectors.devices(state),
    deviceTypes: selectors.deviceTypes(state),
    controls: selectors.controls(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeDevice, removeControl }, dispatch);
};

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(data, type) {
      const { removeDevice, removeControl, match } = this.props;
      switch (type) {
        case "device": {
          return removeDevice(data);
        }
        case "control": {
          return removeControl(data);
        }
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} handleDelete={this.handleDelete} />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
