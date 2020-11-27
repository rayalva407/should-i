import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state
    let user = {
      username: username,
      email: email,
      password: password
    }
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({user})
    };

    fetch('http://localhost:4000/login', configObj)
      .then(response => response.json())
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
        }
        else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('errors:', error))
  }

  redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.localeCompare(errors => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  render() {
    const {username, email, password} = this.state
    
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <input type="text" name="email" value={email} onChange={this.handleChange}/>
          <input type="password" name="password" value={password} onChange={this.handleChange}/>
          <button type="submit">Log In</button>
          <div>
            or <Link to='/signup'>Sign Up</Link>
          </div>
        </form>
      </div>
    )
  }

}

export default Login;