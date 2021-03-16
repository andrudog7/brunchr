import React from 'react'
import {Card, Image} from 'semantic-ui-react'

export default class RestaurantCardFront extends React.Component {
    render() {
        return(
        <Card key={this.props.restaurant.id} onClick={this.props.flipCard}>
            <Image src={this.props.restaurant.image_url ? this.props.restaurant.image_url : "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"} fluid style={{maxHeight: "300px"}}/>
            <Card.Content>
                <>
                <Card.Header>{this.props.restaurant.name}</Card.Header>
                <Card.Meta>Yelp Rating: {this.props.restaurant.rating}</Card.Meta>
                <Card.Description>Price: {this.props.restaurant.price}</Card.Description>
                </>
            </Card.Content>
        </Card>
    )
    }
}