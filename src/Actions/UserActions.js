const signUpUser = (user) => ({type: "SIGN_UP_USER", payload: user})

export const fetchNewUser = () => {
    return (dispatch) => {
    let userObj = {
        user: {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            city: this.state.city,
            image: this.state.avatar
        }
    }

    fetch('http://127.0.0.1:3000/users', {
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
            dispatch(signUpUser(data.user))
            this.props.updateNavbar("profile")
            this.setState({
            redirect: true
        })
        })
}
}

