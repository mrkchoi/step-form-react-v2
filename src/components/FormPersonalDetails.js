import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Form, Button } from "semantic-ui-react";

class FormPersonalDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item header>Multi-step form</Menu.Item>
        </Menu>
        <Form>
          <Form.Field>
            <label>Occupation</label>
            <input placeholder="Enter your occupation" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="Enter your city" />
          </Form.Field>
          <Form.Field>
            <label>Bio</label>
            <input placeholder="Please write a short bio about yourself" />
          </Form.Field>
          <Button type="submit">Continue</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
