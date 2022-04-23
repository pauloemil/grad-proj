import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { conversationsReducer } from "./reducers";

const rootReducer = combineReducers({
  conversationsReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
