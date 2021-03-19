export default function restaurantReducer(state = {restaurants: [], loading: false}, action){
    let restaurant
    let count
    let index
    let newArray
    switch(action.type){
        
        case "FETCH_RESTAURANTS":
            return {restaurants: action.payload, loading: false};
        case "FETCHING_RESTAURANTS":
            return {...state, loading: true};
        case "ADD_BOTTOMLESS_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.bottomless_upvote
            index = state.restaurants.indexOf(restaurant); //finding index of the item
            newArray = [...state.restaurants]; //making a new array
            newArray[index].bottomless_upvote = count + 1//changing value in the new array
            return { 
                ...state, //copying the orignal state
                    restaurants: newArray, //reassingning todos to new array
            };
        case "SUBTRACT_BOTTOMLESS_UPVOTE":
                restaurant = state.restaurants.find(res => res.id === action.restaurant)
                count = restaurant.bottomless_upvote
                index = state.restaurants.indexOf(restaurant); //finding index of the item
                newArray = [...state.restaurants]; //making a new array
                newArray[index].bottomless_upvote = count - 1//changing value in the new array
                return { 
                    ...state, //copying the orignal state
                        restaurants: newArray, //reassingning todos to new array
                };
            case "ADD_BOTTOMLESS_DOWNVOTE":
                restaurant = state.restaurants.find(res => res.id === action.restaurant)
                count = restaurant.bottomless_downvote
                index = state.restaurants.indexOf(restaurant); //finding index of the item
                newArray = [...state.restaurants]; //making a new array
                newArray[index].bottomless_downvote = count + 1//changing value in the new array
                return { 
                    ...state, //copying the orignal state
                        restaurants: newArray, //reassingning todos to new array
                };
                case "SUBTRACT_BOTTOMLESS_DOWNVOTE":
                    restaurant = state.restaurants.find(res => res.id === action.restaurant)
                    count = restaurant.bottomless_downvote
                    index = state.restaurants.indexOf(restaurant); //finding index of the item
                    newArray = [...state.restaurants]; //making a new array
                    newArray[index].bottomless_downvote = count - 1//changing value in the new array
                    return { 
                        ...state, //copying the orignal state
                            restaurants: newArray, //reassingning todos to new array
                    };
                    case "ADD_RESERVATIONS_UPVOTE":
                        restaurant = state.restaurants.find(res => res.id === action.restaurant)
                        count = restaurant.reservations_upvote
                        index = state.restaurants.indexOf(restaurant); //finding index of the item
                        newArray = [...state.restaurants]; //making a new array
                        newArray[index].reservations_upvote = count + 1//changing value in the new array
                        return { 
                            ...state, //copying the orignal state
                                restaurants: newArray, //reassingning todos to new array
                        };
                    case "SUBTRACT_RESERVATIONS_UPVOTE":
                            restaurant = state.restaurants.find(res => res.id === action.restaurant)
                            count = restaurant.reservations_upvote
                            index = state.restaurants.indexOf(restaurant); //finding index of the item
                            newArray = [...state.restaurants]; //making a new array
                            newArray[index].reservations_upvote = count - 1//changing value in the new array
                            return { 
                                ...state, //copying the orignal state
                                    restaurants: newArray, //reassingning todos to new array
                            };
                        case "ADD_RESERVATIONS_DOWNVOTE":
                            restaurant = state.restaurants.find(res => res.id === action.restaurant)
                            count = restaurant.reservations_downvote
                            index = state.restaurants.indexOf(restaurant); //finding index of the item
                            newArray = [...state.restaurants]; //making a new array
                            newArray[index].reservations_downvote = count + 1//changing value in the new array
                            return { 
                                ...state, //copying the orignal state
                                    restaurants: newArray, //reassingning todos to new array
                            };
                            case "SUBTRACT_RESERVATIONS_DOWNVOTE":
                                restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                count = restaurant.reservations_downvote
                                index = state.restaurants.indexOf(restaurant); //finding index of the item
                                newArray = [...state.restaurants]; //making a new array
                                newArray[index].reservations_downvote = count - 1//changing value in the new array
                                return { 
                                    ...state, //copying the orignal state
                                        restaurants: newArray, //reassingning todos to new array
                                };
                                case "ADD_DRINK_SPECIALS_UPVOTE":
                                    restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                    count = restaurant.drink_specials_upvote
                                    index = state.restaurants.indexOf(restaurant); //finding index of the item
                                    newArray = [...state.restaurants]; //making a new array
                                    newArray[index].drink_specials_upvote = count + 1//changing value in the new array
                                    return { 
                                        ...state, //copying the orignal state
                                            restaurants: newArray, //reassingning todos to new array
                                    };
                                case "SUBTRACT_DRINK_SPECIALS_UPVOTE":
                                        restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                        count = restaurant.drink_specials_upvote
                                        index = state.restaurants.indexOf(restaurant); //finding index of the item
                                        newArray = [...state.restaurants]; //making a new array
                                        newArray[index].drink_specials_upvote = count - 1//changing value in the new array
                                        return { 
                                            ...state, //copying the orignal state
                                                restaurants: newArray, //reassingning todos to new array
                                        };
                                    case "ADD_DRINK_SPECIALS_DOWNVOTE":
                                        restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                        count = restaurant.drink_specials_downvote
                                        index = state.restaurants.indexOf(restaurant); //finding index of the item
                                        newArray = [...state.restaurants]; //making a new array
                                        newArray[index].drink_specials_downvote = count + 1//changing value in the new array
                                        return { 
                                            ...state, //copying the orignal state
                                                restaurants: newArray, //reassingning todos to new array
                                        };
                                        case "SUBTRACT_DRINK_SPECIALS_DOWNVOTE":
                                            restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                            count = restaurant.drink_specials_downvote
                                            index = state.restaurants.indexOf(restaurant); //finding index of the item
                                            newArray = [...state.restaurants]; //making a new array
                                            newArray[index].drink_specials_downvote = count - 1//changing value in the new array
                                            return { 
                                                ...state, //copying the orignal state
                                                    restaurants: newArray, //reassingning todos to new array
                                            };
                                            case "ADD_OUTDOOR_SEATING_UPVOTE":
                                    restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                    count = restaurant.outdoor_seating_upvote
                                    index = state.restaurants.indexOf(restaurant); //finding index of the item
                                    newArray = [...state.restaurants]; //making a new array
                                    newArray[index].outdoor_seating_upvote = count + 1//changing value in the new array
                                    return { 
                                        ...state, //copying the orignal state
                                            restaurants: newArray, //reassingning todos to new array
                                    };
                                case "SUBTRACT_OUTDOOR_SEATING_UPVOTE":
                                        restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                        count = restaurant.outdoor_seating_upvote
                                        index = state.restaurants.indexOf(restaurant); //finding index of the item
                                        newArray = [...state.restaurants]; //making a new array
                                        newArray[index].outdoor_seating_upvote = count - 1//changing value in the new array
                                        return { 
                                            ...state, //copying the orignal state
                                                restaurants: newArray, //reassingning todos to new array
                                        };
                                    case "ADD_OUTDOOR_SEATING_DOWNVOTE":
                                        restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                        count = restaurant.outdoor_seating_downvote
                                        index = state.restaurants.indexOf(restaurant); //finding index of the item
                                        newArray = [...state.restaurants]; //making a new array
                                        newArray[index].outdoor_seating_downvote = count + 1//changing value in the new array
                                        return { 
                                            ...state, //copying the orignal state
                                                restaurants: newArray, //reassingning todos to new array
                                        };
                                        case "SUBTRACT_OUTDOOR_SEATING_DOWNVOTE":
                                            restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                            count = restaurant.outdoor_seating_downvote
                                            index = state.restaurants.indexOf(restaurant); //finding index of the item
                                            newArray = [...state.restaurants]; //making a new array
                                            newArray[index].outdoor_seating_downvote = count - 1//changing value in the new array
                                            return { 
                                                ...state, //copying the orignal state
                                                    restaurants: newArray, //reassingning todos to new array
                                            };
                                            case "ADD_DRAG_BRUNCH_UPVOTE":
                                    restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                    count = restaurant.drag_upvote
                                    index = state.restaurants.indexOf(restaurant); //finding index of the item
                                    newArray = [...state.restaurants]; //making a new array
                                    newArray[index].drag_upvote = count + 1//changing value in the new array
                                    return { 
                                        ...state, //copying the orignal state
                                            restaurants: newArray, //reassingning todos to new array
                                    };
                                case "SUBTRACT_DRAG_BRUNCH_UPVOTE":
                                        restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                        count = restaurant.drag_upvote
                                        index = state.restaurants.indexOf(restaurant); //finding index of the item
                                        newArray = [...state.restaurants]; //making a new array
                                        newArray[index].drag_upvote = count - 1//changing value in the new array
                                        return { 
                                            ...state, //copying the orignal state
                                                restaurants: newArray, //reassingning todos to new array
                                        };
                                    case "ADD_DRAG_BRUNCH_DOWNVOTE":
                                        restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                        count = restaurant.drag_downvote
                                        index = state.restaurants.indexOf(restaurant); //finding index of the item
                                        newArray = [...state.restaurants]; //making a new array
                                        newArray[index].drag_downvote = count + 1//changing value in the new array
                                        return { 
                                            ...state, //copying the orignal state
                                                restaurants: newArray, //reassingning todos to new array
                                        };
                                        case "SUBTRACT_DRAG_BRUNCH_DOWNVOTE":
                                            restaurant = state.restaurants.find(res => res.id === action.restaurant)
                                            count = restaurant.drag_downvote
                                            index = state.restaurants.indexOf(restaurant); //finding index of the item
                                            newArray = [...state.restaurants]; //making a new array
                                            newArray[index].drag_downvote = count - 1//changing value in the new array
                                            return { 
                                                ...state, //copying the orignal state
                                                    restaurants: newArray, //reassingning todos to new array
                                            };
                
        default:
            return state
    }
}