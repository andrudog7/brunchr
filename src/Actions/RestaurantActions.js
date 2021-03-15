const addRestaurants = (restaurants) => ({type: "FETCH_RESTAURANTS", payload: restaurants})
const fetchingtheRestaurants = () => ({type: "FETCHING_RESTAURANTS"})


export const fetchingRestaurants = () => {
    return (dispatch) => {
    dispatch(fetchingtheRestaurants())
    }
}

export const fetchRestaurants = (location) => (dispatch) => {
    let newRestaurantObj = {
        restaurant: {
            location: location
        }
    }
    
    return fetch('http://127.0.0.1:3000/restaurants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newRestaurantObj)
    })
    .then(r => r.json())
    .then(data => {
        dispatch(addRestaurants(data))
    })
}
