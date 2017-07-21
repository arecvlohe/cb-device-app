import adjust from "ramda/src/adjust";
import assocPath from "ramda/src/assocPath";
import compose from "ramda/src/compose";
import concat from "ramda/src/concat";
import findIndex from "ramda/src/findIndex";
import remove from "ramda/src/remove";
import update from "ramda/src/update";

import * as types from "../types";

const initialState = {
  devices: [
    {
      alias: "bedroom-apple-tv",
      deviceType: "Apple TV",
      IPAddress: "108.190.80.165",
      name: "Bedroom Apple TV"
    },
    {
      alias: "livingroom-player",
      deviceType: "Samsung Audio",
      IPAddress: "108.190.80.165",
      name: "Livingroom Player"
    },
    {
      alias: "livingroom-lights",
      deviceType: "Citrus Lights",
      IPAddress: "108.190.80.165",
      name: "Livingroom Lights"
    }
  ],
  deviceTypes: [
    {
      name: "Samsung Audio",
      alias: "samsung-audio",
      deviceControls: [
        { name: "Power", type: "button", currentValue: "off", alias: "power" },
        { name: "Volume", type: "slider", currentValue: 50, alias: "slider" },
        {
          name: "Playlist",
          type: "select",
          currentValue: "",
          alias: "playlist"
        }
      ]
    },
    {
      name: "Sony Audio",
      alias: "sony-audio",
      deviceControls: [
        { name: "Power", type: "button", currentValue: "off", alias: "power" },
        { name: "Volume", type: "slider", currentValue: 0, alias: "volume" },
        {
          name: "Playlist",
          type: "select",
          currentValue: "",
          alias: "playlist"
        }
      ]
    },
    {
      name: "Apple TV",
      alias: "apple-tv",
      deviceControls: [
        { name: "Power", type: "button", currentValue: "off", alias: "power" },
        {
          alias: "brightness",
          currentValue: 100,
          name: "Brightness",
          type: "slider"
        },
        { name: "Volume", type: "slider", currentValue: 50, alias: "volume" }
      ]
    },
    {
      name: "Citrus Lights",
      alias: "citrus-lights",
      deviceControls: [
        { name: "On/Off", type: "button", currentValue: "off", alias: "onoff" }
      ]
    }
  ],
  controls: [
    { name: "Slider", type: "slider", alias: "slider" },
    { name: "Button", type: "button", alias: "button" },
    {
      name: "EQ",
      type: "select",
      options: ["rock", "pop", "jazz", "balanced"],
      alias: "eq"
    },
    {
      name: "Playlist",
      type: "select",
      options: ["call me, maybe", "it was a good day", "clarity"],
      alias: "playlist"
    },
    { name: "Power", type: "button", alias: "power" },
    { name: "Brightness", type: "slider", alias: "brightness" },
    { name: "Volume", type: "slider", alias: "volume" },
    { name: "On/Off", type: "button", alias: "onoff" }
  ],
  controlTypes: [{ type: "slider" }, { type: "select" }, { type: "button" }]
};

const mapTypes = {
  ADD_CONTROL: "controls",
  ADD_DEVICE: "devices",
  EDIT_CONTROL: "controls",
  EDIT_DEVICE: "devices",
  REMOVE_CONTROL: "controls",
  REMOVE_DEVICE: "devices"
};

export default function admin(state = initialState, action) {
  const selectState = mapTypes[`${action.type}`];
  switch (action.type) {
    case types.ADD_DEVICE:
    case types.ADD_CONTROL: {
      const addAny = concat(state[selectState], [action.payload]);
      return assocPath([selectState], addAny, state);
    }
    case types.EDIT_DEVICE:
    case types.EDIT_CONTROL: {
      const updateAny = update(
        findIndex(v => v.alias === action.payload.alias, state[selectState]),
        action.payload,
        state[selectState]
      );
      return assocPath([selectState], updateAny, state);
    }
    case types.REMOVE_DEVICE:
    case types.REMOVE_CONTROL: {
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
