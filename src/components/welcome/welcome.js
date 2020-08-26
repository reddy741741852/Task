import React from "react";
import "./Welcome.css";
import { Image, Popup, Button, Card } from "semantic-ui-react";
import SideBarHeader from "../Header/SideBarHeader";
const welcome = () => {
  return (
    <>
      <SideBarHeader />

      <div className="main">
        <h1 className="main-heading">
          Huzzah! Welcome to the EOG React Assessment!
        </h1>
        <div className="sub-heading">
          I think our industry hires completely wrong and want to change that.
          <br />
          So I created this assessment to help us. The deal:
        </div>
        <Card fluid>
          <div className="content">
            <p className="sub-content">
              Good day. Nice to meet you. My name is Jesse Wolgamott, and I
              think the entire software industry hires people incredibly poorly.
              You've probably been brought in to interview and had to write an
              algorithm or binary tree, from scratch, on a whiteboard. You don't
              get your keyboard, your google, your notes, anything -- and you're
              timed and it's stressful.
            </p>
            <p className="sub-content">
              This is sub-optimal. And its only tangentially related to your
              eventual job of solving problems.
            </p>
            <p className="sub-content">
              {" "}
              So. Instead here at EOG I'm going to ask you to take an existing
              project and add a feature to it; We do a lot of visualizations of
              real time data, so that's what I'm going to ask you to do. We use
              react, redux, redux-saga and material-ui, so I'm going to ask you
              to do that as well.
            </p>
            <p className="sub-content">
              {" "}
              But you can take your time -- you can use the internet. You can
              learn about GraphQL if you have not used that before. It should
              take a couple of hours -- and I hope it is fun. And you will get
              an idea of what type of work you will do here.{" "}
            </p>
            <p className="sub-content">
              Your mission, dear developer, is to create a working dashboard
              which visualizes the real time and historical values of a
              hypothetical set of equipment in the field. The equipment
              publishes its data every 1.3 seconds.
            </p>
            <p className="sub-content">
              BTW: historical means "charting" the last 30 minutes of data, and
              realtime means displaying it prominently. (So one could scan the
              page and see the current value).
            </p>
            <p className="sub-content">
              Using our starter kit code, you should be able to get up to speed
              quickly.
            </p>
            <p className="sub-content">
              Live examples are linked in the drawer to the left. Thanks! And
              have fun!
            </p>
            <p>- jwo</p>
            <Popup
              content="Hello Myself Jwo and I am ceo of this product"
              key="jwo"
              header="Jwo"
              trigger={
                <Image
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/avatar-2445718-2063954.png"
                  avatar
                  size={{ width: "5em", height: "5em" }}
                />
              }
            />
            <p>Jesse Wolgamott</p>
          </div>
        </Card>
        <Button attached="bottom" color="black">
          Get Started
        </Button>
      </div>
    </>
  );
};

export default welcome;
