import React from "react";
import { Header, Card, List } from "semantic-ui-react";
import SideBarHeader from "../Header/SideBarHeader";
const Submit = () => {
  return (
    <>
    <SideBarHeader />
    <div className="main">
      <Card fluid style={{ margin: "20px" }}>
        <Header as="h1" attached="top" inverted size="massive">
          How to Submit
        </Header>

        <List size="big">
          <List.Header
            style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              letterSpacing: 1.2,
              padding: "10px",
            }}
          >
            Awesome!
          </List.Header>

          <List.Item>
            <List.Icon name="chart bar outline" verticalAlign="middle" />
            <List.Content>
              <List.Content>Publish your project on GitHub, BitBucket, or GitLab.</List.Content>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="chart bar outline" verticalAlign="middle" />
            <List.Content>
              <List.Content>Email your recruiter the link to the source code </List.Content>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="area graph" verticalAlign="middle" className="ListIcon"></List.Icon>
            <List.Content>
              <List.Content>That's it! We'll review and get feedback or schedule a final interview!</List.Content>
            </List.Content>
          </List.Item>
        </List>
      </Card>
    </div>
    </>
  );
};

export default Submit;
