import React from 'react' 
import { Button, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchRestaurants, fetchingRestaurants} from '../Actions/RestaurantActions'

class SearchField extends React.Component {
    state = {
        query: "",
        bottomless: false,
        drinkSpecials: false,
        reservations: false,
        outdoorSeating: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheckbox = (event) => {
        if (event.target.textContent === "Bottomless") {
        this.setState((prevState) => ({
            bottomless: !prevState.bottomless
        }))
    } else if (event.target.textContent === "Drink Specials") {
        this.setState((prevState) => ({
            drinkSpecials: !prevState.drinkSpecials
        })) 
    } else if (event.target.textContent === "Takes Reservations") {
        this.setState((prevState) => ({
            reservations: !prevState.reservations
    })) } else if (event.target.textContent === "Outdoor Seating") {
        this.setState((prevState) => ({
            outdoorSeating: !prevState.outdoorSeating
        }))
    }
}
    handleSearchSubmit = (event) => {
        event.preventDefault()
        this.props.fetchingRestaurants()
        this.props.fetchRestaurants(this.state.query)
    }
    
    render() {
        return (
            <div>
                <Form style={{textAlign:"center"}} onSubmit={this.handleSearchSubmit}>
                <Form.Field inline>
                    <label style={{width:"30px"}}>City:</label>
                    <input style={{width:"250px"}} type="text" name="query" value={this.state.query} onChange={this.handleChange}></input>
                </Form.Field>  
                <Form.Group inline style={{justifyContent:"center"}}>
                    <Form.Checkbox label="Bottomless" name="bottomless" value={this.state.bottomless} onChange={this.handleCheckbox}></Form.Checkbox>
                    <Form.Checkbox label="Drink Specials" name="drink_specials"value={this.state.drinkSpecials} onChange={this.handleCheckbox}></Form.Checkbox>
                    <Form.Checkbox label="Takes Reservations" name="reservations"value={this.state.reservations} onChange={this.handleCheckbox}></Form.Checkbox>
                    <Form.Checkbox label="Outdoor Seating" name="outdoor_seating"value={this.state.outdoorSeating} onChange={this.handleCheckbox}></Form.Checkbox>
                    <Button type='submit'>Submit</Button>
                </Form.Group> 
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingRestaurants: () => dispatch(fetchingRestaurants()),
        fetchRestaurants: (location) => dispatch(fetchRestaurants(location))
    }   
}

export default connect(null, mapDispatchToProps)(SearchField);