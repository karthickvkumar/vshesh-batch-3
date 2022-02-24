import React, { Component } from "react";
import {Outlet, NavLink} from "react-router-dom";

class MailPage extends Component{

  render(){
    return(
      <div className="container">
        <div className="heading"></div>
        <div className="wrapper">
          <div className="sidebar">
            <NavLink to="/mail/inbox">Go to Inbox</NavLink>
            <br></br>
            <NavLink to="/mail/sent">Go to Sent</NavLink>
            <br></br>
            <NavLink to="/mail/trash">Go to Trash</NavLink>
          </div>
          <div className="content">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default MailPage;