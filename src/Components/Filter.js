import React from 'react' 
import { Form } from 'semantic-ui-react'

export default class Filter extends React.Component {
    
    render() {
        return (
            <div>
                <Form style={{textAlign:"center"}}>
                <Form.Group inline style={{justifyContent:"center"}}>
                    <Form.Field style={{fontWeight:"bold"}}>Select One: </Form.Field>
                    <Form.Checkbox label="Bottomless" id="bottomless" onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Drink Specials" id="drink_specials" onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Takes Reservations" id="reservations" onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Outdoor Seating" id="outdoor_seating" onChange={this.props.handleCheckBox}></Form.Checkbox>
                    <Form.Checkbox label="Drag Brunch" id="drag" onChange={this.props.handleCheckBox}></Form.Checkbox>
                </Form.Group>
                </Form>
            </div>
        )
    }
}