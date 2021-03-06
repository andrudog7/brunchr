import React from 'react' 
import {Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class NavBar extends React.Component {

    handleItemClick = (e, { name }) => {
        if (name === "logout") {
            this.props.logoutUser()
            this.props.removeRestaurants()
            this.props.removeStats()
            this.props.handleNavBar("home")
        } else {
        this.props.handleNavBar(name)
        }
    }

    render () {
        if (this.props.navBar === "My Favorites" || this.props.navBar === "restaurants") {
            return (
                <Menu pointing secondary style={{marginTop:"-25px"}}>
                
                <NavLink to="/profile">
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='My Favorites'
                    active={this.props.navBar  === 'My Favorites'}
                    onClick={this.handleItemClick}
                />
                </NavLink>

                <NavLink to="/restaurants">
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='restaurants'
                    active={this.props.navBar  === 'restaurants'}
                    onClick={this.handleItemClick}
                />
                </NavLink>
            
                    <Menu.Menu position="right">
                    <NavLink to="/">    
                    <Menu.Item
                    style={{textAlign:"left"}}
                    name='logout'
                    active={this.props.navBar  === 'logout'}
                    onClick={this.handleItemClick}
                    />
                    </NavLink>
                  </Menu.Menu>  
                
                </Menu>
                
            )} else {
                return (<Menu pointing secondary style={{marginTop:"-25px"}}>
                <NavLink to="/">
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='home'
                    active={this.props.navBar  === 'home'}
                    onClick={this.handleItemClick}
                />
                </NavLink>
                
                <NavLink to="/login">
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='login'
                    active={this.props.navBar  === 'login'}
                    onClick={this.handleItemClick}
                />
                </NavLink>
                <NavLink to="/signup">
                <Menu.Item
                    style={{textAlign:"left"}}
                    name='signup'
                    content="Sign Up"
                    active={this.props.navBar === 'signup'}
                    onClick={this.handleItemClick}
                />
                </NavLink> 
                
                </Menu>
        )
    }
    }}

const mapStateToProps = (state) => ({
    navBar: state.navBar.active,
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    handleNavBar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload}),
    logoutUser: (payload) => dispatch({type: 'LOGOUT', payload}),
    removeRestaurants: (payload) => dispatch({type: 'REMOVE_RESTAURANTS', payload}),
    removeStats: (payload) => dispatch({type: 'REMOVE_STATS', payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);