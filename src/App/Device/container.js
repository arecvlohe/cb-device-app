import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Promise from "bluebird";

import * as selectors from "Store/selectors";
import * as actions from "Store/actions/app";
import { getDevice, titleCase } from "Helpers";

const mapStateToProps = (state, props) => {
  return {
    devices: selectors.devices(state),
    controls: selectors.controlsForDevice(props.match.params.alias)(state)
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
      this.handleSelect = this.handleSelect.bind(this);
      this.handleSlider = this.handleSlider.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
    }

    handleSelect({ target: { value, name } }) {
      const { updateSelectValue, match } = this.props;
      const { params: { alias } } = match;
      return updateSelectValue(alias, name, value);
    }

    handleToggle({ target: { name, checked, value } }) {
      const { updateToggleValue, match } = this.props;
      const { params: { alias } } = match;
      return updateToggleValue(alias, name, checked);
    }

    handleSlider({ target: { value, name } }) {
      const { updateSliderValue, match } = this.props;
      const { params: { alias } } = match;
      return updateSliderValue(alias, name, value);
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleSelect={this.handleSelect}
          handleSlider={this.handleSlider}
          handleToggle={this.handleToggle}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
