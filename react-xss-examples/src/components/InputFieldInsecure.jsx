
/*
  The idea for showing this feature came from https://stackoverflow.com/a/51852579/10291937
  where I saw the basic concept. I implemented this concept myself with my own component.

  I got the concept of local states and forms from the react documentation
  https://reactjs.org/docs/forms.html
*/

import React from "react";

class InputFieldInsecure extends React.Component {
  constructor(props) {
   super(props);
   this.state = {linkedIn: "" };
   this.handleChange = this.handleChange.bind(this);
 }
 handleChange(event){
   this.setState({linkedIn: event.target.value});
 }
 render(){
    return <div>
      <h2>First insecurity. </h2>
      <p>Dear Employee, please add a link to your LinkedIn Account.</p>
        <form>
        <input
          type='text'
          onChange={this.handleChange}
        />
        <br />
        <br />
        <a href={this.state.linkedIn}>LinkedIn Employee</a>
      </form>
    </div>
  }
}
export default InputFieldInsecure;
