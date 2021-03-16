import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import VoteField from './VoteField'

export default class RestaurantCardBack extends React.Component {
    render() {
    return(
        <Card key={this.props.restaurant.id}>
            <Card.Content>
                <>
                <Card.Header>{this.props.restaurant.name}</Card.Header>
                <Card.Meta>Yelp Rating: {this.props.restaurant.rating}</Card.Meta>
                <Card.Meta>Price: {this.props.restaurant.price}</Card.Meta>
                <Card.Description>{this.props.restaurant.address1}</Card.Description>
                <Card.Description>{this.props.restaurant.city}, {this.props.restaurant.state} {this.props.restaurant.zip_code}</Card.Description>
                <br></br>
                <VoteField userRestaurant={this.props.restaurant.users_restaurants.find(res => res.user_id === this.props.currentUser.id)} restaurant={this.props.restaurant}></VoteField>
                </>
            </Card.Content>
        </Card>
    )
    }
}