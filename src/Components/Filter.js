import React from 'react' 
import { Form } from 'semantic-ui-react'

export default class Filter extends React.Component {
    state = {
        bottomless: false,
        drinkSpecials: false,
        reservations: false,
        outdoorSeating: false,
        drag_brunch: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <Form style={{textAlign:"center"}}>
                <Form.Group inline style={{justifyContent:"center"}}>
                    <Form.Checkbox label="Bottomless" name="bottomless" value={this.state.bottomless} onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Drink Specials" name="drink_specials"value={this.state.drinkSpecials} onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Takes Reservations" name="reservations"value={this.state.reservations} onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Outdoor Seating" name="outdoor_seating"value={this.state.outdoorSeating} onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Drag Brunch" name="drag_brunch"value={this.state.outdoorSeating} onChange={this.props.handleCheckBox}></Form.Checkbox>
                </Form.Group> 
                </Form>
            </div>
        )
    }
}