import '../App.css';
import React, {Component} from 'react'
import {Switch, Route} from "react-router-dom"
import SignUpContainer from '../Components/SignUpContainer'
import Home from './Home'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './NavBar'
import {Header, Image, Container, Grid} from 'semantic-ui-react'
import logo from '../logo.svg'
import LoginContainer from "../Components/LoginContainer"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Header as='h2'>
          <Image circular src={logo} className="App-logo" alt="logo" />Brunchr
        </Header> 
        <Grid >
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <NavBar></NavBar>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Container>
                            
                                <Switch>
                                  <Route exact path ="/" component={Home}></Route>
                                  <Route exact path="/login" component={() => <LoginContainer/>}></Route>
                                  <Route exact path="/signup" component={() => <SignUpContainer/>}/>   
                                </Switch>
                            
                            </Container>
                        </Grid.Column> 
                    </Grid.Row>
                </Grid>
          
        </Router>

        
      </div>
    );
  }
}

export default App;
