import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitAction = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit={this.submitAction}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.onChange} name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.onChange} name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
