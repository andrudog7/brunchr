import '../App.css';
import React from 'react'
import {Switch, Route} from "react-router-dom"
import SignUpForm from '../Components/SignUpForm'
import LoginForm from "../Components/LoginForm"
import ProfileContainer from './ProfileContainer'
import Home from './Home'
import {BrowserRouter as Router} from 'react-router-dom'
import {Header, Image, Container} from 'semantic-ui-react'
import brunchr from '../Images/brunchrlogo.jpeg'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Header as='h2' style={{marginTop:"10px"}} >
          <Image circular src={brunchr} className="App-logo" alt="logo" />Brunchr
          
        </Header> 
        <Container>
          <Switch>
            <Route exact path ="/" component={Home}></Route>
            <Route exact path="/login" component={() => <LoginForm/>}></Route>
            <Route exact path="/signup" component={() => <SignUpForm/>}/>
            <Route exact path="/profile" component={() => <ProfileContainer/>}></Route>   
          </Switch>
        </Container>
        </Router>
      </div>
    );
  }
}

export default App;
