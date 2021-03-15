export default function navBarReducer(state = {active: ""}, action){
    switch(action.type){
        case "HANDLE_NAVBAR":
            return {active: action.payload}
        default:
            return state
    }
}