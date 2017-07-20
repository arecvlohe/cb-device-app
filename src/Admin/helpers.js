export function replaceParams(url, params) {
  const urls = url.split("/");
  return urls
    .map(v => {
      if (v.includes(":") && params[v.slice(1)]) {
        return params[v.slice(1)];
      }
      return v;
    })
    .join("/");
}

export function isAddRoute(match) {
  return match.path.split("/")[2] === "add";
}

export function isEditRoute(match) {
  return match.path.split("/")[2] === "edit";
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function titleCase(str) {
  return str.split("-").map(capitalize).join("");
}

export function getDevice(devices, alias) {
  return devices.find(v => v.alias === alias);
}
