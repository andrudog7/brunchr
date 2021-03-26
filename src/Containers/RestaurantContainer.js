import React from 'react' 
import {connect} from 'react-redux'
import {Card} from 'semantic-ui-react'
import SearchField from '../Components/SearchField'
import Filter from '../Components/Filter'
import RestaurantShowCard from '../Components/Restaurant/RestaurantShowCard'
import NavBar from './NavBar'
import UserHeader from '../Components/UserHeader'
import AboutBrunchr from '../Components/AboutBrunchr'

class RestaurantContainer extends React.Component {

    state = {
        query: ""
    }

    handleCheckBox = (event) => {
        if (this.state.query === "") {
        this.setState({
            query: event.target.id
        })
        } else {
            this.setState({
                query: ""
            })
        }
    }

    render() {
        const renderRestaurantFront = () => {
            let currentRestaurants = this.props.restaurants.filter(res => res.search === "true")
            if (this.state.query !== "") {
            return currentRestaurants.filter(res => res[`${this.state.query}_upvote`] > res[`${this.state.query}_downvote`]).map(res => (
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
                    {this.props.restaurants.length === 0 ? <AboutBrunchr></AboutBrunchr> : null   }
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