import React from 'react' 
import { Card, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateStats } from '../../Actions/UserActions'

class OutdoorSeatingVoteField extends React.Component {
    handleOutdoorSeatingClick = (event) => {
        let attribute = {}
        if (event.target.className.includes("check") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Outdoor")) {
            attribute.outdoor_seating = "true"
            this.props.addOutdoorSeatingUpvote(this.props.restaurant.id)
            if (event.target.nextElementSibling.className.includes("red")) {
                this.props.subtractOutdoorSeatingDownvote(this.props.restaurant.id)
            }
            
        } else if (event.target.className.includes("times") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Outdoor")) {
            attribute.outdoor_seating = "false"
            this.props.addOutdoorSeatingDownvote(this.props.restaurant.id)
            if (event.target.previousElementSibling.className.includes("green")) {
            this.props.subtractOutdoorSeatingUpvote(this.props.restaurant.id)
        }
        } 
        this.props.updateStats(attribute, this.props.restaurant.id, this.props.currentUser.id)  
    }

    render() {
        const addOutdoorSeating = () => {
            if (this.props.userRestaurant && this.props.userRestaurant.outdoor_seating != null) {
                return <Card.Description >{this.props.restaurant.outdoor_seating_upvote} <Icon id={`outdoorseatingup-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.outdoor_seating ? "green" : "black"} name={this.props.userRestaurant.outdoor_seating ? "check circle" : "check circle outline"} onClick={this.handleOutdoorSeatingClick}/> Outdoor Seating <Icon id={`outdoorseatingdown-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.outdoor_seating ? "black" : "red"} name={this.props.userRestaurant.outdoor_seating ? "times circle outline" : "times circle"} onClick={this.handleOutdoorSeatingClick}/>{this.props.restaurant.outdoor_seating_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.outdoor_seating_upvote} <Icon id={`outdoorseatingup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline" onClick={this.handleOutdoorSeatingClick} /> Outdoor Seating <Icon id={`outdoorseatingdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline" onClick={this.handleOutdoorSeatingClick}/>{this.props.restaurant.outdoor_seating_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.outdoor_seating_upvote} <Icon id={`outdoorseatingup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> Outdoor Seating <Icon id={`outdoorseatingdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.outdoor_seating_downvote}</Card.Description>
            }
        }
        return(
            <>
            {addOutdoorSeating()}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addOutdoorSeatingUpvote: (restaurant) => dispatch({type: "ADD_OUTDOOR_SEATING_UPVOTE", restaurant}),
    subtractOutdoorSeatingUpvote: (restaurant) => dispatch({type: "SUBTRACT_OUTDOOR_SEATING_UPVOTE", restaurant}),
    addOutdoorSeatingDownvote: (restaurant) => dispatch({type: "ADD_OUTDOOR_SEATING_DOWNVOTE", restaurant}),
    subtractOutdoorSeatingDownvote: (restaurant) => dispatch({type: "SUBTRACT_OUTDOOR_SEATING_DOWNVOTE", restaurant}),
    updateStats: (attribute, restaurant_id, user_id) => dispatch(updateStats(attribute, restaurant_id, user_id))
})

export default connect(null, mapDispatchToProps)(OutdoorSeatingVoteField)