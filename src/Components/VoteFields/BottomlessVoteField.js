import React from 'react' 
import { Card, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updateStats } from '../../Actions/UserActions'

class BottomlessVoteField extends React.Component {
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
            if (event.target.previousElementSibling.className.includes("green")) {
            this.props.subtractBottomlessUpvote(this.props.restaurant.id)
        }
        } 
        this.props.updateStats(attribute, this.props.restaurant.id, this.props.currentUser.id)  
    }

    render() {
        const addBottomless = () => {
            if (this.props.userRestaurant && this.props.userRestaurant.bottomless != null) {
                return <Card.Description >{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.bottomless ? "green" : "black"} name={this.props.userRestaurant.bottomless ? "check circle" : "check circle outline"} onClick={this.handleBottomlessClick}/> Bottomless <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color={this.props.userRestaurant.bottomless ? "black" : "red"} name={this.props.userRestaurant.bottomless ? "times circle outline" : "times circle"} onClick={this.handleBottomlessClick}/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline" onClick={this.handleBottomlessClick} /> Bottomless <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline" onClick={this.handleBottomlessClick}/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> Bottomless <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            }
        }
        return(
            <>
            {addBottomless()}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addBottomlessUpvote: (restaurant) => dispatch({type: "ADD_BOTTOMLESS_UPVOTE", restaurant}),
    subtractBottomlessUpvote: (restaurant) => dispatch({type: "SUBTRACT_BOTTOMLESS_UPVOTE", restaurant}),
    addBottomlessDownvote: (restaurant) => dispatch({type: "ADD_BOTTOMLESS_DOWNVOTE", restaurant}),
    subtractBottomlessDownvote: (restaurant) => dispatch({type: "SUBTRACT_BOTTOMLESS_DOWNVOTE", restaurant}),
    updateStats: (attribute, restaurant_id, user_id) => dispatch(updateStats(attribute, restaurant_id, user_id))
})

export default connect(null, mapDispatchToProps)(BottomlessVoteField)