import React, { Component, PropTypes } from 'react'
import './Header.scss'

class LoginJSX extends Component {
  state = {
    user: '',
    password: ''
  }

  static propTypes = {
    handleLogin: PropTypes.func.isRequired
  }

  inputOnChange = propName => ev => this.setState({ [propName] : ev.target.value })

  handleLogin = ev => {
    ev.preventDefault()
    this.props.handleLogin(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleLogin} >
        <input
          type='input'
          value={this.state.user}
          placeholder='username'
          className='header-login-input'
          name='username'
          onChange={this.inputOnChange('user')} />
        <input
          type='password'
          value={this.state.password}
          placeholder='password'
          className='header-login-input'
          name='password'
          onChange={this.inputOnChange('password')} />
        <input
          type='submit'
          value='Login Now' />
      </form>
    )
  }
}

export default LoginJSX
