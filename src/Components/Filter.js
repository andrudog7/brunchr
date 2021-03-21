import React from 'react' 
import { Form } from 'semantic-ui-react'

export default class Filter extends React.Component {
    // state = {
    //     bottomless: false,
    //     drinkSpecials: false,
    //     reservations: false,
    //     outdoorSeating: false,
    //     dragBrunch: false
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }
    
    render() {
        return (
            <div>
                <Form style={{textAlign:"center"}}>
                <Form.Group inline style={{justifyContent:"center"}}>
                    <Form.Field style={{fontWeight:"bold"}}>Select One: </Form.Field>
                    <Form.Checkbox label="Bottomless" name="bottomless" onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Drink Specials" name="drink_specials" onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Takes Reservations" name="reservations" onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Outdoor Seating" name="outdoor_seating" onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Drag Brunch" name="drag_brunch" onChange={this.props.handleCheckBox}></Form.Checkbox>
                </Form.Group>
                </Form>
            </div>
        )
    }
}