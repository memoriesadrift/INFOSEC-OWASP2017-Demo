
/*
  I got the concept of local states and forms from the react documentation
  https://reactjs.org/docs/forms.html

  The idea of using DOMPurify for sanitation came from
  https://www.npmjs.com/package/dompurify
*/

import React from "react";
import createDOMPurify from "dompurify";

let DOMPurify = createDOMPurify(window);

class InnerHtmlSecure extends React.Component {
  constructor(props) {
   super(props);
   this.state = {innerExample: "" };
   this.handleChange = this.handleChange.bind(this);
 }
 handleChange(event){
   this.setState({innerExample: DOMPurify.sanitize(event.target.value)});
 }
     render(){
      return <div>
        <h2>Second insecurity solved with sanitation.</h2>
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
export default InnerHtmlSecure;
