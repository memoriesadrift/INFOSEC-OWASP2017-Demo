import React from "react";

/*
  javascript:alert('Caution, there are options for a hack!');
*/

class InputFieldSecure extends React.Component {
  constructor(props) {
   super(props);
   this.state = {urlSecure: "" };
 }
 handleChange = (event) => {
   this.setState({urlSecure: event.target.value});
 }

   render(){
    var url = ""
    return <div>
      <div style={{visibility: "hidden"}}>
      {url = this.state.urlSecure.replace(/^(javascript:)/, "")}
      </div>
      <h2>First insecurity solved by validation. </h2>
      <p>Dear Employee, please add a link to your LinkedIn Account.</p>
        <form>
        <input
          type='text'
          onChange={this.handleChange}
        />
        <br />
        <br />
        <a href={url}>LinkedIn of Employee</a>
      <hr></hr>
      </form>
    </div>
  }
}
export default InputFieldSecure;
