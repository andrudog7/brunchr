import React from 'react' 
import RestaurantCardFront from './RestaurantCardFront'
import RestaurantCardBack from './RestaurantCardBack'


export default class RestaurantShowCard extends React.Component {
    state = {
        front: true
    }

    flipCard = () => {
        this.setState((prevState) => {
            return {front: !prevState.front}
        })
    }

    
    
    render() {
            return this.state.front ? 
            <RestaurantCardFront flipCard={this.flipCard} restaurant={this.props.restaurant}/> : 
            <RestaurantCardBack flipCard={this.flipCard} restaurant={this.props.restaurant} currentUser={this.props.currentUser}/>
        }
}