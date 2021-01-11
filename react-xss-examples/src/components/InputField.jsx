/*
  The idea for showing this feature came from https://stackoverflow.com/a/51852579/10291937
  where I saw the basic concept. I implemented this concept with my own component.

  I got the concept of local states and forms from the react documentation
  https://reactjs.org/docs/forms.html
*/

import React from "react";

class InputField extends React.Component {
  constructor(props) {
   super(props);
   this.state = {employeeName: "" };
   this.handleChange = this.handleChange.bind(this);
 }
 handleChange(event){
   this.setState({employeeName: event.target.value});
 }
   render(){
    return <div>
      <h2>React is quite safe by design.</h2>
        <form>
        <p>Dear Employee, please enter your name: </p>
        <input
          onChange={this.handleChange}
        />
      <p>Your name: {this.state.employeeName}</p>
      <hr></hr>
      </form>
    </div>
  }
}
export default InputField;
