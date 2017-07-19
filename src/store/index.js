import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import root from "./reducers";

const middleware = [];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  root,
  composeEnhancers(applyMiddleware(...middleware))
);
