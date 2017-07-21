import adjust from "ramda/src/adjust";
import assocPath from "ramda/src/assocPath";
import compose from "ramda/src/compose";
import concat from "ramda/src/concat";
import findIndex from "ramda/src/findIndex";
import remove from "ramda/src/remove";
import update from "ramda/src/update";

import * as types from "../types";
import initialState from "./initialState";

const mapTypes = {
  ADD_CONTROL: "controls",
  ADD_DEVICE_TYPE: "deviceTypes",
  ADD_DEVICE: "devices",
  EDIT_CONTROL: "controls",
  EDIT_DEVICE_TYPE: "deviceTypes",
  EDIT_DEVICE: "devices",
  REMOVE_CONTROL: "controls",
  REMOVE_DEVICE_TYPE: "deviceTypes",
  REMOVE_DEVICE: "devices"
};

export default function admin(state = initialState, action) {
  const selectState = mapTypes[`${action.type}`];
  switch (action.type) {
    case types.ADD_DEVICE:
    case types.ADD_CONTROL:
    case types.ADD_DEVICE_TYPE: {
      const addAny = concat(state[selectState], [action.payload]);
      return assocPath([selectState], addAny, state);
    }
    case types.EDIT_DEVICE:
    case types.EDIT_CONTROL:
    case types.EDIT_DEVICE_TYPE: {
      const updateAny = update(
        findIndex(v => v.alias === action.payload.alias, state[selectState]),
        action.payload,
        state[selectState]
      );
      return assocPath([selectState], updateAny, state);
    }
    case types.REMOVE_DEVICE:
    case types.REMOVE_CONTROL:
    case types.REMOVE_DEVICE_TYPE: {
      const removeAny = remove(
        findIndex(v => v.alias === action.payload.alias, state[selectState]),
        1,
        state[selectState]
      );
      return assocPath([selectState], removeAny, state);
    }
    default: {
      return state;
    }
  }
}
