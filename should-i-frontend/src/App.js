import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    fetch('http://localhost:4000/logged_in')
      .then(response => response.json())
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        }
        else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  componentDidMount() {
    this.loginStatus()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;