import React from 'react' 
import {connect} from 'react-redux'
import {Card, Header, Image} from 'semantic-ui-react'
import SearchField from '../Components/SearchField'
import RestaurantShowCard from '../Components/RestaurantShowCard'
import NavBar from './NavBar'

class RestaurantContainer extends React.Component {

    render() {
        const renderRestaurantFront = () => {
            return this.props.restaurants.map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))}

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