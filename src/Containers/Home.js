import React from 'react' 
import NavBar from './NavBar'
import RestaurantContainer from './RestaurantContainer'
import SearchField from '../Components/SearchField'

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <RestaurantContainer></RestaurantContainer>
            </div>
        )
    }
}