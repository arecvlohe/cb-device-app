import * as types from "../types";

const initialState = {
  devices: [
    { name: "Bedroom Apple TV", type: "Apple TV", alias: "apple-tv" },
    {
      name: "Livingroom Player",
      type: "Samsung Audio",
      alias: "samsung-audio"
    },
    { name: "Livingroom Lights", type: "Citrus Lights", alias: "citrus-lights" }
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
      return state;
    }
    case types.EDIT_DEVICE: {
      return state;
    }
    case types.REMOVE_DEVICE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
