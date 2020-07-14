import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const InitialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  InitialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
