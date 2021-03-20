import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, List, Image, Menu, Header} from 'semantic-ui-react'
import NavBar from '../Containers/NavBar'
import CommentForm from './CommentForm'
import UserHeader from './UserHeader'

class RestaurantInfoPage extends React.Component {
    
    render() {
        const restaurant = this.props.restaurants.find(res => res.id === parseInt(this.props.restaurantId.id))

        const restaurantCategories = () => {
            return restaurant.categories.map(cat => {
                return <List.Description>{cat}</List.Description>
            })
        }

        const showComments = () => {
            return restaurant.comments.map(comment => {
                return (
                    <Grid>
                    <Grid.Column>
                        <Menu fluid vertical>
                        <Menu.Item>
                            <List>
                            <List.Item>
                                
                                <List.Content style={{textAlign:"left"}}><List.Icon name='user'></List.Icon>
                                    <List.Header as='a'>{comment.username}</List.Header>
                                <List.Description as='a'>{comment.created_at} </List.Description><br></br>
                                <List.Header style={{textAlign:"center"}}>{comment.text}</List.Header>
                                </List.Content>
                            </List.Item>
                            </List>
                        </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    </Grid>)
                
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
                        <List.Icon name='chrome'></List.Icon>
                        <List.Content as={Link} to={restaurant.url} style={{textAlign:"left"}}>Yelp Page
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
                        <List.Content style={{textAlign:"left"}}>Yelp Rating: {restaurant.rating}<br></br>Price: {restaurant.price}
                        </List.Content>
                    </List.Item>
                    <List.Item >
                        <List.Icon name='food' />
                        <List.Content style={{textAlign:"left"}}>
                            <List.Header>Brunchr Ratings</List.Header>
                            <List.Description>Bottomless: {restaurant.bottomless_upvote > restaurant.bottomless_downvote ? "yes" : "no"}</List.Description>
                            <List.Description>Drink Specials: {restaurant.drink_specials_upvote > restaurant.drink_specials_downvote ? "yes" : "no"}</List.Description>
                            <List.Description>Takes Reservations: {restaurant.reservations_upvote > restaurant.reservations_downvote ? "yes" : "no"}</List.Description>
                            <List.Description>Outdoor Seating: {restaurant.outdoor_seating_upvote > restaurant.outdoor_seating_downvote ? "yes" : "no"}</List.Description>
                            <List.Description>Drag Show: {restaurant.drag_brunch_upvote > restaurant.drag_brunch_downvote ? "yes" : "no"}</List.Description>
                        </List.Content>
                    </List.Item>
                </List>   
            </Grid.Column>  
            <Grid.Column width={7}>
                <List>  
                 <Header as='h3'>Comments</Header>
                    <List.Item>
                        {this.props.currentUser ? <CommentForm userId={this.props.currentUser.id} restaurantId={restaurant.id}></CommentForm> : null}
                    </List.Item>
                    {showComments()}
                </List>    
            </Grid.Column>
          </Grid>
          </>
    )
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    currentUser: state.currentUser.state
})

export default connect(mapStateToProps)(RestaurantInfoPage)