import React from 'react' 
import {Header, Image} from 'semantic-ui-react'

export default function UserHeader(currentUser) {
    if (currentUser) {
        return (
            <Header style={{textAlign:"left"}}>
            <Image circular src={currentUser.my_image} size='huge'/>
            {currentUser.username}
        </Header>
        )
    }
}