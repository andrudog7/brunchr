export default function commentReducer(state = [], action){
    let newArray
    let combined
    let relationship
    switch(action.type){
        case "ADD_COMMENT":
            newArray = [...state.state]
            combined = [action.comment]
            return { state: combined.concat(newArray)} 
        case "FETCH_COMMENTS":
            return {state: action.comments}
        default:
            return state
    }
}