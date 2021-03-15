import React from 'react' 
import NavBar from './NavBar'
import RestaurantContainer from './RestaurantContainer'

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <NavBar></NavBar>
                <RestaurantContainer></RestaurantContainer>
            </div>
        )
    }
}