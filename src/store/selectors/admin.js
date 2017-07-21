import { createSelector } from "reselect";

const id = v => v;

const devicesPath = state => state.admin.devices;
export const devices = createSelector(devicesPath, id);

const deviceTypesPath = state => state.admin.deviceTypes;
export const deviceTypes = createSelector(deviceTypesPath, id);

const controlsPath = state => state.admin.controls;
export const controls = createSelector(controlsPath, id);

export const deviceTypeNames = createSelector([deviceTypesPath], vs =>
  vs.map(v => v.name)
);
