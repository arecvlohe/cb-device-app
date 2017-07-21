import * as types from "../types";
import adjust from "ramda/src/adjust";
import assocPath from "ramda/src/assocPath";
import compose from "ramda/src/compose";
import concat from "ramda/src/concat";
import findIndex from "ramda/src/findIndex";
import remove from "ramda/src/remove";
import update from "ramda/src/update";

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
      controls: [
        { name: "Power", type: "button", currentValue: "off" },
        { name: "Volume", type: "slider", currentValue: 50 },
        { name: "Playlist", type: "select", currentValue: "" }
      ]
    },
    {
      name: "Sony Audio",
      alias: "sony-audio",
      controls: [
        { name: "Power", type: "button", currentValue: "off" },
        { name: "Volume", type: "slider", currentValue: 0 },
        { name: "Playlist", type: "select", currentValue: "" }
      ]
    },
    {
      name: "Apple TV",
      alias: "apple-tv",
      controls: [
        { name: "Power", type: "button", currentValue: "off" },
        { name: "Brightness", type: "slider", currentValue: 100 },
        { name: "Volume", type: "slider", currentValue: 50 }
      ]
    },
    {
      name: "Citrus Lights",
      alias: "citrus-lights",
      controls: [{ name: "On/Off", type: "button", currentValue: "off" }]
    }
  ],
  controls: [
    { name: "Slider", type: "slider" },
    { name: "Button", type: "button" },
    {
      name: "EQ",
      type: "select",
      options: ["rock", "pop", "jazz", "balanced"]
    },
    {
      name: "Playlist",
      type: "select",
      options: ["call me, maybe", "it was a good day", "clarity"]
    }
  ]
};

export default function admin(state = initialState, action) {
  switch (action.type) {
    case types.ADD_DEVICE: {
      const addDevice = concat(state.devices, [action.payload]);
      return assocPath(["devices"], addDevice, state);
    }
    case types.EDIT_DEVICE: {
      const updateDevice = update(
        findIndex(v => v.alias === action.payload.alias, state.devices),
        action.payload,
        state.devices
      );
      return assocPath(["devices"], updateDevice, state);
    }
    case types.REMOVE_DEVICE: {
      const removeDevice = remove(
        findIndex(v => v.alias === action.payload.alias),
        1,
        state.devices
      );
      return assocPath(["devices"], removeDevice, state);
    }
    default: {
      return state;
    }
  }
}
