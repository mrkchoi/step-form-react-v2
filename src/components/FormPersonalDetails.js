import React from "react";
// import "semantic-ui-css/semantic.min.css";
import { Menu, Form, Button } from "semantic-ui-react";

class FormPersonalDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Menu>
          <Menu.Item header>Multi-step form</Menu.Item>
          <Menu.Item header>Please enter your personal details</Menu.Item>
        </Menu>
        <Form>
          <Form.Field>
            <label>Occupation</label>
            <input
              placeholder="Enter your occupation"
              onChange={handleChange("occupation")}
              value={values.occupation}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="Enter your city"
              onChange={handleChange("city")}
              value={values.city}
            />
          </Form.Field>
          <Form.Field>
            <label>Bio</label>
            <input
              placeholder="Please write a short bio about yourself"
              onChange={handleChange("bio")}
              value={values.bio}
            />
          </Form.Field>
          <Button type="submit" onClick={this.continue}>
            Continue
          </Button>
          <Button basic type="submit" onClick={this.back}>
            Back
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
