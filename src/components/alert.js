import React from "react";

const alertText = type => {
  let text = "";
  switch (type) {
    case "Incorrect Information":
      text ="Please confirm that your email address is formatted properly and all fields are filled in.";
      break;
    case "Email Sent":
      text = "Thank you for reaching out, I will reply shortly.";
      break;
  }
  window.scrollTo(0, 0);
  return text;
};

const Alert = props => {
  return <div className="alert alert-danger">{alertText(props.alert)}</div>;
};

export default Alert;
