import { combineReducers } from "redux";
import restaurantReducer from './restaurantReducer'
import userReducer from './userReducer'
import navBarReducer from './navBarReducer'
import statsReducer from './statsReducer'

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  currentUser: userReducer,
  navBar: navBarReducer,
  stats: statsReducer
});

export default rootReducer;