import React from 'react' 
import { Card, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateStats } from '../../Actions/UserActions'

class DragBrunchVoteField extends React.Component {
    handleDragBrunchClick = (event) => {
        let attribute = {}
        if (event.target.className.includes("check") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Drag")) {
            attribute.drag_brunch = "true"
            this.props.addDragBrunchUpvote(this.props.restaurant.id)
            if (event.target.nextElementSibling.className.includes("red")) {
                this.props.subtractDragBrunchDownvote(this.props.restaurant.id)
            }
            
        } else if (event.target.className.includes("times") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Drag")) {
            attribute.drag_brunch = "false"
            this.props.addDragBrunchDownvote(this.props.restaurant.id)
            if (event.target.previousElementSibling.className.includes("green")) {
            this.props.subtractDragBrunchUpvote(this.props.restaurant.id)
        }
        } 
        this.props.updateStats(attribute, this.props.restaurant.id, this.props.currentUser.id)  
    }

    render() {
        const addDragBrunch = () => {
            if (this.props.userRestaurant && this.props.userRestaurant.drag_brunch != null) {
                return <Card.Description >{this.props.restaurant.drag_upvote} <Icon id={`dragup-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.drag_brunch ? "green" : "black"} name={this.props.userRestaurant.drag_brunch ? "check circle" : "check circle outline"} onClick={this.handleDragBrunchClick}/> Drag Brunch <Icon id={`outdoorseatingdown-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.drag_brunch ? "black" : "red"} name={this.props.userRestaurant.drag_brunch ? "times circle outline" : "times circle"} onClick={this.handleDragBrunchClick}/>{this.props.restaurant.drag_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.drag_upvote} <Icon id={`dragup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline" onClick={this.handleDragBrunchClick} /> Drag Brunch <Icon id={`dragdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline" onClick={this.handleDragBrunchClick}/>{this.props.restaurant.drag_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.drag_upvote} <Icon id={`dragup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> Drag Brunch <Icon id={`dragdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.drag_downvote}</Card.Description>
            }
        }
        return(
            <>
            {addDragBrunch()}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addDragBrunchUpvote: (restaurant) => dispatch({type: "ADD_DRAG_BRUNCH_UPVOTE", restaurant}),
    subtractDragBrunchUpvote: (restaurant) => dispatch({type: "SUBTRACT_DRAG_BRUNCH_UPVOTE", restaurant}),
    addDragBrunchDownvote: (restaurant) => dispatch({type: "ADD_DRAG_BRUNCH_DOWNVOTE", restaurant}),
    subtractDragBrunchDownvote: (restaurant) => dispatch({type: "SUBTRACT_DRAG_BRUNCH_DOWNVOTE", restaurant}),
    updateStats: (attribute, restaurant_id, user_id) => dispatch(updateStats(attribute, restaurant_id, user_id))
})

export default connect(null, mapDispatchToProps)(DragBrunchVoteField)