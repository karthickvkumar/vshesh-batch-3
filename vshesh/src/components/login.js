import React, {Component} from "react";

class LoginPage extends Component{

  render(){
    return(
      <div>
        <h2>Welcome to Login Page</h2>
        <div className="space">
          <label className="label">Please enter your Email ID</label>
          <input className="inputbox" type="text" placeholder="Enter your email id.."/>
        </div>
        <div className="space">
          <label className="label">Please enter your Password</label>
          <input className="inputbox" type="password" placeholder="Enter your passoword.."/>
        </div>
        <button>LOGIN</button>
      </div>
    )
  }
}

export default LoginPage;