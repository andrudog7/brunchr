const addRestaurants = (restaurants) => ({type: "FETCH_RESTAURANTS", payload: restaurants})

export const fetchRestaurants = () => {
    return (dispatch) => {
    let newRestaurantObj = {
        restaurant: {
            location: "New York"
        }
    }

    fetch('http://127.0.0.1:3000/restaurants', {
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
}