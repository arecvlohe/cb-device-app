import * as types from "../types";

function addDevice(payload) {
  return {
    type: types.ADD_DEVICE,
    payload
  };
}

function removeDevice(payload) {
  return {
    type: types.REMOVE_DEVICE,
    payload
  };
}

function editDevice(payload) {
  return {
    type: types.EDIT_DEVICE,
    payload
  };
}
