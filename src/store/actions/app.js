import * as types from "../types/app";

export function updateSliderValue(deviceAlias, controlAlias, value) {
  return {
    type: types.UPDATE_SLIDER_VALUE,
    payload: {
      value,
      deviceAlias,
      controlAlias
    }
  };
}

export function updateSelectValue(deviceAlias, controlAlias, value) {
  return {
    type: types.UPDATE_SELECT_VALUE,
    payload: {
      value,
      deviceAlias,
      controlAlias
    }
  };
}

export function updateToggleValue(deviceAlias, controlAlias, checked) {
  return {
    type: types.UPDATE_TOGGLE_VALUE,
    payload: {
      checked,
      deviceAlias,
      controlAlias
    }
  };
}
