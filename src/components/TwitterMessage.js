import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message:""
    };
  }

  handleSubmit = event => {
    event.preventDefault(); 
    this.setState({
      // event
    })
  }

  handleData = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  showRemainingChars = () => {
    return <div>
      {this.props.maxChars - this.state.message.length}
    </div>
  }

  render() {
    // console.log(this.props.maxChars-this.state.message.length)
    return (
      <div>
        <strong>Your message:</strong>
        {/* add onchange and value to the input  */}
        <input 
        type="text" 
        name="message" 
        id="message" 
        onChange = {event => this.handleData(event)}
        value={this.state.message}
        />
        {this.showRemainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
