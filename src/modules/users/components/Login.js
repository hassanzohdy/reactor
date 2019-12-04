import "./login.scss";
import React from "react";
import { ReactorPageComponent } from "../../../core/component";
import Input from "../../../core/component/Input";

export default class Login extends ReactorPageComponent {
  constructor() {
    super();

    this.setMeta("title", "Login Page").setMeta(
      "description",
      "Welcome to our login page."
    );
  }

  focus = () => {
    console.log("focused");
  };

  login = e => {
    e.preventDefault(); // disable default form submission

    console.log("Send to some api!");
  };

  render() {
    return (
      <div id="login-page">
        <h1>Login Page</h1>

        <form onSubmit={this.login}>
          {/* it will be validated by default and has the form-control class and wrapped by form-group */}
          <div className="form-group">
            <Input
              type="email"
              required={true}
              placeholder="Email Address"
              minLength={5}
              maxLength={10}
            //   length={23}
              min={3}
              validationMessages={{
                empty: "Empty !",
                email: "Not Email !",
                lengthMessage: "length is not matched",
                "minValueMessage": "You should pass 3 as the minimum",
                "maxValueMessage": "You should pass 10 as the maximum",
                "minLengthMessage": "minimum length required is 5",
                "maxLengthMessage": "maximum length required is 10"
              }}
              errorPosition="bottom"
              onInput={this.focus}
            />
          </div>

          <div className="form-group">
            <Input
              type="password"
              required={true}
              placeholder="Password"
              length={4}
            />
          </div>

          <div id="button-wrapper">
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}
