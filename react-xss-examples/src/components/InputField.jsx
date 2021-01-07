import React from "react";

/*
  javascript:alert('Caution, there are options for a hack!');
*/

class InputField extends React.Component {
  constructor(props) {
   super(props);
   this.state = {employeeName: "" };
 }
 handleChange = (event) => {
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
