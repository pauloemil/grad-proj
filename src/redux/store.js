import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { conversationsReducer, userReducer, resetReducer } from "./reducers";

const rootReducer = combineReducers({
  conversationsReducer,
  userReducer,
  resetReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
