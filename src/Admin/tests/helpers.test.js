import {
  capitalize,
  isAddRoute,
  isEditRoute,
  kabobCase,
  replaceParams,
  titleCase
} from "../helpers";
import Urls from "../../urls";

describe("helpers", () => {
  test("replaceParams()", () => {
    const actual = "/admin/add/devices";
    const expected = replaceParams(Urls.Admin.Add, { type: "devices" });
    expect(actual).toEqual(expected);
  });
  test("isEditRoute", () => {
    const match = { path: "/admin/edit/:types" };
    const actual = true;
    const expected = isEditRoute(match);
    expect(actual).toBe(expected);
  });
  test("isAddRoute", () => {
    const match = { path: "/admin/add/:type" };
    const actual = true;
    const expected = isAddRoute(match);
    expect(actual).toBe(expected);
  });
  test("capitalize()", () => {
    const str = "string";
    const actual = "String";
    const expected = capitalize(str);
    expect(actual).toEqual(expected);
  });
  test("titleCase()", () => {
    const str = "device-types";
    const actual = "DeviceTypes";
    const expected = titleCase(str);
    expect(actual).toEqual(expected);
  });
  test("kabobCase()", () => {
    const str = "Adam's Device";
    const actual = "adams-device";
    const expected = kabobCase(str);
    expect(actual).toEqual(expected);
  });
});
