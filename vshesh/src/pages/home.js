import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

class HomePage extends Component{

  constructor(props){
    super(props);
    this.state = {
      userList : []
    }
  }

  loadUserDetials(){
    var apiURL = "https://reqres.in/api/users?page=2";

    axios.get(apiURL)
        .then( (response) => {
          var serverData = response.data;
          this.setState({
            userList : serverData.data
          })
        })
        .catch( (error) => {
            console.log(error);
        })
  }

  render(){
    console.log(this.state.userList)
    // shiftkey + alt key + down arrow -> Copy and line and paste it below 
    var usersListInformation = this.state.userList.map((value, index) => {
      return (
        <tr key={index}>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td> 
          <td>{value.email}</td>
          <td><img src={value.avatar} className="profile-picture" /></td>
        </tr>
      );
    });

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
        <table id="customers">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {usersListInformation}
          </tbody>
        </table>
      </div>
    )
  }
}

export default HomePage;