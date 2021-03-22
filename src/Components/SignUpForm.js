import React from 'react' 
import { Header, Form } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import NavBar from '../Containers/NavBar'
import {fetchNewUser} from '../Actions/UserActions'
import SubmitButton from './SubmitButton'


class SignUpForm extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        city: "",
        avatar: "",
        redirect: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    redirectToProfile = () => {
        this.props.updateNavbar("profile")
            this.setState({
                redirect: true
            })
    }

    handleSignUpSubmit = (event) => {
        event.preventDefault()
        this.props.fetchNewUser(this.state, this.redirectToProfile)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/profile"></Redirect>
        } else {
            return(
            <div>
                <NavBar></NavBar>
                <Header size="huge">Sign Up</Header>
                <Form style={{textAlign:"center"}} onSubmit={this.handleSignUpSubmit}>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Username</label>
                    <input style={{width:"250px"}}placeholder='Username' name="username" onChange={this.handleChange} value={this.state.username} />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Email</label>
                    <input style={{width:"250px"}}type="email" placeholder='Email' name="email" onChange={this.handleChange} value={this.state.email} />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Password</label>
                    <input style={{width:"250px"}}type="password" placeholder='Password' name="password" onChange={this.handleChange} value={this.state.password} />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>City</label>
                    <input style={{width:"250px"}}placeholder='City' name="city" onChange={this.handleChange} value={this.state.city} />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Profile Picture</label>
                    <input style={{width:"250px"}} type="text" placeholder='Image URL' name="avatar" onChange={this.handleChange} value={this.state.avatar} />
                </Form.Field>
                {SubmitButton()}
                <></>
                </Form>
            </div>
        )
    }}   
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewUser: (state, prop) => dispatch(fetchNewUser(state, prop)),   
        updateNavbar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload})
    }   
}

export default connect(null, mapDispatchToProps)(SignUpForm);