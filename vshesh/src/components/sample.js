import React, {Component} from "react";

class SampleComponenet extends Component{

  display(){
    let message = "Welcome to dispay method..."
    console.log(message);
  }

  render(){
    return(
      <div>
        <h1>This is sample Component</h1>
        <button onClick={ () => this.display() }>Click for Event</button>
      </div>
    )
  }
}

export default SampleComponenet;