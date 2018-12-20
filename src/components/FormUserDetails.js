import React from "react";
// import "semantic-ui-css/semantic.min.css";
import { Menu, Form, Button } from "semantic-ui-react";

class FormUserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { handleChange, values } = this.props;
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item header>Multi-step form</Menu.Item>
          <Menu.Item header>Please enter your user details</Menu.Item>
        </Menu>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              onChange={handleChange("firstName")}
              value={values.firstName}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              onChange={handleChange("lastName")}
              value={values.lastName}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={handleChange("email")}
              value={values.email}
            />
          </Form.Field>
          <Button type="submit" onClick={this.continue}>
            Continue
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
