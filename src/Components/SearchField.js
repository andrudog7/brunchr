import React from 'react' 
import { Form } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchRestaurants, fetchingRestaurants} from '../Actions/RestaurantActions'
import SubmitButton from './SubmitButton'

class SearchField extends React.Component {
    state = {
        query: ""
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
            <div id="form">
                <Form style={{textAlign:"center"}} onSubmit={this.handleSearchSubmit}>
                <Form.Field inline>
                    <input style={{width:"250px"}} type="text" name="query" value={this.state.query} onChange={this.handleChange} placeholder="Search by city/neighborhood"></input>
                    {SubmitButton()}
                    <></>
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