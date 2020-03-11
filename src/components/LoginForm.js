import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handleData = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  fieldsEmpty = () => {
    if (this.state.username==="" || this.state.password===""){
      return true;
    }else{
      console.log('fields are not empty')
      return false; 
    }
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          if (this.fieldsEmpty()){
            console.log('fields are empty')
          }else{
            console.log(this.state.username)
            this.props.handleLogin(this.state.username,this.state.password)
          }
        }}
        type="submit"
      >
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            onChange={event => this.handleData(event)}
            value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            onChange={event => this.handleData(event)}
            value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button 
          
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
