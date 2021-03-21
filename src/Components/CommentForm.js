import React from 'react' 
import { Button, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {addComment} from '../Actions/CommentActions'


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
        this.props.addComment(this.state.comment, this.props.restaurantId, this.props.userId)
        this.setState({
            comment: ""
        })
    }

    render() {
        return(
            <div style={{textAlign:"center"}}>
                <Form style={{textAlign:"center"}} onSubmit={this.handleCommentSubmit}>
                
                <Form.Field inline>
                    <textarea rows="3" columns="4" style={{width:"250px"}}placeholder='Add New Comment' name="comment" onChange={this.handleChange} value={this.state.comment} />
                    
                </Form.Field>
                <Button size='mini' type='submit'>Submit</Button>
                </Form>
                <br></br>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (comment, restaurantId, userId) => dispatch(addComment(comment, restaurantId, userId)),
})


export default connect(null, mapDispatchToProps)(CommentForm)