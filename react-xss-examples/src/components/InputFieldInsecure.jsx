import React from "react";
/*
  javascript:alert('Caution, there are options for a hack!');
  https://at.linkedin.com/
*/

class InputFieldInsecure extends React.Component {
  constructor(props) {
   super(props);
   this.state = {linkedIn: "" };
 }
 handleChange = (event) => {
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
      <a href={this.state.linkedIn}>LinkedIn of Employee</a>
    </form>
  </div>
}
}
export default InputFieldInsecure;
