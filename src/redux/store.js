import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { conversationsReducer, userReducer } from "./reducers";

const rootReducer = combineReducers({
  conversationsReducer,
  userReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
