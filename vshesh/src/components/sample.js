import React, {Component} from "react";

class SampleComponenet extends Component{

  //Method
  display(){
    let message = "Welcome to dispay method..."
    console.log(message);
  }

  //Property Method
  readInputValue = (event) => {
    console.log(event.target.value);
  }

  render(){
    return(
      <div>
        <h1 className="heading">This is sample Component</h1>
        <button onClick={ () => this.display() }>Click for Event</button>
        <div>
          <label>Enter your Email ID</label>
          <input type="email" placeholder="Please enter email.." onChange={this.readInputValue}/>
        </div>
        <div>
          <label>Enter your Password</label>
          <input type="password" placeholder="Please enter password.." onChange={this.readInputValue}/>
        </div>
      </div>
    )
  }
}

export default SampleComponenet;