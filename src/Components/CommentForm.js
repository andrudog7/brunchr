import React from 'react' 
import NavBar from '../Containers/NavBar'
import { Button, Header, Form } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser} from '../Actions/UserActions'


class CommentForm extends React.Component {
    state = {
        comment: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCommentSubmit = (event) => {
        event.preventDefault()
        this.props.addComment(this.state.query)
    }

    render() {
        return(
            <div style={{textAlign:"center"}}>
                <Header as='h3'>Comments</Header><br></br>
                <Form style={{textAlign:"center"}} onSubmit={this.handleCommentSubmit}>
                
                <Form.Field inline>
                    <textarea rows="3" columns="4" style={{width:"250px"}}placeholder='Add New Comment' name="username" onChange={this.handleChange} value={this.state.username} />
                    
                </Form.Field>
                <Button size='mini' type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (state, prop) => dispatch(fetchUser(state, prop)),
    updateNavbar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload})
})


export default connect(null, mapDispatchToProps)(CommentForm)