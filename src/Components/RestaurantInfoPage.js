import React from 'react'
import {connect} from 'react-redux'
import {Grid, List, Image} from 'semantic-ui-react'

class RestaurantInfoPage extends React.Component {
    findRestaurant = () => {

    }

    render() {
        const restaurant = this.props.restaurants.find(res => res.id === parseInt(this.props.restaurantId.id))

        return(<div>Hello {restaurant.name}</div>
        //     <Grid style={{justifyContent:"center"}}>
        //     <Grid.Column width={4}>
        //     <Image src={restaurant().image_url ? restaurant().image_url : "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"} fluid style={{maxHeight: "300px"}}/>
        //     </Grid.Column>
        //     <Grid.Column width={9}>
        //         <List>
        //             <List.Item>
        //                 <List.Icon name='location' />
        //                 <List.Content>{this.restaurant()}</List.Content>
        //             </List.Item>
        //         </List>
        //     </Grid.Column>
        //   </Grid>
    )
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    currentUser: state.currentUser.state,
    loading: state.restaurants.loading
})

export default connect(mapStateToProps)(RestaurantInfoPage)