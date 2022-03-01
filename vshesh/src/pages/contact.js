import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

class ContactPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      name : "",
      job: ""
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit(){
    // var apiURL = "https://reqres.in/api/users";
    var apiURL = "https://reqres.in/api/users/2";
    axios.put(apiURL, this.state)
        .then((response) => {
          var serverData = response.data;
          console.log(serverData);
          alert("Form has been Submitted Successfully")
        })
        .catch((error) => {
          console.log(error);
        })
  }

  render(){
    return(
      <div>
        <h1>Contact Page</h1>
        <NavLink to="/">Go to Home Page</NavLink>
        <div>
          <label>Enter your Name :</label>
          <input type="text" placeholder="Enter your Name.." onChange={this.onHandleInput} name="name"/>
          <br></br>
          <label>Enter your Job Details :</label>
          <input type="text" placeholder="Enter your Job.." onChange={this.onHandleInput} name="job"/>
        </div>
        <button onClick={() => this.onSubmit()}>Submit Information</button>
      </div>
    )
  }
}

export default ContactPage;