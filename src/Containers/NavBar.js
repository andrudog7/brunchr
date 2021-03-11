import React from 'react' 
import {Dropdown, Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {
    state={
        activeItem: "home"
    }

    handleItemClick = (e, { name }) => {
        
        this.setState({ activeItem: name })

    }

    render () {
        return (
            <Menu secondary vertical>
                <NavLink to="/">
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='home'
                    active={this.state.activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                </NavLink>
                <NavLink to="/login">
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='login'
                    active={this.state.activeItem === 'login'}
                    onClick={this.handleItemClick}
                />
                </NavLink>
                <NavLink to="/signup">
                <Menu.Item
                    
                    style={{textAlign:"left"}}
                    name='signup'
                    content="Sign-Up"
                    active={this.state.activeItem === 'signup'}
                    onClick={this.handleItemClick}
                />
                </NavLink>
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