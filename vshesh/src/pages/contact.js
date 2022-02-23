import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class ContactPage extends Component{

  render(){
    return(
      <div>
        <h1>Contact Page</h1>
        <NavLink to="/">Go to Home Page</NavLink>
      </div>
    )
  }
}

export default ContactPage;