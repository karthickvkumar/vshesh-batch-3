import React, {Component} from "react";

import SampleComponenet from "./components/sample";

class App extends Component{

  render(){
    return(
      <div>
        <h1>Welcome to App Page</h1>
        <h2>React JS app file</h2>
        <SampleComponenet></SampleComponenet>
      </div>
    )
  }
}

export default App;