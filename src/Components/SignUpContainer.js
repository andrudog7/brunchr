import React from 'react' 
import { Button, Header, Form } from 'semantic-ui-react'

export default class SignUpContainer extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        city: "",
        avatar: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignUpSubmit = (event) => {
        event.preventDefault()

        let userObj = {
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                city: this.state.city,
                avatar: this.state.avatar
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
            console.log(data)
    })
    }

    render() {
        return(
            <div>
                <Header size="huge">SignUp Below</Header>
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
                    <input style={{width:"250px"}} type="file" placeholder='Avatar' name="avatar" onChange={this.handleChange} value={this.state.avatar} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}