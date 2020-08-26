import React from "react";
import { Segment, Header, Message, Icon, Card, List } from "semantic-ui-react";
import "./Asess.css";
import SideBarHeader from "../Header/SideBarHeader";
const HowAssess = () => {
  return (
    <>
      <SideBarHeader />
      <div style={{ margin: "20px" }} className="main">
        <Card fluid>
          <Header as="h1" attached="top" inverted size="massive">
            How We Assessment Submissions
          </Header>
          <List.Header className="list-header">
            This is a creative assignment, with no specific right or wrong
            answer. How will we grade it? Here's what we'll look for.
          </List.Header>
          <List size="big">
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>Metric List and Values</List.Content>
                <List.Description>
                  You can select metrics, it loads from the API. When selected,
                  the values auto update
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>
                  Charting behaves like you would expect
                </List.Content>
                <List.Description>
                  Good y axis scaling, has an info hover box with values. Looks
                  nice
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>Good Git/GitHub Practices</List.Content>
                <List.Description>
                  Don't file Upload with 1 commit. Do have good commit messages.
                </List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>
                  You use and run our getting started code
                </List.Content>
                <List.Description>Some peope don't. ¯</List.Description>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>Coding Standards</List.Content>
                <List.Description as="a">
                  Use AirBNB style with ES6/7/2015 features
                </List.Description>
              </List.Content>
            </List.Item>
          </List>

          <List.Description className="DescriptionHeading">
            Bonus
          </List.Description>

          <List size="big">
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>Use React Hooks</List.Content>
                <List.Description>Shows you stay current</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>Runs free of console warnings</List.Content>
                <List.Description>
                  If React is warning you of something, you should fix it.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>Handling Errors</List.Content>
                <List.Description>
                  Reconnect websockets, toast an error if received.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content>Use Redux</List.Content>
                <List.Description>Store your values in redux.</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                <List.Content> Use Prettier</List.Content>
                <List.Description as="a">
                  We use prettier to auto format code and so should you :)
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                GraphQL Subscriptions
                <List.Content> </List.Content>
                <List.Description as="a">
                  Spending the time to subscribe to updates, instead of polling
                  is 100
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                TypeScript
                <List.Content> </List.Content>
                <List.Description as="a">
                  Not all of our projects use typescript, but some do. If you
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" size="large" />
              <List.Content>
                Creativity
                <List.Content> </List.Content>
                <List.Description as="a">
                  Design choices? Something super cool? A++
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Card>
      </div>
    </>
  );
};

export default HowAssess;

//   {/* <Message size="large"> */}
//   {/* <Segment attached padded> */}
//   {/* This is a creative assignment, with no specific right or wrong answer.
//     How will we grade it? Here's what we'll look for. */}
//   {/* </Segment> */}
//   {/* <Icon name="star" loading />
//     <Message.List>
//       <Icon name="star"  />
//       <Message.Item>Metric List and Values</Message.Item>
//       <Message.Item>Charting behaves like you would expect</Message.Item>
//     </Message.List> */}
//   {/* <Icon name="circle notched" loading />
//     <Message.Content>
//       <Message.Header>Just one second</Message.Header>
//       We are fetching that content for you.
//     </Message.Content> */}
//   {/* </Message> */}
