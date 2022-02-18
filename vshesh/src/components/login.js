import React, {Component} from "react";

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      email_id : "",
      password : "",
      imageStatus : true
    }
  }

  onHandleInput = (event) => {
    // console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onLogin(){
    console.log(this.state);
  }

  onShowImage(){
    this.setState({
      imageStatus : true
    })
  }

  onHideImage(){
    this.setState({
      imageStatus : false
    })
  }

  render(){
    var name = "Karthick Kumar";

    return(
      <div>
        <h2>Welcome to Login Page, {name}</h2>
        <div className="space">
          <label className="label">Please enter your Email ID</label>
          <input className="inputbox" type="text" placeholder="Enter your email id.." onChange={this.onHandleInput} name="email_id"/>
        </div>
        <div className="space">
          <label className="label">Please enter your Password</label>
          <input className="inputbox" type="password" placeholder="Enter your passoword.." onChange={this.onHandleInput} name="password"/>
        </div>
        <button onClick={() => this.onLogin()}>LOGIN</button>
        <br></br>
        <h2>The email id is {this.state.email_id}</h2>
        <h2>The password is {this.state.password}</h2>
        <div>
          <button onClick={() => this.onShowImage()}>Show Image</button>
          <button onClick={() => this.onHideImage()}>Hide Image</button>
        </div>
        { this.state.imageStatus && <img src={require("../images/shinchu.jpg")} className="image"/> }
        
        <img src="https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp" className="image"/>


        <div>
          { false  ? <h2>Successfully Logged in to the Application</h2> 
                    :
                    <h2>Authentication Failed</h2>
          }
          
          
        </div>

      </div>
    )
  }
}

export default LoginPage;