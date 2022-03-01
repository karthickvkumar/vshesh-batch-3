import React, { Component } from "react";
import axios from "axios";

class AboutPage extends Component{

  deleteRecord(){
    var apiURL = "https://reqres.in/api/users/2";

    axios.delete(apiURL)
      .then((response) => {
        var serverData = response.data;
        console.log(serverData);
        alert("Successfully Delete completed")
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render(){
    return(
      <div>
        <h1>About Page</h1>
        <button onClick={() => this.deleteRecord()}>Delete Record</button>
      </div>
    )
  }
}

export default AboutPage;