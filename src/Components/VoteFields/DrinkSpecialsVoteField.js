import React from 'react' 
import { Card, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateStats } from '../../Actions/UserActions'

class DrinkSpecialsVoteField extends React.Component {
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
            if (event.target.previousElementSibling.className.includes("green")) {
            this.props.subtractDrinkSpecialsUpvote(this.props.restaurant.id)
        }
        } 
        this.props.updateStats(attribute, this.props.restaurant.id, this.props.currentUser.id)  
    }

    render() {
        const addDrinkSpecials = () => {
            if (this.props.userRestaurant && this.props.userRestaurant.drink_specials != null) {
                return <Card.Description >{this.props.restaurant.drink_specials_upvote} <Icon id={`drinkspecialsup-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.drink_specials ? "green" : "black"} name={this.props.userRestaurant.drink_specials ? "check circle" : "check circle outline"} onClick={this.handleDrinkSpecialsClick}/> Drink Specials <Icon id={`drinkspecialsdown-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.drink_specials ? "black" : "red"} name={this.props.userRestaurant.drink_specials ? "times circle outline" : "times circle"} onClick={this.handleDrinkSpecialsClick}/>{this.props.restaurant.drink_specials_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.drink_specials_upvote} <Icon id={`drinkspecialsup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline" onClick={this.handleDrinkSpecialsClick} /> Drink Specials <Icon id={`drinkspecialsdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline" onClick={this.handleDrinkSpecialsClick}/>{this.props.restaurant.drink_specials_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.drink_specials_upvote} <Icon id={`drinkspecialsup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> Drink Specials <Icon id={`drinkspecialsdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.drink_specials_downvote}</Card.Description>
            }
        }
        return(
            <>
            {addDrinkSpecials()}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    subtractDrinkSpecialsUpvote: (restaurant) => dispatch({type: "SUBTRACT_DRINK_SPECIALS_UPVOTE", restaurant}),
    addDrinkSpecialsDownvote: (restaurant) => dispatch({type: "ADD_DRINK_SPECIALS_DOWNVOTE", restaurant}),
    subtractDrinkSpecialsDownvote: (restaurant) => dispatch({type: "SUBTRACT_DRINK_SPECIALS_DOWNVOTE", restaurant}),
    addDrinkSpecialsUpvote: (restaurant) => dispatch({type: "ADD_DRINK_SPECIALS_UPVOTE", restaurant}),
    updateStats: (attribute, restaurant_id, user_id) => dispatch(updateStats(attribute, restaurant_id, user_id))
})

export default connect(null, mapDispatchToProps)(DrinkSpecialsVoteField)