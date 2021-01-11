
/*
  I got the concept of local states and forms from the react documentation
  https://reactjs.org/docs/forms.html

  The idea of using encodeURI came from the mozilla docs
  https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI

  The code to replace javascript in line 26 was taken from
  https://stackoverflow.com/a/51852579/10291937
*/
import React from "react";

class InputFieldSecure extends React.Component {
  constructor(props) {
   super(props);
   this.state = {urlSecure: "" };
   this.handleChange = this.handleChange.bind(this);
 }
 handleChange(event){
   this.setState({urlSecure: event.target.value});
 }
   render(){
    var url = ""
    return <div>
      <div style={{visibility: "hidden"}}>
          {url = encodeURI(this.state.urlSecure).replace(/^(javascript:)/, "")}
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
        <a href={url}>LinkedIn Employee</a>
      <hr></hr>
      </form>
    </div>
  }
}
export default InputFieldSecure;
