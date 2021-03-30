const signUpUser = (user) => ({type: "SIGN_UP_USER", payload: user})
const loginUser = (user) => ({type: "LOGIN_USER", payload: user})
const addRestaurant = (restaurant) => ({type: "ADD_TO_PROFILE", restaurant})
const removeRestaurant = (restaurant_id) => ({type: "REMOVE_FROM_PROFILE", restaurant_id})
const updateRestaurant = (data) => ({type: "UPDATE_RESTAURANT", data})
const getUserStats = (stats) => ({type: "GET_USER_STATS", stats})
const addInitialRestaurants = (restaurants) => ({type: "ADD_INITIAL_RESTAURANTS", restaurants})
const addStat = (data) => ({type: "ADD_STAT", data})

export const fetchNewUser = (state, redirectToProfile) => {
    return (dispatch) => {
    let newUserObj = {
        user: {
            username: state.username,
            email: state.email,
            password: state.password,
            city: state.city,
            image: state.avatar
        }
    }

    fetch('https://brunchr-backend.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUserObj)
        })
        .then(handleErrors)
        .then(r => r.json())
        .then(data => {
            localStorage.setItem("jwt", data.jwt)
            dispatch(signUpUser(data.user))
            redirectToProfile()
        })
        .catch(error => {
            alert("The username or email you used is not available.  Try again.")
        })
}
}

export const fetchUser = (state, redirectToProfile) => {
    return (dispatch) => {
    let userObj = {
        user: {
            username: state.username,
            password: state.password
        }
    }
    fetch('https://brunchr-backend.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(handleErrors)
        .then(r => r.json())
        .then(data => {
            localStorage.setItem("jwt", data.jwt)
            dispatch(loginUser(data.user))
            dispatch(getUserStats(data.user.users_restaurants))
            let my_data = data.user.my_restaurants.map(res => ({...res, favorite: "true"}))
            dispatch(addInitialRestaurants(my_data))
            redirectToProfile()
        })
        .catch(error => {
            alert("Username or password was incorrect")
        })
}
}

export const addRestaurantToProfile = (restaurant, user) => {
    return (dispatch) => {
    let obj = {
        users_restaurants: {
            restaurant_id: restaurant.id,
            user_id: user.id
        }
    }
    fetch('https://brunchr-backend.herokuapp.com/users_restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(obj)
        })
        .then(r => r.json())
        .then(data => {
            data.restaurant.favorite = "true"
            data.restaurant.search = restaurant.search
            dispatch(addRestaurant(data.restaurant))
            dispatch(addStat(data.relationship))
        })
}
}

export const removeFromProfile = (user_restaurant, restaurant) => {
    return (dispatch) => {
    let obj = {
        users_restaurants: {
            my_profile: "false"
        }
    }
    fetch(`https://brunchr-backend.herokuapp.com/users_restaurants/${user_restaurant.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(obj)
        })
        .then(r => r.json())
        .then(data => {
            data.favorite = "false"
            data.search = restaurant.search
            dispatch(removeRestaurant(user_restaurant.restaurant_id))
        })
}
}

export const updateStats = (attribute, restaurant_id, user_id) => {
    let obj
    return (dispatch) => {
        if (!!attribute.reservations) {
        obj = {
        users_restaurants: {
            restaurant_id: restaurant_id,
            user_id: user_id,
            reservations: attribute.reservations
        }}} else if (!!attribute.bottomless) {
            obj = {
                users_restaurants: {
                    restaurant_id: restaurant_id,
                    user_id: user_id,
                    bottomless: attribute.bottomless
        }}}else if (!!attribute.drink_specials) {
            obj = {
                users_restaurants: {
                    restaurant_id: restaurant_id,
                    user_id: user_id,
                    drink_specials: attribute.drink_specials
        }}}else if (!!attribute.outdoor_seating) {
            obj = {
                users_restaurants: {
                    restaurant_id: restaurant_id,
                    user_id: user_id,
                    outdoor_seating: attribute.outdoor_seating
        }}}else if (!!attribute.drag_brunch) {
            obj = {
                users_restaurants: {
                    restaurant_id: restaurant_id,
                    user_id: user_id,
                    drag_brunch: attribute.drag_brunch
        }}}
    fetch(`https://brunchr-backend.herokuapp.com/users_restaurants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(obj)
        })
        .then(r => r.json())
        .then(data => {
            dispatch(updateRestaurant(data))
        })
}
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

