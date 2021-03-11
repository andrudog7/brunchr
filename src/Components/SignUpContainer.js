import React from 'react' 
import { Button, Header, Form } from 'semantic-ui-react'


export default class SignUpContainer extends React.Component {
    render() {
        return(
            <div>
                <Header size="huge">SignUp Here</Header>
                <Form style={{textAlign:"center"}}>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Username</label>
                    <input style={{width:"250px"}}placeholder='Username' />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Email</label>
                    <input style={{width:"250px"}}type="email" placeholder='Email' />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Password</label>
                    <input style={{width:"250px"}}type="password" placeholder='Password' />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>City</label>
                    <input style={{width:"250px"}}placeholder='City' />
                </Form.Field>
                <Form.Field inline>
                    <label style={{width:"100px"}}>Profile Picture</label>
                    <input style={{width:"250px"}} type="file" placeholder='Avatar' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}