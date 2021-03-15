import React from 'react' 
import {fetchRestaurants} from '../Actions/RestaurantActions'
import {connect} from 'react-redux'

class RestaurantContainer extends React.Component {
    render() {
        return(
            <div>
                {fetchRestaurants()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.state
})

export default connect(mapStateToProps)(RestaurantContainer);