import React, {Component} from "react";

import SampleComponenet from "./components/sample";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";

import "./css/style.css";

class App extends Component{

  render(){
    return(
      <div>
        {/* <h1>Welcome to App Page</h1>
        <h2>React JS app file</h2>
        <SampleComponenet></SampleComponenet> */}
        {/* <LoginPage></LoginPage> */}
        <RegisterPage></RegisterPage>
      </div>
    )
  }
}

export default App;