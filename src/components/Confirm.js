import React from "react";
import { Menu, List, Button } from "semantic-ui-react";

class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item header>Multi-step form</Menu.Item>
          <Menu.Item header>Please confirm your information</Menu.Item>
        </Menu>
        <List divided relaxed>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>
              <List.Header>First Name</List.Header>
              <List.Description>{firstName}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>
              <List.Header>Last Name</List.Header>
              <List.Description>{lastName}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>
              <List.Header>Email</List.Header>
              <List.Description>{email}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>
              <List.Header>Occupation</List.Header>
              <List.Description>{occupation}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>
              <List.Header>City</List.Header>
              <List.Description>{city}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>
              <List.Header>Bio</List.Header>
              <List.Description>{bio}</List.Description>
            </List.Content>
          </List.Item>
        </List>
        <Button type="submit" onClick={this.continue}>
          Submit
        </Button>
        <Button basic type="submit" onClick={this.back}>
          Back
        </Button>
      </React.Fragment>
    );
  }
}

export default Confirm;
