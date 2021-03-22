import React from 'react'
import {List, Header} from 'semantic-ui-react'
import CommentDisplay from './CommentDisplay'
import CommentForm from './CommentForm'

export default class CommentContainer extends React.Component {
    render() {

        return(
            <List>  
                 <Header as='h3'>Comments</Header>
                <List.Item>
                    {!!this.props.currentUser ? <CommentForm userId={this.props.currentUser.id} restaurantId={this.props.restaurant.id}></CommentForm> : null}
                </List.Item>
                <CommentDisplay comments={this.props.comments}></CommentDisplay>
            </List>  
        )
    }
}