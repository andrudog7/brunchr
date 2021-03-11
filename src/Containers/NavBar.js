import React from 'react' 
import {Dropdown, Menu} from 'semantic-ui-react'

export default class NavBar extends React.Component {
    state={
        activeItem: "home"
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        return (
            <Menu secondary vertical>
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='home'
                    active={this.state.activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='login'
                    active={this.state.activeItem === 'login'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='signup'
                    content="Sign-Up"
                    active={this.state.activeItem === 'signup'}
                    onClick={this.handleItemClick}
                />
                <Dropdown item text='Display Options'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Text Size</Dropdown.Header>
                        <Dropdown.Item>Small</Dropdown.Item>
                        <Dropdown.Item>Medium</Dropdown.Item>
                        <Dropdown.Item>Large</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
            </Menu>
        )
    }
}