import '../App.css';
import React from 'react'
import {Switch, Route} from "react-router-dom"
import SignUpForm from '../Components/SignUpForm'
import LoginForm from "../Components/LoginForm"
import ProfileContainer from './ProfileContainer'
import Home from './Home'
import {Header, Image, Container} from 'semantic-ui-react'
import brunchr from '../Images/brunchrlogo.jpeg'
import RestaurantContainer from './RestaurantContainer';
import GetId from '../Components/GetId';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Header as='h2' style={{marginTop:"10px"}} >
          <Image circular src={brunchr} className="App-logo" alt="logo" />Brunchr
        </Header> 
        <Container>
          <Switch>
            <Route exact path ="/" component={() => <Home/>}></Route>
            <Route exact path="/login" component={() => <LoginForm/>}></Route>
            <Route exact path="/signup" component={() => <SignUpForm/>}/>
            <Route exact path="/profile" component={() => <ProfileContainer/>}></Route>
            <Route exact path="/restaurants" component={() => <RestaurantContainer/>}></Route>
            <Route exact path="/restaurants/:id" component={GetId}></Route>
          </Switch>
        </Container>
       
      </div>
    );
  }
}

export default App;
