export default function userReducer(state = [], action){
    switch(action.type){
        case "SIGN_UP_USER":
            return {state: action.payload};
        case 'LOGIN_USER':
            return {state: action.payload};
        case "LOGOUT":
            localStorage.removeItem('jwt')
            return {state: []};
        case "UPDATE_BOTTOMLESS_UPVOTE":
            return {...state,
                users_restaurants: {
                    ...state.users_restaurants,
                    bottomless_upvote: 
                        !state.users_restaurants.find(res => res.id === action.payload).bottomless_upvote}}
        default:
            return state
    }
}