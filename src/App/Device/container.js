import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Promise from "bluebird";

import * as selectors from "Store/selectors";
import { getDevice, titleCase } from "Helpers";

const mapStateToProps = (state, props) => {
  return {
    devices: selectors.devices(state),
    controls: selectors.controlsForDevice(props.match.params.alias)(state)
  };
};

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
}

export default compose(connect(mapStateToProps), handlers);
