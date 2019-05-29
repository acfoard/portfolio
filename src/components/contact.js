import React from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import * as emailjs from "emailjs-com";
import Alert from "./alert";
const isEmail = require("sane-email-validation");

class Contact extends React.Component {
  state = {
    fromEmail: "",
    fromName: "",
    message: "",
    alert: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateEmail = () => {
    let email = false;
    if (isEmail(this.state.fromEmail)) {
      email = true;
      return email;
    } else {
      return email;
    }
  };

  validateInput = () => {
    let isValid = false;
    let validEmail = this.validateEmail();
    if (validEmail && this.state.fromName && this.state.message) {
      isValid = true;
      return isValid;
    } else {
      return isValid;
    }
  };

  sendEmail = e => {
    e.preventDefault();
    const valid = this.validateInput();
    if (valid) {
      const mailOptions = {
        fromName: this.state.fromName,
        fromEmail: this.state.fromEmail,
        message: this.state.message
      };
      emailjs
        .send("gmail", "formsubmit", mailOptions, "user_PvABvsjAlINaXR5B8G5A4")
        .then(
          status => {
            console.log("Success", status.status, status.text);
            this.setState({
              alert: "Email Sent",
              message: "",
              fromEmail: "",
              fromName: ""
            });
          },
          function(error) {
            console.log("Error:", error);
          }
        );
    } else {
      this.setState({
        alert: "Incorrect Information"
      });
    }
  };

  render() {
    return (
      <MDBRow>
        <MDBCol>
          <h2>Contact Andrew</h2>
          <br />
          {this.state.alert && <Alert alert={this.state.alert} />}
          <MDBInput
            label="Your Name"
            icon="user"
            name="fromName"
            onChange={this.changeHandler}
            value={this.state.fromName}
          />
          <MDBInput
            label="Your E-mail address"
            icon="envelope"
            name="fromEmail"
            onChange={this.changeHandler}
            value={this.state.fromEmail}
          />
          <MDBInput
            type="textarea"
            label="Message"
            icon="comment"
            name="message"
            onChange={this.changeHandler}
            value={this.state.message}
          />
          <br />
          <MDBBtn color="primary" name="sendEmail" onClick={this.sendEmail}>
            Submit
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default Contact;
