import React, {Component} from "react";

class RegisterPage extends Component{

  render(){
    return(
      <div>
        <h1>This is a Register page</h1>
        <div className="row">
          <div className="space">
            <label className="label">First Name</label>
            <input className="inputbox" type="text" placeholder="Enter your first name.."/>
          </div>
          <div className="space">
            <label className="label">Last Name</label>
            <input className="inputbox" type="text" placeholder="Enter your last name.."/>
          </div>
        </div>
        <div className="space">
          <label className="label">Please enter your Email ID</label>
          <input className="inputbox" type="text" placeholder="Enter your email id.."/>
        </div>
        <div className="space">
          <label className="label">Please enter your Password</label>
          <input className="inputbox" type="password" placeholder="Enter your password.."/>
        </div>
        <div className="space">
          <label className="label">Select your DOB</label>
          <input className="inputbox" type="date"/>
        </div>
        <div className="space">
          <label className="label">Select your Gender</label>
          <input type="radio" name="gender"/>Male
          <input type="radio" name="gender"/>Female
          <input type="radio" name="gender"/>Others
        </div>
        <div className="space">
          <label className="label">Select your Hobbies</label>
          <input type="checkbox"/>Cricket
          <input type="checkbox"/>Football
          <input type="checkbox"/>Vollyball
          <input type="checkbox"/>Chess
          <input type="checkbox"/>Caramboard
        </div>
        <div className="space">
          <label className="label">Please enter your Address</label>
          <textarea className="address"></textarea>
        </div>
        <div className="space">
          <label className="label">Select your City</label>
          <select className="font">
            <option>Please select your city</option>
            <option>Chennai</option>
            <option>Delhi</option>
            <option>Banglore</option>
            <option>Mumbai</option>
          </select>
        </div>
        <div className="space">
          <button>Create New Account</button>
        </div>
      </div>
    )
  }
}

export default RegisterPage;