import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import about from "../assets/about.jpg";
import portfolio from "../assets/portfolio.jpg";
import contact from "../assets/contact.jpg";
import { Link } from "react-router-dom";

const LandingPage = props => {
  return (
    <MDBRow>
      <MDBCol>
        <div className="landingDiv aboutDiv">
          <img src={about} alt="" class="landingImg" />
          <Link to={"/about"}>
            <h3>About Andrew</h3>
          </Link>
        </div>
        <div className="landingDiv portfolioDiv">
          <img src={portfolio} alt="" class="landingImg" />
          <Link to={"/portfolio"}>
            <h3>Andrew's Portfolio</h3>
          </Link>
        </div>
        <div className="landingDiv contactDiv">
          <img src={contact} alt="" class="landingImg" />
          <Link to={"/contact"}>
            <h3>Contact Andrew</h3>
          </Link>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default LandingPage;
