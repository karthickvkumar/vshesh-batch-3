import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import InboxPage from "./mail/inbox";
import SentPage from "./mail/sent";
import TrashPage from "./mail/trash";

class MailPage extends Component{

  render(){
    return(
      <div className="container">
        <div className="heading"></div>
        <div className="wrapper">
          <div className="sidebar"></div>
          <div className="content">
            <Routes>
              <Route path="/mail/*" element={<InboxPage></InboxPage>}></Route>
              {/* <Route path="/mail/sent" element={<SentPage></SentPage>}></Route> */}
              {/* <Route path="/mail/trash" element={<TrashPage></TrashPage>}></Route> */}
            </Routes>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default MailPage;