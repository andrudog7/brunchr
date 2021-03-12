export default function userReducer(state = [], action){
    switch(action.type){
        case "SIGN_UP_USER":
            return {state: action.payload};
        case "LOGOUT":
            localStorage.removeItem('jwt')
            return {state: []};
        default:
            return state
    }
}