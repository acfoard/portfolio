import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import LandingPage from "./components/landingPage";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import { MDBContainer, MDBRow } from "mdbreact";

function App() {
  return (
    <MDBContainer>
      <BrowserRouter>
        <div>
          <MDBRow>
            <Header />
          </MDBRow>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    </MDBContainer>
  );
}

export default App;
