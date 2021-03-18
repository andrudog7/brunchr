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
                
        default:
            return state
    }
}