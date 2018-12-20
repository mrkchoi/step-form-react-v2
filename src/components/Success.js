import React from "react";
import { Menu, Header } from "semantic-ui-react";

class Success extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item header>Multi-step form</Menu.Item>
          <Menu.Item header>Success!</Menu.Item>
        </Menu>
        <Header textAlign="center" as="h4">
          Thank you for submitting your information.
        </Header>
      </React.Fragment>
    );
  }
}

export default Success;
