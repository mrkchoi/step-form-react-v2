import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserForm from "./components/UserForm";
import "semantic-ui-css/semantic.min.css";

export class App extends Component {
  render() {
    return (
      <div className="ui container">
        <UserForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
