import { combineReducers } from "redux";
import restaurantReducer from './restaurantReducer'
import userReducer from './userReducer'
import navBarReducer from './navBarReducer'
import statsReducer from './statsReducer'
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  currentUser: userReducer,
  navBar: navBarReducer,
  stats: statsReducer,
  comments: commentReducer
});

export default rootReducer;