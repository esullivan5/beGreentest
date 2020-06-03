import React, { Component } from "react";
import axios from "axios";
import "./pages.css";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import Header from "../components/Header";

class Login extends Component {
  state = {
    email: "",
    password: "",
    login: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    var userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("send login userdata:", userData);

    const response = await axios.post("/api/users/checkuser", userData);
    const { status, message } = response.data;
    console.log({ status, message });

    if (status === "ok") {
      this.setState({ login: true });
    }

    // axios call to the route
    // if (!userData.email || !userData.password) {
    //     return;
    //   }
    // If we have an email and password, run the signUpUser function
    //  signUpUser(userData.email, userData.password);
  };

  render() {
    if (this.state.login === true) return <Redirect to="/mainpage"></Redirect>;

    return (
      <div>
        <div className="container center">
          <div
            className="card has-text-centered is-wide card-content"
            id="loginbox"
          >
            <h1 className="go-green">Be Green</h1>

            <Header />

            <form className="login animated fadeIn delay-0.5s">
              <div className="field">
                Login
                <p className="control has-icons-left has-icons-right">
                  <input
                    id="einput"
                    onChange={this.handleChange}
                    value={this.state.email}
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    id="pinput"
                    onChange={this.handleChange}
                    value={this.state.password}
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button
                    className="button is-info is-light"
                    onClick={this.handleSubmit}
                  >
                    Login
                  </button>
                </p>
              </div>
              <p>
                Or Signup <a href="/register">here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
