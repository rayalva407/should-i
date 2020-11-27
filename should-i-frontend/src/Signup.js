import React, { Component } from 'react'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
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
  }

  render() {
    const {username, email, password, password_confirmation} = this.state

    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>
          <input type="text" name="email" value={email} onChange={this.handleChange}/>
          <input type="password" name="password" value={password} onChange={this.handleChange}/>
          <input type="password" name="password_confirmation" value={password_confirmation} onChange={this.handleChange}/>

          <button type="submit">Signup</button>
        </form>
      </div>
    )
  }
}

export default Signup