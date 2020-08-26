import React from "react";
// import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Divider, Icon } from "semantic-ui-react";

import { NavLink, Route } from "react-router-dom";
import "./Header.css";

const SideBarHeader = () => {
  return (
    <div className="sidenav">
      <NavLink to="/" className="link">
        <Icon name="home" color="grey" className="nav-icon"  size="large"/>
        Welcome
      </NavLink>
      <Divider />
      <NavLink to="/get-started" className="link">
        <Icon name="paper plane outline" color="grey" className="nav-icon"  size="large"/>
        Get Started
      </NavLink>
      <Divider />

      <NavLink to="/api-doc" className="link">
        <Icon name="code" color="grey" className="nav-icon"  size="large"/>
        Api Documentation
      </NavLink>
      <Divider />

      <NavLink to="/aseess" className="link">
        <Icon name="calendar check " color="grey" className="nav-icon" size="large" />
        How we Assess
      </NavLink>
      <Divider />

      <NavLink to="/dashboard-visualization" className="link" >
        <Icon name="windows" color="grey" className="nav-icon"  size="large" />
        Dashboard Visualization
      </NavLink>
      <Divider />

      <NavLink to="/help" className="link">
        <Icon name="question circle outline" color="grey" className="nav-icon"  size="large"/>
        Help!
      </NavLink>
      <Divider />

      <NavLink to="/submit" className="link">
        <Icon name="home" color="grey" className="nav-icon"  size="large"/>
        Submit
      </NavLink>
      <Divider />
    </div>
  );
};

export default SideBarHeader;
