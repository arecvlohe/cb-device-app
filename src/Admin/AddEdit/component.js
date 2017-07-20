import React from "react";
import { componentFromProp } from "recompose";

import Device from "./Device";
import DeviceType from "./DeviceType";
import Control from "./Control";

const types = {
  Device: Device,
  DeviceType: DeviceType,
  Control: Control
};

const RenderComponent = componentFromProp("component");

export default function AddEdit({
  component,
  handleChange,
  handleSubmit,
  isEditMode,
  name,
  ...props
}) {
  return (
    <RenderComponent
      component={types[component]}
      {...{ handleChange, handleSubmit, isEditMode, name }}
    />
  );
}
