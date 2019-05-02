import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import { MDBContainer } from "mdbreact";

function App() {
  return (
    <MDBContainer>
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    </MDBContainer>
  );
}

export default App;
