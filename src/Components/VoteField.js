import React from 'react'
import {Card, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateStats } from '../Actions/UserActions'


class VoteField extends React.Component {
        
    handleBottomlessClick = (event) => {
        let attribute = {}
        if (event.target.className.includes("check") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Bottomless")) {
            attribute.bottomless = "true"
            this.props.addBottomlessUpvote(this.props.restaurant.id)
            if (event.target.nextElementSibling.className.includes("red")) {
                this.props.subtractBottomlessDownvote(this.props.restaurant.id)
            }
            
        } else if (event.target.className.includes("times") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Bottomless")) {
            attribute.bottomless = "false"
            this.props.addBottomlessDownvote(this.props.restaurant.id)
            if (event.target.previousElementSibling.className.includes("blue")) {
            this.props.subtractBottomlessUpvote(this.props.restaurant.id)
        }
        } 
        this.props.updateStats(attribute, this.props.restaurant.id, this.props.currentUser.id)  
    }

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
            if (event.target.previousElementSibling.className.includes("blue")) {
            this.props.subtractReservationsUpvote(this.props.restaurant.id)
        }
        } 
        this.props.updateStats(attribute, this.props.restaurant.id, this.props.currentUser.id)  
    }

    handleDrinkSpecialsClick = (event) => {
        let attribute = {}
        if (event.target.className.includes("check") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Drink")) {
            attribute.drink_specials = "true"
            this.props.addDrinkSpecialsUpvote(this.props.restaurant.id)
            if (event.target.nextElementSibling.className.includes("red")) {
                this.props.subtractDrinkSpecialsDownvote(this.props.restaurant.id)
            }
            
        } else if (event.target.className.includes("times") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Drink")) {
            attribute.drink_specials = "false"
            this.props.addDrinkSpecialsDownvote(this.props.restaurant.id)
            if (event.target.previousElementSibling.className.includes("blue")) {
            this.props.subtractDrinkSpecialsUpvote(this.props.restaurant.id)
        }
        } 
        this.props.updateStats(attribute, this.props.restaurant.id, this.props.currentUser.id)  
    }

    render() {
        let userRestaurant
        if (this.props.currentUser) {
        userRestaurant = this.props.userRestaurants.find(rel => rel.restaurant_id === this.props.restaurant.id)
        }
        const addBottomless = () => {
            if (userRestaurant && userRestaurant.bottomless != null) {
                return <Card.Description >{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color={userRestaurant.bottomless ? "blue" : "black"} name={userRestaurant.bottomless ? "check circle" : "check circle outline"} onClick={this.handleBottomlessClick}/> Bottomless <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color={userRestaurant.bottomless ? "black" : "red"} name={userRestaurant.bottomless ? "times circle outline" : "times circle"} onClick={this.handleBottomlessClick}/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline" onClick={this.handleBottomlessClick} /> BottomlessTest <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline" onClick={this.handleBottomlessClick}/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> BottomlessNoUser <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            }
        }

        const addReservations = () => {
            if (userRestaurant && userRestaurant.reservations != null) {
                return <Card.Description >{this.props.restaurant.reservations_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color={userRestaurant.reservations ? "blue" : "black"} name={userRestaurant.reservations ? "check circle" : "check circle outline"} onClick={this.handleReservationsClick}/> Reservations <Icon id={`reservationsdown-${this.props.restaurant.id}`} inverted color={userRestaurant.reservations ? "black" : "red"} name={userRestaurant.reservations ? "times circle outline" : "times circle"} onClick={this.handleReservationsClick}/>{this.props.restaurant.reservations_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.reservations_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline" onClick={this.handleReservationsClick} /> ReservationsTest <Icon id={`reservationsdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline" onClick={this.handleReservationsClick}/>{this.props.restaurant.reservations_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.reservations_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> ReservationsNoUser <Icon id={`reservationsdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.reservations_downvote}</Card.Description>
            }
        }

        const addDrinkSpecials = () => {
            if (userRestaurant && userRestaurant.drink_specials != null) {
                return <Card.Description >{this.props.restaurant.drink_specials_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color={userRestaurant.drink_specials ? "blue" : "black"} name={userRestaurant.drink_specials ? "check circle" : "check circle outline"} onClick={this.handleDrinkSpecialsClick}/> Drink Specials <Icon id={`drinkspecialsdown-${this.props.restaurant.id}`} inverted color={userRestaurant.drink_specials ? "black" : "red"} name={userRestaurant.drink_specials ? "times circle outline" : "times circle"} onClick={this.handleDrinkSpecialsClick}/>{this.props.restaurant.drink_specials_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.drink_specials_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline" onClick={this.handleDrinkSpecialsClick} /> DrinkSpecialsTest <Icon id={`drinkspecialsdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline" onClick={this.handleDrinkSpecialsClick}/>{this.props.restaurant.drink_specials_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.drink_specials_upvote} <Icon id={`reservationsup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> DrinkSpecialsNoUser <Icon id={`drinkspecialsdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.drink_specials_downvote}</Card.Description>
            }
        }

        return(
            <>{addBottomless()}
            {addDrinkSpecials()}
            {addReservations()}
            </>
        )
}
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser.state,
    userRestaurants: state.stats.state
})

const mapDispatchToProps = (dispatch) => ({
    addBottomlessUpvote: (restaurant) => dispatch({type: "ADD_BOTTOMLESS_UPVOTE", restaurant}),
    subtractBottomlessUpvote: (restaurant) => dispatch({type: "SUBTRACT_BOTTOMLESS_UPVOTE", restaurant}),
    addBottomlessDownvote: (restaurant) => dispatch({type: "ADD_BOTTOMLESS_DOWNVOTE", restaurant}),
    subtractBottomlessDownvote: (restaurant) => dispatch({type: "SUBTRACT_BOTTOMLESS_DOWNVOTE", restaurant}),
    addReservationsUpvote: (restaurant) => dispatch({type: "ADD_RESERVATIONS_UPVOTE", restaurant}),
    subtractReservationsUpvote: (restaurant) => dispatch({type: "SUBTRACT_RESERVATIONS_UPVOTE", restaurant}),
    addReservationsDownvote: (restaurant) => dispatch({type: "ADD_RESERVATIONS_DOWNVOTE", restaurant}),
    subtractReservationsDownvote: (restaurant) => dispatch({type: "SUBTRACT_RESERVATIONS_DOWNVOTE", restaurant}),
    addDrinkSpecialsUpvote: (restaurant) => dispatch({type: "ADD_DRINK_SPECIALS_UPVOTE", restaurant}),
    subtractDrinkSpecialsUpvote: (restaurant) => dispatch({type: "SUBTRACT_DRINK_SPECIALS_UPVOTE", restaurant}),
    addDrinkSpecialsDownvote: (restaurant) => dispatch({type: "ADD_DRINK_SPECIALS_DOWNVOTE", restaurant}),
    subtractDrinkSpecialsDownvote: (restaurant) => dispatch({type: "SUBTRACT_DRINK_SPECIALS_DOWNVOTE", restaurant}),
    updateStats: (attribute, restaurant_id, user_id) => dispatch(updateStats(attribute, restaurant_id, user_id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteField);

