import { compose } from "recompose";
import { connect } from "react-redux";

import * as selectors from "Store/selectors";

const mapStateToProps = state => {
  return {
    devices: selectors.devices(state),
    deviceTypes: selectors.deviceTypes(state),
    controls: selectors.controls(state)
  };
};

export default compose(connect(mapStateToProps));
