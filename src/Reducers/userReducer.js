export default function userReducer(state = [], action){
    let newArray
    let index
    let relationship
    switch(action.type){
        case "SIGN_UP_USER":
            return {state: action.payload};
        case 'LOGIN_USER':
            return {state: action.payload};
        case "LOGOUT":
            localStorage.removeItem('jwt')
            return {state: []};
        // case "ADD_INITIAL_RESTAURANTS":
        //     debugger
        //     return {restaurants: action.payload};
        case "ADD_TO_PROFILE":
            newArray = [...state.state.my_restaurants]
            return { 
                ...state, 
                    state: {
                        ...state.state,
                        my_restaurants: [action.restaurant, ...newArray]
                    } 
            };
        case "REMOVE_FROM_PROFILE":
            newArray = [...state.state.my_restaurants]
            index = state.state.my_restaurants.findIndex(res => res.id === action.restaurant_id)
            newArray.splice(index, 1)
            return { 
                ...state, 
                    state: {
                        ...state.state,
                        my_restaurants: newArray
                    } 
                };
            case "UPDATE_RESTAURANT":
                if (state.state.users_restaurants.find(rel => rel.id === action.data.id)) {
                    relationship = state.state.users_restaurants.find(rel => rel.id === action.data.id)
                } else {
                    relationship = action.data
                }
                index = state.state.users_restaurants.indexOf(relationship); //finding index of the item
                newArray = [...state.state.users_restaurants];
                newArray.splice(index, 1, relationship)
                return { 
                    ...state, //copying the orignal state
                        state: {
                            ...state.state,
                            users_restaurants: newArray //reassingning todos to new array
                    }
                }
        default:
            return state
    }
}