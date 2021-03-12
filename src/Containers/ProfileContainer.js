import React from 'react' 
import {Header, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import NavBar from './NavBar'


class ProfileContainer extends React.Component {

    render() {
        return(
            <div>
                <NavBar></NavBar>
                <Header>
                <Image src={this.props.currentUser.image} size='huge'/>
                Welcome {this.props.currentUser.username}
               
                </Header>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser.state
})

const mapDispatchToProps = (dispatch) => ({
    updateNavbar: (payload) => dispatch({type: "HANDLE_NAVBAR", payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);