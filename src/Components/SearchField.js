import React from 'react' 
import { Button, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchRestaurants, fetchingRestaurants} from '../Actions/RestaurantActions'

class SearchField extends React.Component {
    state = {
        query: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
                    <input style={{width:"250px"}} type="text" name="query" value={this.state.query} onChange={this.handleChange} placeholder="Search by city/neighborhood"></input>
                    <Button type="submit" inline>Submit</Button>
                </Form.Field>  
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