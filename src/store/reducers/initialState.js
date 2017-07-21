export default {
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
          alias: "playlist",
          options: ["call me, maybe", "it was a good day", "clarity"]
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
          alias: "playlist",
          options: ["call me, maybe", "it was a good day", "clarity"]
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
