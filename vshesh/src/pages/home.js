import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

class HomePage extends Component{

  loadUserDetials(){
    var apiURL = "https://reqres.in/api/users?page=2";

    axios.get(apiURL)
        .then( (response) => {
          console.log(response);
        })
        .catch( (error) => {
            console.log(error);
        })
  }

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
        <br></br>
        <button onClick={() => this.loadUserDetials()}>Load User Information</button>
      </div>
    )
  }
}

export default HomePage;