import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class HomePage extends Component{

  render(){
    return(
      <div>
        <h1>Home Page</h1>
        <NavLink to="/contact">Go to Contact Page</NavLink>
        <br></br>
        <NavLink to="/about">Go to About Page</NavLink>
        <br></br>
        <NavLink to="/profile">Go to Profile Page</NavLink>
        <br></br>
        <NavLink to="/mail">Go to Mail Page</NavLink>
      </div>
    )
  }
}

export default HomePage;