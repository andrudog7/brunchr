import React from 'react';
import {Header, Container} from 'semantic-ui-react'

export default class AboutBrunchr extends React.Component  {

    render() {
        return (
            <div id="about-brunchr">
                <br></br>
                <br></br>
                <Container text>
                <Header>Welcome!</Header>
                <br></br>
                <div>
                    <p>
                    Brunchr is a crowd-sourcing app built for brunch lovers! If you're like us, then you know the joy of a bottomless mimosa brunch special or munching on pancakes during a drag show. 
                    Finding them is the hard part. This is where you and Brunchr come in.   
                    </p>
                    <p>
                    Sign up with Brunchr and you can discover brunch spots in your favorite cities and neighborhoods. You'll be able to vote on various brunch amenities for each restaurant. 
                    Brunchr takes the majority vote and classifies restaurants under those categories so you can search and filter only the brunch spots that have what you are looking for. 
                    As part of the Brunchr community you can also save your favorite brunch spots and leave comments about your experience there. 
                    </p>
                    <p>
                    Disclaimer: Brunchr is based on a majority of user votes and since restaurant specials change frequently, please contact the restaurant ahead of time for the most up-to-date information.
                    </p>
                </div>
                </Container>
            </div>
        )
    }
}