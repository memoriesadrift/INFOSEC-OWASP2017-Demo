import React from "react";
import createDOMPurify from "dompurify";
/*
  "Hello, <img src='' onerror='alert("Caution, there are options for a hack!")' />"
*/

let DOMPurify = createDOMPurify(window);

class InnerHtmlSecure extends React.Component {
  constructor(props) {
   super(props);
   this.state = {innerExample: "" };
 }
 handleChange = (event) => {
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
