import React from 'react' 
import { Card, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateStats } from '../../Actions/UserActions'

class ReservationsVoteField extends React.Component {
    handleReservationsClick = (event) => {
        let attribute = {}
        if (event.target.className.includes("check") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Reservations")) {
            attribute.reservations = "true"
            this.props.addReservationsUpvote(this.props.restaurant.id)
            if (event.target.nextElementSibling.className.includes("red")) {
                this.props.subtractReservationsDownvote(this.props.restaurant.id)
            }
            
        } else if (event.target.className.includes("times") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Reservations")) {
            attribute.reservations = "false"
            this.props.addReservationsDownvote(this.props.restaurant.id)
            if (event.target.previousElementSibling.className.includes("green")) {
            this.props.subtractReservationsUpvote(this.props.restaurant.id)
        }
        } 
        this.props.updateStats(attribute, this.props.restaurant.id, this.props.currentUser.id)  
    }

    render() {
        const addReservations = () => {
            if (this.props.userRestaurant && this.props.userRestaurant.reservations != null) {
                return <Card.Description >{this.props.restaurant.reservations_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.reservations ? "green" : "black"} name={this.props.userRestaurant.reservations ? "check circle" : "check circle outline"} onClick={this.handleReservationsClick}/> Reservations <Icon id={`reservationsdown-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.reservations ? "black" : "red"} name={this.props.userRestaurant.reservations ? "times circle outline" : "times circle"} onClick={this.handleReservationsClick}/>{this.props.restaurant.reservations_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.reservations_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline" onClick={this.handleReservationsClick} /> Reservations<Icon id={`reservationsdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline" onClick={this.handleReservationsClick}/>{this.props.restaurant.reservations_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.reservations_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> Reservations <Icon id={`reservationsdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.reservations_downvote}</Card.Description>
            }
        }
        return(
            <>
            {addReservations()}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addReservationsUpvote: (restaurant) => dispatch({type: "ADD_RESERVATIONS_UPVOTE", restaurant}),
    subtractReservationsUpvote: (restaurant) => dispatch({type: "SUBTRACT_RESERVATIONS_UPVOTE", restaurant}),
    addReservationsDownvote: (restaurant) => dispatch({type: "ADD_RESERVATIONS_DOWNVOTE", restaurant}),
    subtractReservationsDownvote: (restaurant) => dispatch({type: "SUBTRACT_RESERVATIONS_DOWNVOTE", restaurant}),
    updateStats: (attribute, restaurant_id, user_id) => dispatch(updateStats(attribute, restaurant_id, user_id))
})

export default connect(null, mapDispatchToProps)(ReservationsVoteField)