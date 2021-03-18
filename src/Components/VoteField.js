import React from 'react'
import {Card, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { updateStats } from '../Actions/UserActions'


class VoteField extends React.Component {

    state = {
        bottomlessUpvoteName: "check circle outline",
        bottomlessUpvoteColor: "black",
        bottomlessDownvoteName: "times circle outline",
        bottomlessDownvoteColor: "black",
    }

    // componentWillMount() {
    //     if (this.props.userRestaurant) {
    //         this.userBottomless()
    //     }
    // }

    // userBottomless = () => {
    //         if (this.props.userRestaurant && this.props.userRestaurant.bottomless === true) {
    //             this.setState({
    //                 bottomlessUpvoteName: "check circle",
    //                 bottomlessUpvoteColor: "blue"
    //             })
    //         } else if (this.props.userRestaurant && this.props.userRestaurant.bottomless === false) {
    //             this.setState({
    //                 bottomlessDownvoteName: "times circle",
    //                 bottomlessDownvoteColor: "red"
    //             })
    //         }
    //     }
        
    handleIconClick = (event) => {
        let bottomless = ""
        if (event.target.className.includes("check") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Bottomless")) {
            // if (this.state.bottomlessDownvoteColor === "red") {
            //     
            // }
            // this.setState({
            //     bottomlessUpvoteName: "check circle",
            //     bottomlessUpvoteColor: "blue",
            //     bottomlessDownvoteName: "times circle outline",
            //     bottomlessDownvoteColor: "black"
            // })
            bottomless = "true"
            this.props.addBottomlessUpvote(this.props.restaurant.id)
            
        } else if (event.target.className.includes("times") && event.target.className.includes("outline") && event.nativeEvent.path[1].innerText.includes("Bottomless")) {
            // if (this.state.bottomlessUpvoteColor === "blue") {
            //     this.props.subtractBottomlessUpvote(this.props.restaurant.id)
            // }
            // this.setState({
            //     bottomlessUpvoteName: "check circle outline",
            //     bottomlessUpvoteColor: "black",
            //     bottomlessDownvoteName: "times circle",
            //     bottomlessDownvoteColor: "red"
            // })
            // this.props.addBottomlessDownvote(this.props.restaurant.id)
            bottomless = "false"
        } 
        this.props.updateStats(bottomless, this.props.restaurant.id, this.props.currentUser.id)
        
    }
    render() {
        let userRestaurant = this.props.userRestaurants.find(rel => rel.restaurant_id === this.props.restaurant.id)
        const checkUserInput = () => {
            if (userRestaurant) {
                return <Card.Description >{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color={userRestaurant.bottomless ? "blue" : "black"} name={userRestaurant.bottomless ? "check circle" : "check circle outline"} onClick={this.handleIconClick}/> Bottomless <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color={userRestaurant.bottomless ? "black" : "red"} name={userRestaurant.bottomless ? "times circle outline" : "times circle"} onClick={this.handleIconClick}/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            } else if (this.props.currentUser) {
                return <Card.Description>{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color={this.state.bottomlessUpvoteColor} name={this.state.bottomlessUpvoteName} onClick={this.handleIconClick} /> BottomlessTest <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color={this.state.bottomlessDownvoteColor} name={this.state.bottomlessDownvoteName} onClick={this.handleIconClick}/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            } else {
                return <Card.Description >{this.props.restaurant.bottomless_upvote} <Icon id={`bottomlessup-${this.props.restaurant.id}`} inverted color="black" name="check circle outline"/> BottomlessNoUser <Icon id={`bottomlessdown-${this.props.restaurant.id}`} inverted color="black" name="times circle outline"/>{this.props.restaurant.bottomless_downvote}</Card.Description>
            }
        }

        return(
            <>{checkUserInput()}</>
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
    updateStats: (bottomless, restaurant_id, user_id) => dispatch(updateStats(bottomless, restaurant_id, user_id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteField);

