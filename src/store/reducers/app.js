import propEq from "ramda/src/propEq";
import findIndex from "ramda/src/findIndex";
import update from "ramda/src/update";
import assocPath from "ramda/src/assocPath";
import pathEq from "ramda/src/pathEq";

import initialState from "./initialState";
import * as types from "../types/app";

function getDeviceIndex(deviceAlias, state) {
  return findIndex(propEq("alias", deviceAlias), state.devices);
}

function getControlIndex(deviceIndex, controlAlias, state) {
  return findIndex(
    propEq("alias", controlAlias),
    state["devices"][deviceIndex]["deviceControls"]
  );
}

export default function app(state = initialState, action = { payload: {} }) {
  switch (action.type) {
    case types.UPDATE_SELECT_VALUE: {
      const { payload: { deviceAlias, controlAlias, value } } = action;
      const deviceIndex = getDeviceIndex(deviceAlias, state);
      const controlIndex = getControlIndex(deviceIndex, controlAlias, state);
      const path = [
        "devices",
        deviceIndex,
        "deviceControls",
        controlIndex,
        "currentValue"
      ];
      return assocPath(path, value, state);
    }
    case types.UPDATE_SLIDER_VALUE: {
      const { payload: { deviceAlias, controlAlias, value } } = action;
      const deviceIndex = getDeviceIndex(deviceAlias, state);
      const controlIndex = getControlIndex(deviceIndex, controlAlias, state);
      const path = [
        "devices",
        deviceIndex,
        "deviceControls",
        controlIndex,
        "currentValue"
      ];
      return assocPath(path, value, state);
    }
    case types.UPDATE_TOGGLE_VALUE: {
      const { payload: { deviceAlias, controlAlias } } = action;
      const deviceIndex = getDeviceIndex(deviceAlias, state);
      const controlIndex = getControlIndex(deviceIndex, controlAlias, state);
      const path = [
        "devices",
        deviceIndex,
        "deviceControls",
        controlIndex,
        "currentValue"
      ];
      if (pathEq(path, "off", state)) {
        return assocPath(path, "on", state);
      }
      return assocPath(path, "off", state);
    }
    default: {
      return state;
    }
  }
}
