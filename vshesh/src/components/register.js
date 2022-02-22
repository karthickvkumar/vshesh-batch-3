import React, {Component} from "react";

class RegisterPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      first_name : "",
      last_name : "",
      email_id : "",
      password : "",
      date_of_birth : "",
      gender : "",
      hobbies : [],
      address : "",
      city : ""
    }
  }

  onHandleInput = (event) => {
    // console.log(event.target.name, event.target.value)
    if(event.target.name === "hobbies"){
      if(event.target.checked){
        this.state.hobbies.push(event.target.value);
      }
      else{
        var index = this.state.hobbies.findIndex((value) => {
          return value === event.target.value
        });
        this.state.hobbies.splice(index, 1);
      }

      this.setState({
        hobbies : this.state.hobbies
      })
    }
    else{
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }

  onCreateAccount(){
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <h1>This is a Register page</h1>
        <div className="row">
          <div className="space">
            <label className="label">First Name</label>
            <input className="inputbox" type="text" placeholder="Enter your first name.." onChange={this.onHandleInput} name="first_name"/>
          </div>
          <div className="space">
            <label className="label">Last Name</label>
            <input className="inputbox" type="text" placeholder="Enter your last name.." onChange={this.onHandleInput} name="last_name"/>
          </div>
        </div>
        <div className="space">
          <label className="label">Please enter your Email ID</label>
          <input className="inputbox" type="text" placeholder="Enter your email id.." onChange={this.onHandleInput} name="email_id"/>
        </div>
        <div className="space">
          <label className="label">Please enter your Password</label>
          <input className="inputbox" type="password" placeholder="Enter your password.." onChange={this.onHandleInput} name="password"/>
        </div>
        <div className="space">
          <label className="label">Select your DOB</label>
          <input className="inputbox" type="date"  onChange={this.onHandleInput} name="date_of_birth"/>
        </div>
        <div className="space">
          <label className="label">Select your Gender</label>
          <input type="radio" name="gender" onChange={this.onHandleInput} value="Male"/>Male
          <input type="radio" name="gender" onChange={this.onHandleInput} value="Female"/>Female
          <input type="radio" name="gender" onChange={this.onHandleInput} value="Others"/>Others
        </div>
        <div className="space">
          <label className="label">Select your Hobbies</label>
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Cricket"/>Cricket
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Football"/>Football
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Vollyball"/>Vollyball
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Chess"/>Chess
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Caramboard"/>Caramboard
        </div>
        <div className="space">
          <label className="label">Please enter your Address</label>
          <textarea className="address" onChange={this.onHandleInput} name="address"></textarea>
        </div>
        <div className="space">
          <label className="label">Select your City</label>
          <select className="font" onChange={this.onHandleInput} name="city">
            <option>Please select your city</option>
            <option>Chennai</option>
            <option>Delhi</option>
            <option>Banglore</option>
            <option>Mumbai</option>
          </select>
        </div>
        <div className="space">
          <button onClick={() => this.onCreateAccount()}>Create New Account</button>
        </div>
      </div>
    )
  }
}

export default RegisterPage;