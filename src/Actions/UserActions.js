import { findAllByPlaceholderText } from "@testing-library/dom"

const signUpUser = (user) => ({type: "SIGN_UP_USER", payload: user})
const loginUser = (user) => ({type: "LOGIN_USER", payload: user})
const addRestaurant = (restaurant) => ({type: "ADD_TO_PROFILE", restaurant})
const removeRestaurant = (restaurant_id) => ({type: "REMOVE_FROM_PROFILE", restaurant_id})
const updateRestaurant = (data) => ({type: "UPDATE_RESTAURANT", data})
const getUserStats = (stats) => ({type: "GET_USER_STATS", stats})

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

    fetch('http://127.0.0.1:3000/users', {
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
    fetch('http://127.0.0.1:3000/login', {
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
            redirectToProfile()
        })
        .catch(error => {
            alert("Username or password was incorrect")
        })
}
}

export const addRestaurantToProfile = (restaurant, user, redirect) => {
    return (dispatch) => {
    let obj = {
        users_restaurants: {
            restaurant_id: restaurant.id,
            user_id: user.id
        }
    }
    fetch('http://127.0.0.1:3000/users_restaurants', {
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
            dispatch(addRestaurant(data))
            // redirect()
        })
}
}

export const removeFromProfile = (user_restaurant, flip) => {
    return (dispatch) => {
    let obj = {
        users_restaurants: {
            my_profile: "false"
        }
    }
    fetch(`http://127.0.0.1:3000/users_restaurants/${user_restaurant.id}`, {
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
            dispatch(removeRestaurant(user_restaurant.restaurant_id))
            flip()
        })
}
}

export const updateStats = (attribute, restaurant_id, user_id) => {
    let obj
    return (dispatch) => {
        debugger
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
        }}}
    fetch(`http://127.0.0.1:3000/users_restaurants`, {
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

