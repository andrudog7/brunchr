import React from 'react' 
import {connect} from 'react-redux'
import NavBar from './NavBar'
import RestaurantShowCard from '../Components/RestaurantShowCard'
import {Card} from 'semantic-ui-react'
import UserHeader from '../Components/UserHeader'


class ProfileContainer extends React.Component {
    
    render() {
        const renderProfileCards= () => {
            return this.props.restaurants.filter(res => res.favorite).map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))}
        
        return(
            <div>
                {UserHeader(this.props.currentUser)}
                <br></br>
                <NavBar></NavBar>
                <br></br>
                <Card.Group doubling itemsPerRow={4} stackable>
                    {renderProfileCards()}
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    currentUser: state.currentUser.state,
    currentStats: state.stats
})

const mapDispatchToProps = (dispatch) => ({
    updateNavbar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);