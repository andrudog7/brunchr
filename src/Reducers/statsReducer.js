export default function statsReducer(state = [], action){
    let index 
    let relationship 
    let newArray 
    switch(action.type){
        case "GET_USER_STATS":
            return {state: action.stats};
        case "UPDATE_RESTAURANT":
            if (state.state.find(rel => rel.id === action.data.id)) {
                relationship = state.state.find(rel => rel.id === action.data.id)
                index = state.state.indexOf(relationship); //finding index of the item
                newArray = [...state.state];
                newArray.splice(index, 1, action.data)
                return { //copying the orignal state
                    state: newArray //reassingning todos to new array
                }
            } else {
                newArray = [...state.state]
                newArray.push(action.data)
                return {...state, 
                    state: newArray
                }
            }
        default:
            return state
    }
}