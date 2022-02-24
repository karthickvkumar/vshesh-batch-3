import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import ProfilePage from "./pages/profile";
import MailPage from "./pages/mail";

import InboxPage from "./pages/mail/inbox";
import SentPage from "./pages/mail/sent";
import TrashPage from "./pages/mail/trash";

import "./css/style.css";

class App extends Component{

  render(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="/mail" element={<MailPage></MailPage>}>
              <Route path="inbox" element={<InboxPage></InboxPage>}></Route>
              <Route path="sent" element={<SentPage></SentPage>}></Route>
              <Route path="trash" element={<TrashPage></TrashPage>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;