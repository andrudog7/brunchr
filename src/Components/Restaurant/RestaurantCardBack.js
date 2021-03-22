import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {Card, Button} from 'semantic-ui-react'
import { addRestaurantToProfile, removeFromProfile, updateStats } from '../../Actions/UserActions'
import VoteFieldContainer from '../../Containers/VoteFieldContainer'


class RestaurantCardBack extends React.Component {
    state = {
        redirect: false
    }
    addToProfile = (event) => {
        event.preventDefault()
        this.props.addRestaurantToProfile(this.props.restaurant, this.props.currentUser)
    }

    removeFromProfile = (event) => {
        event.preventDefault()
        this.props.flipCard()
        this.props.removeFromProfile(this.props.stats.find(rel => rel.restaurant_id === this.props.restaurant.id), this.props.restaurant)
    }

    handleDoneSubmit = (event) => {
        event.preventDefault()
        this.props.flipCard()
    }

    render() {
        let link=`/restaurants/${this.props.restaurant.id}`
        const profileButton = () => {
            if (this.props.currentUser && window.location.pathname === "/profile" && this.props.restaurant.favorite === "true") {
                return <Button size="small" onClick={this.removeFromProfile}>Remove</Button> 
            } else if (this.props.currentUser && this.props.restaurant.favorite === "true") {
                return <Button primary disabled size="small">Favorited</Button> 
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
                <Card.Header>Brunchr Highlights</Card.Header>
                <VoteFieldContainer restaurant={this.props.restaurant}></VoteFieldContainer>
                <br></br>
                {profileButton()}<NavLink to={link}><Button size="small">Info</Button></NavLink><Button size="small" onClick={this.handleDoneSubmit}>Done</Button>
                </>
            </Card.Content>
        </Card>
    )
    }
}}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    stats: state.stats.state
})

const mapDispatchToProps = (dispatch) => ({
    addToProfile: (restaurant) => dispatch({type: "ADD_TO_PROFILE", restaurant}),
    addRestaurantToProfile: (restaurant, user) => dispatch(addRestaurantToProfile(restaurant, user)),
    updateNavbar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload}),
    removeFromProfile: (user_restaurant, flip) => dispatch(removeFromProfile(user_restaurant, flip)),
    updateStats: (bottomless, restaurant_id, user_id) => dispatch(updateStats(bottomless, restaurant_id, user_id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCardBack)