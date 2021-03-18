import React from 'react' 
import {Header, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import NavBar from './NavBar'
import RestaurantShowCard from '../Components/RestaurantShowCard'
import {Card} from 'semantic-ui-react'


class ProfileContainer extends React.Component {
    
    render() {
        const renderProfileCards= () => {
            return this.props.currentUser.my_restaurants.map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))}
        
        return(
            <div>
                <Header style={{textAlign:"left"}}>
                    <Image circular src={this.props.currentUser.my_image} size='huge'/>
                    {this.props.currentUser.username}
                </Header>
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
    currentUser: state.currentUser.state,
    currentStats: state.stats
})

const mapDispatchToProps = (dispatch) => ({
    updateNavbar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);