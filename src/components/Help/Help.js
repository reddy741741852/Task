import React from "react";
import { Header, Card, List } from "semantic-ui-react";
import SideBarHeader from "../Header/SideBarHeader";

const Help = () => {
  return (
    <>
      <SideBarHeader />
      <div className="main">
        {" "}
        <Card fluid style={{ margin: "20px" }}>
          <Header as="h1" attached="top" inverted size="massive">
            Helpful Links and libraries
          </Header>

          <List size="big">
            <List.Item>
              <List.Icon name="star" verticalAlign="middle" />
              <List.Content>
                <List.Content>Material-UI</List.Content>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="chart bar outline" verticalAlign="middle" />
              <List.Content>
                <List.Content>React Charting : Recharts</List.Content>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="chart bar outline" verticalAlign="middle" />
              <List.Content>
                <List.Content>React Charting : Plotly for react</List.Content>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="area graph" verticalAlign="middle" />
              <List.Content>
                <List.Content>Intro to GraphQl APIs</List.Content>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="sitemap" verticalAlign="middle" />
              <List.Content>
                <List.Content>Intro to React Hooks</List.Content>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="code" verticalAlign="middle" />
              <List.Content>
                <List.Content>Apollo to GraphQL Library</List.Content>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name="code" verticalAlign="middle" />
              <List.Content>
                <List.Content>Urql graph Library</List.Content>
              </List.Content>
            </List.Item>
          </List>
        </Card>
      </div>
    </>
  );
};

export default Help;
