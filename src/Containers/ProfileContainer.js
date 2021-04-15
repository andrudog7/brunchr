import React from 'react' 
import {connect} from 'react-redux'
import NavBar from './NavBar'
import RestaurantShowCard from '../Components/Restaurant/RestaurantShowCard'
import {Card, Form} from 'semantic-ui-react'
import UserHeader from '../Components/UserHeader'
import Filter from '../Components/Filter'

class ProfileContainer extends React.Component {

    state = {
        query: [],
        text: "",
        filter: ""
    }

    handleChange = (event) => {
        this.setState({query: this.props.restaurants.filter(res => res.favorite === "true").filter(res => res.city.includes(event.target.value)),
            text: event.target.value})
    }

    handleCheckBox = (event) => {
        if (this.state.filter === "") {
        this.setState({
            filter: event.target.id
        })
        } else {
            this.setState({
                filter: ""
            })
        }
    }
    
    render() {
        const checkState = () => {
            if (this.state.filter !== "") {
                return this.state.query.filter(res => res[`${this.state.filter}_upvote`] > res[`${this.state.filter}_downvote`]).map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))} else {
            return this.state.query.map(res => (
                <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
            ))}
        }

        const renderProfileCards= () => {
            if (!!this.props.restaurants.filter(res => res.favorite === true)) {
                if (this.state.filter !== "") {
                    return this.props.restaurants.filter(res => res[`${this.state.filter}_upvote`] > res[`${this.state.filter}_downvote`]).map(res => (
                        <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))} else {
                        return this.props.restaurants.filter(res => res.favorite === "true").map(res => (
                    <RestaurantShowCard restaurant={res} currentUser={this.props.currentUser}></RestaurantShowCard>
                ))}}}
        
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
                <Filter handleCheckBox={this.handleCheckBox}></Filter><br></br>
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