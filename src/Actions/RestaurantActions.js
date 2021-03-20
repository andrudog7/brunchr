const addRestaurants = (restaurants) => ({type: "FETCH_RESTAURANTS", payload: restaurants})
const fetchingtheRestaurants = () => ({type: "FETCHING_RESTAURANTS"})
const addMyRestaurants = (restaurants) => ({type: "ADD_MY_RESTAURANTS", payload: restaurants})


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
    let my_data
    let allRestaurants
    let uniqueRestaurants
    
    return fetch('http://127.0.0.1:3000/restaurants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify(newRestaurantObj)
    })
    .then(r => r.json())
    .then(data => {
        my_data = data.my_restaurants.map(res => ({...res, favorite: "true"}))
        let search_data = data.restaurants.map(res => ({...res, search: "true" }))
        allRestaurants = search_data.concat(my_data)
        let overlapIndexes = allRestaurants.map(res => res.id).filter((value, index, self) => self.indexOf(value) != index)
        let duplicates = []
        for (let i = 0; i<overlapIndexes.length; i++) {
            if (my_data.find(r => r.id === overlapIndexes[i])) {
            duplicates.push(my_data.find(r => r.id === overlapIndexes[i]))
            }}
        let finalDuplicates = duplicates.map(res => ({...res, search: "true"}))
        let finalRestaurants = allRestaurants.concat(finalDuplicates)
        uniqueRestaurants = [...new Map(finalRestaurants.map(item =>
            [item["id"], item])).values()]
        dispatch(addRestaurants(uniqueRestaurants))
        // dispatch(addMyRestaurants(my_data))
    })
}
