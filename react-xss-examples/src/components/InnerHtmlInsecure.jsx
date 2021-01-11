
/*

  I got the concept of local states and forms from the react documentation
  https://reactjs.org/docs/forms.html

  The concept of dangerouslySetInnerHTML was also implemented from the react documentation
  https://reactjs.org/docs/dom-elements.html

*/

import React from "react";

class InnerHtmlInsecure extends React.Component {
  constructor(props) {
   super(props);
   this.state = {innerExample: "" };
   this.handleChange = this.handleChange.bind(this);
 }
 handleChange(event){
   this.setState({innerExample: event.target.value});
 }
   render(){
      return <div>
        <h2>Second insecurity. </h2>
        <p>Dear Employee, please tell us suggestions for improvements in customer service.</p>
          <form>
          <textarea
            type='text'
            onChange={this.handleChange}
          />
          <br />
          <div dangerouslySetInnerHTML={{ __html: this.state.innerExample}} />
        </form>
      </div>
    }
  }
export default InnerHtmlInsecure;
