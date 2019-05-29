import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBCol
} from "mdbreact";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBCol>
        <MDBNavbar color="light-blue darken-3" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Andrew Foard</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/about">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">Contact</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem className="headerIcon">
                <MDBNavLink to="#">
                  <a
                    href="https://linkedin.com/in/andrewcfoard"
                    className="waves-effect waves-light"
                    target="blank"
                  >
                    <MDBIcon fab icon="linkedin" />
                  </a>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="headerIcon">
                <MDBNavLink to="#">
                  <a
                    href="https://www.github.com/acfoard"
                    className="waves-effect waves-light"
                    target="blank"
                  >
                    <MDBIcon fab icon="github" />
                  </a>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBCol>
    );
  }
}

export default Header;
