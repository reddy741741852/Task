import React from "react";
import "./GetStarted.css";
import { Header, Divider, Button } from "semantic-ui-react";
import SideBarHeader from "../Header/SideBarHeader";
const GetStarted = () => {
  return (
    <>
    <SideBarHeader />
    <div style={{ margin: "20px" }} className="main">
      <Header as="h2">
        We created a CLI and a starter project all bootstrapped up for you. Run
        the following CLI to get started.
        <div className="code-block">npx eog-react-visualization-cli create</div>
      </Header>
      <Divider />
      <Header as="h2">
        For example, if you enter "yourname" the CLI will create a directory
        named "yourname-react-visualization" Then:
        <div className="code-block"><span style={{color:'orange'}}>cd </span>&nbsp; yourname-react-visualization </div>
        <div className="code-block">yarn install </div>

        <div className="code-block">yarn start </div>

      </Header>
      <Divider />
      <Header as="h2">
        Complete your visualization. You will probably want to view the API
        Documentation. Then, when you are ready:
        <div className="code-block">npx eog-react-visualization-cli create</div>
      </Header>
      <Divider />
      <Button attached="bottom" color="black">
        Submit Your Visualization
      </Button>
    </div>
    </>
  );
};

export default GetStarted;
