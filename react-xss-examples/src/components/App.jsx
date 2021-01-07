import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputField from "./InputField.jsx";
import InputFieldInsecure from "./InputFieldInsecure.jsx";
import InputFieldSecure from "./InputFieldSecure.jsx";
import InnerHtmlInsecure from "./InnerHtmlInsecure.jsx";
import InnerHtmlSecure from "./InnerHtmlSecure.jsx";


  function App(){
    return <div>
      <Header />
      <InputField />
      <InputFieldInsecure />
      <InputFieldSecure />
      <InnerHtmlInsecure />
      <InnerHtmlSecure />
      <Footer />
    </div>
  }

export default App;
