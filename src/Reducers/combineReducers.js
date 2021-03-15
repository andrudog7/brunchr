import { combineReducers } from "redux";
import restaurantReducer from './restaurantReducer'
import reviewReducer from './reviewReducer'
import userReducer from './userReducer'
import navBarReducer from './navBarReducer'

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewReducer,
  currentUser: userReducer,
  navBar: navBarReducer
});

export default rootReducer;