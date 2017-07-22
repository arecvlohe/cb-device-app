import { compose } from "recompose";
import { connect } from "react-redux";

import * as selectors from "Store/selectors/admin";

const mapStateToProps = state => {
  return {
    devices: selectors.devices(state)
  };
};

export default compose(connect(mapStateToProps));
