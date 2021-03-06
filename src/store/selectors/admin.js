import { createSelector } from "reselect";

const id = v => v;

const devicesPath = state => state.admin.devices;
export const devices = createSelector(devicesPath, id);

const deviceTypesPath = state => state.admin.deviceTypes;
export const deviceTypes = createSelector(deviceTypesPath, id);

export const deviceTypeNames = createSelector([deviceTypesPath], vs =>
  vs.map(v => v.name)
);

const devicesPathApp = state => state.app.devices;

export const controlsForDevice = deviceAlias =>
  createSelector(devicesPathApp, devices => {
    const device = devices.find(d => d.alias === deviceAlias) || {};
    return device.deviceControls || null;
  });

const controlsPath = state => state.admin.controls;
export const controls = createSelector(controlsPath, id);

export const controlNames = createSelector([controlsPath], vs =>
  vs.map(v => v.name)
);

const controlTypesPath = state => state.admin.controlTypes;
export const controlTypes = createSelector(controlTypesPath, vs =>
  vs.map(v => v.type)
);
