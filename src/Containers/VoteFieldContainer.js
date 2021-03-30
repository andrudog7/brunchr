import React from 'react'
import {connect} from 'react-redux'
import BottomlessVoteField from '../Components/VoteFields/BottomlessVoteField'
import ReservationsVoteField from '../Components/VoteFields/ReservationsVoteField'
import DrinkSpecialsVoteField from '../Components/VoteFields/DrinkSpecialsVoteField'
import OutdoorSeatingVoteField from '../Components/VoteFields/OutdoorSeatingVoteField'
import DragBrunchVoteField from '../Components/VoteFields/DragBrunchVoteField'


class VoteFieldContainer extends React.Component {

    render() {
        let userRestaurant
        if (this.props.userRestaurants && this.props.userRestaurants.find(rel => rel.restaurant_id === this.props.restaurant.id)) {
        userRestaurant = this.props.userRestaurants.find(rel => rel.restaurant_id === this.props.restaurant.id)
        }

        return(
            <>
            <BottomlessVoteField restaurant={this.props.restaurant} userRestaurant={userRestaurant} currentUser={this.props.currentUser}></BottomlessVoteField>
            <ReservationsVoteField restaurant={this.props.restaurant} userRestaurant={userRestaurant} currentUser={this.props.currentUser}></ReservationsVoteField>
            <DrinkSpecialsVoteField restaurant={this.props.restaurant} userRestaurant={userRestaurant} currentUser={this.props.currentUser}></DrinkSpecialsVoteField>
            <OutdoorSeatingVoteField restaurant={this.props.restaurant} userRestaurant={userRestaurant} currentUser={this.props.currentUser}></OutdoorSeatingVoteField>
            <DragBrunchVoteField restaurant={this.props.restaurant} userRestaurant={userRestaurant} currentUser={this.props.currentUser}></DragBrunchVoteField>
            </>
        )
}
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser.state,
    userRestaurants: state.stats.state
})

export default connect(mapStateToProps)(VoteFieldContainer);

