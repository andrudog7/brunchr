export default function restaurantReducer(state = {restaurants: [], loading: false}, action){
    switch(action.type){
        case "FETCH_RESTAURANTS":
            return {restaurants: action.payload, loading: false};
        case "FETCHING_RESTAURANTS":
            return {...state, loading: true};
        case "NICKEL":
            return {...state, total: state.total + 5};
        case "PENNY":
            return {...state, total: state.total + 1};
        default:
            return state
    }
}