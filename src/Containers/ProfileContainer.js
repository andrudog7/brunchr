import React from 'react' 
import {connect} from 'react-redux'
import NavBar from './NavBar'
import RestaurantShowCard from '../Components/Restaurant/RestaurantShowCard'
import {Card, Form} from 'semantic-ui-react'
import UserHeader from '../Components/UserHeader'

class ProfileContainer extends React.Component {

    state = {
        query: [],
        text: ""
    }

    handleChange = (event) => {
        this.setState({query: this.props.restaurants.filter(res => res.favorite === "true").filter(res => res.city.includes(event.target.value)),
            text: event.target.value})
    }
    
    render() {
        const checkState = () => {
            return this.state.query.map(res => (
                <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))}

        const renderProfileCards= () => {
            if (!!this.props.restaurants.filter(res => res.favorite === true)) {
                        return this.props.restaurants.filter(res => res.favorite === "true").map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))}}
        
        return(
            <div>
                {UserHeader(this.props.currentUser)}
                <br></br>
                <NavBar></NavBar>
                <br></br>
                <Form style={{textAlign:"center"}}>
                <Form.Field inline>
                    <input style={{width:"250px"}} type="text" name="text" value={this.state.text} onChange={this.handleChange} placeholder="Filter by City"></input>
                </Form.Field>  
                </Form><br></br>
                <Card.Group doubling itemsPerRow={4} stackable>
                    {this.state.text === "" ? renderProfileCards() : checkState()}
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