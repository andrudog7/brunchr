import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {Card, Button, Icon} from 'semantic-ui-react'
import { addRestaurantToProfile, removeFromProfile } from '../Actions/UserActions'
import VoteField from './VoteField'


class RestaurantCardBack extends React.Component {
    state = {
        redirect: false
    }
    addToProfile = (event) => {
        event.preventDefault()
        this.props.addRestaurantToProfile(this.props.restaurant, this.props.currentUser, this.redirectToProfile)
    }

    removeFromProfile = (event) => {
        event.preventDefault()
        this.props.removeFromProfile(this.props.currentUser.users_restaurants.find(res => res.restaurant_id === this.props.restaurant.id), this.props.flipCard)
    }

    redirectToProfile = () => {
        this.props.updateNavbar("profile")
            this.setState({
                redirect: true
            })
    }

    handleDoneSubmit = (event) => {
        event.preventDefault()
        if (document.getElementById(`bottomlessup-${this.props.restaurant.id}`).className.includes("blue")) {
            console.log("bottomless-yes")
        } else if (document.getElementById(`bottomlessdown-${this.props.restaurant.id}`).className.includes("red")) {
            console.log("bottomless-no")
        }
        this.props.flipCard()
    }

    render() {
        const profileButton = () => {
            if (this.props.currentUser && window.location.pathname === "/profile" && this.props.currentUser.my_restaurants.find(res => res.id === this.props.restaurant.id)) {
                return <Button size="small" onClick={this.removeFromProfile}>Remove</Button> 
            } else if (this.props.currentUser && this.props.currentUser.my_restaurants.find(res => res.id === this.props.restaurant.id)) {
                return null
            } else if (this.props.currentUser) {
                 return <Button size="small" onClick={this.addToProfile}>Favorite</Button>   
                }
        }
        if (this.state.redirect) {
            return <Redirect to="/profile"></Redirect>
        } else {
    return(
        <Card key={this.props.restaurant.id}>
            <Card.Content>
                <>
                <Card.Header>{this.props.restaurant.name}</Card.Header>
                <Card.Meta>Yelp Rating: {this.props.restaurant.rating}</Card.Meta>
                <Card.Meta>Price: {this.props.restaurant.price}</Card.Meta>
                <Card.Description>{this.props.restaurant.address1}</Card.Description>
                <Card.Description>{this.props.restaurant.city}, {this.props.restaurant.state} {this.props.restaurant.zip_code}</Card.Description>
                <br></br>
                <VoteField userRestaurant={this.props.currentUser ? this.props.currentUser.users_restaurants.find(res => res.restaurant_id === this.props.restaurant.id) : null} restaurant={this.props.restaurant}></VoteField>
                <br></br>
                {profileButton()}<Button size="small">Info</Button><Button size="small" onClick={this.handleDoneSubmit}>Done</Button>
                </>
            </Card.Content>
        </Card>
    )
    }
}}

const mapDispatchToProps = (dispatch) => ({
    addToProfile: (restaurant) => dispatch({type: "ADD_TO_PROFILE", restaurant}),
    addRestaurantToProfile: (restaurant, user, redirect) => dispatch(addRestaurantToProfile(restaurant, user, redirect)),
    updateNavbar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload}),
    removeFromProfile: (user_restaurant, flip) => dispatch(removeFromProfile(user_restaurant, flip))  
})

export default connect(null, mapDispatchToProps)(RestaurantCardBack)