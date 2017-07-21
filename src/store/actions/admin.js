import * as types from "../types";

export function addDevice(payload) {
  return {
    type: types.ADD_DEVICE,
    payload
  };
}

export function removeDevice(payload) {
  return {
    type: types.REMOVE_DEVICE,
    payload
  };
}

export function editDevice(payload) {
  return {
    type: types.EDIT_DEVICE,
    payload
  };
}

export function addControl(payload) {
  return {
    type: types.ADD_CONTROL,
    payload
  };
}

export function removeControl(payload) {
  return {
    type: types.REMOVE_CONTROL,
    payload
  };
}

export function editControl(payload) {
  return {
    type: types.EDIT_CONTROL,
    payload
  };
}
