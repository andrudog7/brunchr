import React from 'react'
import {connect} from 'react-redux'
import {Grid, List, Image, Icon} from 'semantic-ui-react'
import NavBar from '../Containers/NavBar'
import UserHeader from './UserHeader'
import {fetchComments} from '../Actions/CommentActions'
import CommentContainer from './CommentContainer'

class RestaurantInfoPage extends React.Component {
    componentDidMount() {
        this.props.fetchComments(this.props.restaurantId.id)
    }
    
    render() {
        const restaurant = this.props.restaurants.find(res => res.id === parseInt(this.props.restaurantId.id))

        const restaurantCategories = () => {
            return restaurant.categories.map(cat => {
                return <List.Description>{cat}</List.Description>
            })
        }

        return(
            <>
            {UserHeader(this.props.currentUser)}
            <br></br>
            <NavBar></NavBar>
            <br></br>
            <Grid style={{justifyContent:"center"}}>
            <Grid.Column width={7}>
                <Image src={restaurant.image_url ? restaurant.image_url : "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"} fluid style={{maxHeight: "300px"}}/>
            </Grid.Column>
            <Grid.Column width={7}>
                <List >
                    <List.Item>
                        <List.Content style={{textAlign:"left"}}>
                            <List.Header style={{fontSize:"large"}}>{restaurant.name}</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item >
                        <List.Icon name='marker' />
                        <List.Content style={{textAlign:"left"}}>
                            <List.Description>{restaurant.address1}</List.Description>
                            <List.Description>{restaurant.city}, {restaurant.state} {restaurant.zip_code}</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone'></List.Icon>
                        <List.Content style={{textAlign:"left"}}>{restaurant.phone}
                        </List.Content>
                    </List.Item>
                    <List.Item >
                        <List.Icon name='tag' />
                        <List.Content style={{textAlign:"left"}}>
                            {restaurantCategories()}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='yelp' />
                        <List.Content style={{textAlign:"left"}}>Yelp Rating: {restaurant.rating}<br></br>Price: {restaurant.price}<br></br>
                        <List.Content as='a' href={restaurant.url} src={restaurant.url} style={{textAlign:"left"}}>Yelp Page
                        </List.Content>
                        </List.Content>
                    </List.Item>
                    <List.Item >
                        <List.Icon name='food' />
                        <List.Content style={{textAlign:"left"}}>
                            <List.Header>Brunchr Highlights</List.Header>
                            <List.Description>{restaurant.bottomless_upvote > restaurant.bottomless_downvote ? <div>Bottomless: <Icon name="check circle" color="green"></Icon> {restaurant.bottomless_upvote} votes</div> : <div>Bottomless: <Icon name="times circle" color="red"></Icon>{restaurant.bottomless_downvote} votes</div>}</List.Description>
                            <List.Description>{restaurant.drink_specials_upvote > restaurant.drink_specials_downvote ? <div>Drink Specials: <Icon name="check circle" color="green"></Icon>{restaurant.drink_specials_upvote} votes</div> : <div>Drink Specials: <Icon name="times circle" color="red"></Icon>{restaurant.drink_specials_downvote} votes</div>}</List.Description>
                            <List.Description>{restaurant.reservations_upvote > restaurant.reservations_downvote ? <div>Takes Reservations: <Icon name="check circle" color="green"></Icon>{restaurant.reservations_upvote} votes</div> : <div>Takes Reservations: <Icon name="times circle" color="red"></Icon>{restaurant.reservations_downvote} votes</div>}</List.Description>
                            <List.Description>{restaurant.outdoor_seating_upvote > restaurant.outdoor_seating_downvote ? <div>Outdoor Seating: <Icon name="check circle" color="green"></Icon>{restaurant.outdoor_seating_upvote} votes</div> : <div>Outdoor Seating: <Icon name="times circle" color="red"></Icon>{restaurant.outdoor_seating_downvote} votes</div>}</List.Description>
                            <List.Description>{restaurant.drag_upvote > restaurant.drag_downvote ? <div>Drag Brunch: <Icon name="check circle" color="green"></Icon>{restaurant.drag_upvote} votes</div> : <div>Drag Brunch: <Icon name="times circle" color="red"></Icon>{restaurant.drag_downvote} votes</div>}</List.Description>
                        </List.Content>
                    </List.Item>
                </List>   
            </Grid.Column>  
            <Grid.Column width={7}>
                <CommentContainer comments={this.props.comments} currentUser={this.props.currentUser} restaurant={restaurant}></CommentContainer>
            </Grid.Column>
          </Grid>
          </>
    )
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    currentUser: state.currentUser.state,
    comments: state.comments.state
})

const mapDispatchToProps = (dispatch) => ({
    fetchComments: (restaurant_id) => dispatch(fetchComments(restaurant_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfoPage)