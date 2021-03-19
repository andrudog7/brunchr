import React from 'react' 
import {connect} from 'react-redux'
import {Card, Header, Image} from 'semantic-ui-react'
import SearchField from '../Components/SearchField'
import Filter from '../Components/Filter'
import RestaurantShowCard from '../Components/RestaurantShowCard'
import NavBar from './NavBar'

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
        }
    }

    render() {
        const renderRestaurantFront = () => {
            if (this.state.bottomless) {
                return this.props.restaurants.filter(res => res.bottomless_upvote > res.bottomless_downvote).map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))} else if (this.state.drinkSpecials) {
                    return this.props.restaurants.filter(res => res.drink_specials_upvote > res.drink_specials_downvote).map(res => (
                        <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                    ))} else if (this.state.reservations) {
                        return this.props.restaurants.filter(res => res.reservations_upvote > res.reservations_downvote).map(res => (
                            <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                        ))} else if (this.state.outdoorSeating) {
                            return this.props.restaurants.filter(res => res.outdoor_seating_upvote > res.outdoor_seating_downvote).map(res => (
                                <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                            ))} else if (this.state.dragBrunch) {
                                return this.props.restaurants.filter(res => res.drag_upvote > res.drag_downvote).map(res => (
                                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                                ))} else {
            return this.props.restaurants.map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))}}

        const userHeader = () => {
            if (this.props.currentUser) {
                return (
                    <Header style={{textAlign:"left"}}>
                    <Image circular src={this.props.currentUser.my_image} size='huge'/>
                    {this.props.currentUser.username}
                </Header>
                )
            }
        }

        const showFilter = () => {
            if (this.props.restaurants[0]) {
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
                {userHeader()}
                <br></br>
                <NavBar></NavBar>
                <SearchField ></SearchField>
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