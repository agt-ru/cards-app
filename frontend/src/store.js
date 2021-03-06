import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userListReducer, userDetailsReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  userList: userListReducer,
  userDetails: userDetailsReducer,
});

const initialState = {
  userList: {
    users: [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
