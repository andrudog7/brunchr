import React from 'react' 
import {connect} from 'react-redux'
import {Card} from 'semantic-ui-react'
import SearchField from '../Components/SearchField'
import Filter from '../Components/Filter'
import RestaurantShowCard from '../Components/RestaurantShowCard'
import NavBar from './NavBar'
import UserHeader from '../Components/UserHeader'

class RestaurantContainer extends React.Component {

    state = {
        bottomless: false,
        drinkSpecials: false,
        reservations: false,
        outdoorSeating: false,
        dragBrunch: false
    }

    handleCheckBox = (event) => {
        if (event.target.textContent === "Bottomless") {
            this.setState((prevState) => ({
                bottomless: !prevState.bottomless
            }))
        } else if (event.target.textContent === "Drink Specials") {
            this.setState((prevState) => ({
                drinkSpecials: !prevState.drinkSpecials
            })) 
        } else if (event.target.textContent === "Takes Reservations") {
            this.setState((prevState) => ({
                reservations: !prevState.reservations
        })) } else if (event.target.textContent === "Outdoor Seating") {
            this.setState((prevState) => ({
                outdoorSeating: !prevState.outdoorSeating
            }))
        } else if (event.target.textContent === "Drag Brunch") {
            this.setState((prevState) => ({
                dragBrunch: !prevState.dragBrunch
            }))
        }
    }

    render() {
        const renderRestaurantFront = () => {
            
            let currentRestaurants = this.props.restaurants.filter(res => res.search === "true")
                if (this.state.bottomless) {
                return currentRestaurants.filter(res => res.bottomless_upvote > res.bottomless_downvote).map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))} else if (this.state.drinkSpecials) {
                return currentRestaurants.filter(res => res.drink_specials_upvote > res.drink_specials_downvote).map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))} else if (this.state.reservations) {
                return currentRestaurants.filter(res => res.reservations_upvote > res.reservations_downvote).map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))} else if (this.state.outdoorSeating) {
                return currentRestaurants.filter(res => res.outdoor_seating_upvote > res.outdoor_seating_downvote).map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))} else if (this.state.dragBrunch) {
                return currentRestaurants.filter(res => res.drag_upvote > res.drag_downvote).map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))} else {
                return currentRestaurants.map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))}}

        const showFilter = () => {
            if (this.props.restaurants.filter(res => res.search === "true")[0]) {
                return (
                    <Filter handleCheckBox={this.handleCheckBox}></Filter> 
                )
            }
        }
        
        if (this.props.loading === true) {
            return (
                <div>Loading Restaurants...
                </div>
            )
        } else {
        return(
            <div>
                {UserHeader(this.props.currentUser)}
                <br></br>
                <NavBar></NavBar>
                <SearchField></SearchField>
                <br></br>
                {showFilter()}
                <br></br>
                <div>
                <Card.Group doubling itemsPerRow={4} stackable>
                    {renderRestaurantFront()}
                </Card.Group>
                </div>
            </div>
        )
        }
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    currentUser: state.currentUser.state,
    loading: state.restaurants.loading
})

export default connect(mapStateToProps)(RestaurantContainer);