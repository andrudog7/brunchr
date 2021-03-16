import React from 'react' 
import {connect} from 'react-redux'
import {Card} from 'semantic-ui-react'
import SearchField from '../Components/SearchField'
import RestaurantShowCard from '../Components/RestaurantShowCard'
import NavBar from './NavBar'

class RestaurantContainer extends React.Component {

    render() {
        const renderRestaurantFront = () => {
            return this.props.restaurants.map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))}
        
                if (this.props.loading === true) {
            return (
                    <div>Loading Restaurants...
                    </div>
            )
        } else {
        return(
            <div>
                <NavBar></NavBar>
                <SearchField></SearchField>
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