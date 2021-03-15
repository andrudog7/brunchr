import React from 'react' 
import NavBar from './NavBar'
import RestaurantContainer from './RestaurantContainer'
import SearchField from '../Components/SearchField'

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <NavBar></NavBar>
                <SearchField></SearchField>
                <RestaurantContainer></RestaurantContainer>
            </div>
        )
    }
}