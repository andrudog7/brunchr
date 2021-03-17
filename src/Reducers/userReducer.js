export default function userReducer(state = [], action){
    let newArray
    switch(action.type){
        case "SIGN_UP_USER":
            return {state: action.payload};
        case 'LOGIN_USER':
            return {state: action.payload};
        case "LOGOUT":
            localStorage.removeItem('jwt')
            return {state: []};
        case "ADD_TO_PROFILE":
            newArray = [...state.state.my_restaurants]
            return { 
                ...state, 
                    state: {
                        ...state.state,
                        my_restaurants: newArray.concat(action.restaurant)
                    } 
            };
        case "REMOVE_FROM_PROFILE":
            newArray = [...state.state.my_restaurants]
            let index = state.state.my_restaurants.findIndex(res => res.id === action.restaurant_id)
            newArray.splice(index, 1)
            return { 
                ...state, 
                    state: {
                        ...state.state,
                        my_restaurants: newArray
                    } 
                };
        default:
            return state
    }
}