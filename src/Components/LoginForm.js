import React from 'react' 
import NavBar from '../Containers/NavBar'
import { Header, Form } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser} from '../Actions/UserActions'
import SubmitButton from './SubmitButton'


class LoginForm extends React.Component {
    state = {
        username: "",
        password: "",
        redirect: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    redirectToProfile = () => {
        this.props.updateNavbar("My Favorites")
        this.setState({
            redirect: true
        })
    }

    handleLoginSubmit = (event) => {
        event.preventDefault()
        this.props.fetchUser(this.state, this.redirectToProfile)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/profile"></Redirect>
        } else {
        return(
            <div>
                <br></br>
                <NavBar></NavBar>
                <Header size="huge">Login</Header>
                <Form style={{textAlign:"center"}} onSubmit={this.handleLoginSubmit}>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Username</label>
                    <input style={{width:"250px"}}placeholder='Username' name="username" onChange={this.handleChange} value={this.state.username} />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Password</label>
                    <input type="password" style={{width:"250px"}} placeholder='Password' name="password" onChange={this.handleChange} value={this.state.password} />
                </Form.Field>
                {SubmitButton()}
                <></>
                </Form>
            </div>
        )
    }}
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (state, prop) => dispatch(fetchUser(state, prop)),
    updateNavbar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload})
})


export default connect(null, mapDispatchToProps)(LoginForm)