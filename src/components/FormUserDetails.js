import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Form, Button } from "semantic-ui-react";

class FormUserDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item header>Multi-step form</Menu.Item>
        </Menu>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Button type="submit">Continue</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
