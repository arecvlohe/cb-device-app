import { combineReducers } from "redux";

import admin from "./admin";
import app from "./app";

export default combineReducers({
  app,
  admin
});
