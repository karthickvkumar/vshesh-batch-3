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
      city : "",
      first_name_error : false,
      last_name_error : false,
      email_id_error : false,
      password_error : false,
      date_of_birth_error : false,
      gender_error : false,
      hobbies_error : false,
      address_error : false,
      city_error : false,
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
    
    this.setState({
      first_name_error : (this.state.first_name === "") ? true : false,
      last_name_error : (this.state.last_name === "") ? true : false,
      email_id_error : (this.state.email_id === "") ? true : false,
      password_error : (this.state.password === "") ? true : false,
      date_of_birth_error : (this.state.date_of_birth === "") ? true : false,
      gender_error : (this.state.gender === "") ? true : false,
      hobbies_error : (this.state.hobbies.length === 0) ? true : false,
      address_error : (this.state.address === "") ? true : false,
      city_error : (this.state.city === "") ? true : false
    })
    
    
  }

  render(){
    return(
      <div>
        <h1>This is a Register page</h1>
        <div className="row">
          <div className="space">
            <label className="label">First Name</label>
            <input className="inputbox" type="text" placeholder="Enter your first name.." onChange={this.onHandleInput} name="first_name"/>
            {this.state.first_name_error && <p className="error-msg">Invalid First Name</p>}
          </div>
          <div className="space">
            <label className="label">Last Name</label>
            <input className="inputbox" type="text" placeholder="Enter your last name.." onChange={this.onHandleInput} name="last_name"/>
            {this.state.last_name_error && <p className="error-msg">Invalid Last Name</p>}
          </div>
        </div>
        <div className="space">
          <label className="label">Please enter your Email ID</label>
          <input className="inputbox" type="text" placeholder="Enter your email id.." onChange={this.onHandleInput} name="email_id"/>
          {this.state.email_id_error && <p className="error-msg">Invalid Email ID</p>}
        </div>
        <div className="space">
          <label className="label">Please enter your Password</label>
          <input className="inputbox" type="password" placeholder="Enter your password.." onChange={this.onHandleInput} name="password"/>
          {this.state.password_error && <p className="error-msg">Invalid Password</p>}
        </div>
        <div className="space">
          <label className="label">Select your DOB</label>
          <input className="inputbox" type="date"  onChange={this.onHandleInput} name="date_of_birth"/>
          {this.state.date_of_birth_error && <p className="error-msg">Invalid Date of Birth</p>}
        </div>
        <div className="space">
          <label className="label">Select your Gender</label>
          <input type="radio" name="gender" onChange={this.onHandleInput} value="Male"/>Male
          <input type="radio" name="gender" onChange={this.onHandleInput} value="Female"/>Female
          <input type="radio" name="gender" onChange={this.onHandleInput} value="Others"/>Others
          {this.state.gender_error && <p className="error-msg">Invalid Gender</p>}
        </div>
        <div className="space">
          <label className="label">Select your Hobbies</label>
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Cricket"/>Cricket
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Football"/>Football
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Vollyball"/>Vollyball
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Chess"/>Chess
          <input type="checkbox" onChange={this.onHandleInput} name="hobbies" value="Caramboard"/>Caramboard
          {this.state.hobbies_error && <p className="error-msg">Invalid Hobbies</p>}
        </div>
        <div className="space">
          <label className="label">Please enter your Address</label>
          <textarea className="address" onChange={this.onHandleInput} name="address"></textarea>
          {this.state.address_error && <p className="error-msg">Invalid Address</p>}
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
          {this.state.city_error && <p className="error-msg">Invalid City</p>}

        </div>
        <div className="space">
          <button onClick={() => this.onCreateAccount()}>Create New Account</button>
        </div>
      </div>
    )
  }
}

export default RegisterPage;