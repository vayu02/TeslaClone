import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  return (
    <Router>
      <div className="App">
        <Nav isSideBarOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen} />
        {isSideBarOpen && <SideBar />}
      </div>
    </Router>
  );
}

export default App;
