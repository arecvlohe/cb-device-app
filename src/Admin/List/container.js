import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as selectors from "Store/selectors";
import { removeDevice } from "Store/actions/admin";

const mapStateToProps = state => {
  return {
    devices: selectors.devices(state),
    deviceTypes: selectors.deviceTypes(state),
    controls: selectors.controls(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeDevice }, dispatch);
};

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(device) {
      const { removeDevice } = this.props;
      removeDevice(device);
    }

    render() {
      return (
        <WrappedComponent {...this.props} handleDelete={this.handleDelete} />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
