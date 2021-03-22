export default function restaurantReducer(state = {restaurants: [], loading: false}, action){
    let restaurant
    let count
    let index
    let newArray
    let unique
    switch(action.type){
        case "ADD_INITIAL_RESTAURANTS":
            return {restaurants: action.restaurants};
        case "FETCH_RESTAURANTS":
            return {restaurants: action.payload, loading: false};
        case "REMOVE_FROM_PROFILE":
            newArray = [...state.restaurants]
            index = state.restaurants.findIndex(res => res.id === action.restaurant_id)
            newArray[index].favorite = "false"
            return { 
                ...state, 
                    restaurants: newArray
            };
        case "ADD_TO_PROFILE":
            newArray = [...state.restaurants]
            index = state.restaurants.findIndex(res => res.id === action.restaurant.id)
            newArray[index].favorite = "true"
            return { 
                ...state, 
                    restaurants: newArray
                } 
        case "ADD_MY_RESTAURANTS":
            newArray = [...state.restaurants]
            newArray.concat(action.payload)
            unique = [...new Set(newArray)]
            return {...state,
                restaurants: unique}
        case "FETCHING_RESTAURANTS":
            return {...state, loading: true};
        
        case "ADD_BOTTOMLESS_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.bottomless_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].bottomless_upvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_BOTTOMLESS_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.bottomless_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].bottomless_upvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_BOTTOMLESS_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.bottomless_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].bottomless_downvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_BOTTOMLESS_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.bottomless_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].bottomless_downvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_RESERVATIONS_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.reservations_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].reservations_upvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_RESERVATIONS_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.reservations_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].reservations_upvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_RESERVATIONS_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.reservations_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].reservations_downvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_RESERVATIONS_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.reservations_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].reservations_downvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_DRINK_SPECIALS_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.drink_specials_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].drink_specials_upvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_DRINK_SPECIALS_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.drink_specials_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].drink_specials_upvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_DRINK_SPECIALS_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.drink_specials_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].drink_specials_downvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_DRINK_SPECIALS_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.drink_specials_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].drink_specials_downvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_OUTDOOR_SEATING_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.outdoor_seating_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].outdoor_seating_upvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_OUTDOOR_SEATING_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.outdoor_seating_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].outdoor_seating_upvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_OUTDOOR_SEATING_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.outdoor_seating_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].outdoor_seating_downvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_OUTDOOR_SEATING_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.outdoor_seating_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].outdoor_seating_downvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_DRAG_BRUNCH_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.drag_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].drag_upvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_DRAG_BRUNCH_UPVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.drag_upvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].drag_upvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "ADD_DRAG_BRUNCH_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.drag_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].drag_downvote = count + 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
        case "SUBTRACT_DRAG_BRUNCH_DOWNVOTE":
            restaurant = state.restaurants.find(res => res.id === action.restaurant)
            count = restaurant.drag_downvote
            index = state.restaurants.indexOf(restaurant); 
            newArray = [...state.restaurants]; 
            newArray[index].drag_downvote = count - 1
            return { 
                ...state, 
                    restaurants: newArray, 
            };
                
        default:
            return state
    }
}