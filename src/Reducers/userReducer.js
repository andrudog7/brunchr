export default function userReducer(state = [], action){
    switch(action.type){
        case "ADD_CURRENT_USER":
            return {state: action.payload};
        default:
            return state
    }
}