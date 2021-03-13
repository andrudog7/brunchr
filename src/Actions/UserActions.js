const signUpUser = (user) => ({type: "SIGN_UP_USER", payload: user})
const loginUser = (user) => ({type: "LOGIN_USER", payload: user})

export const fetchNewUser = (state) => {
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
        .then(r => r.json())
        .then(data => {
            localStorage.setItem("jwt", data.jwt)
            dispatch(signUpUser(data.user))
        })
}
}

export const fetchUser = (state) => {
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
        .then(r => r.json())
        .then(data => {
            localStorage.setItem("jwt", data.jwt)
            dispatch(loginUser(data.user))
        })
}
}

