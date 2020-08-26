import React from "react";
import "./App.css";
import Header from "./components/Header/SideBarHeader";
import Layout from "./components/Layout/Layout";
import Welcome from "./components/welcome/welcome";
import welcome from "./components/welcome/welcome";
import GetStarted from "./components/Get-Started/GetStarted";
import HowAssess from "./components/HowAssess/HowAssess";
import DashedChart from "./components/Graph/DashedChart/DashedChart";
import Submit from "./components/Submit/Submit";
import Help from "./components/Help/Help";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Layout /> */}
      <Route path="/" exact component={welcome} />
      <Route path="/get-started" exact component={GetStarted} />
      <Route path="/api-doc" exact component={welcome} />
      <Route path="/aseess" exact component={HowAssess} />
      <Route path="/dashboard-visualization" exact component={DashedChart} />
      <Route path="/help" exact component={Help} />
      <Route path="/submit" exact component={Submit} />
    </div>
  );
}

export default App;
