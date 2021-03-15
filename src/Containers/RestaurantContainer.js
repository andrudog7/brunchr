import React from 'react' 
import {connect} from 'react-redux'
import {Card, Image, Placeholder } from 'semantic-ui-react'

class RestaurantContainer extends React.Component {

    render() {
        if (this.props.loading === true) {
            return (
                <div>Loading Restaurants...</div>
            )
        } else {
        return(
            <div>Restaurants Have Loaded
                <Card.Group doubling itemsPerRow={5} stackable>
          {this.props.restaurants.map(res => (
            <Card key={res.id}>
              {this.props.loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={res.image_url ? res.image_url : "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"} fluid style={{maxHeight: "300px"}}/>
              )}
              <Card.Content>
                {this.props.loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <>
                    <Card.Header>{res.name}</Card.Header>
                    <Card.Meta>Rating: {res.rating}</Card.Meta>
                    <Card.Description>Price: {res.price}</Card.Description>
                  </>
                )}
              </Card.Content>
              
              </Card>
              ))}
              </Card.Group>
            </div>
        )
        }
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    loading: state.restaurants.loading
})

export default connect(mapStateToProps)(RestaurantContainer);