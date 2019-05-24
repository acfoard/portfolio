import React from "react";
import Bamazon from "../assets/bamazon.jpg";
import Dbq from "../assets/dbq.jpg";
import Employee from "../assets/employee.jpg";
import Hotdog from "../assets/hotdog.png";
import Smartify from "../assets/smartify.jpg";
import Stock from "../assets/stock.jpg";
import Tiny from "../assets/tiny.jpg";
import { MDBIcon, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Portfolio extends React.Component {
  state = {
    projects: [
      {
        name: "Doodle Bug Quest",
        image: Dbq,
        url: "https://www.doodlebugquest.com",
        git: "https://github.com/nolannick/Doodle-Bug-Quest",
        description: "Doodle Bug Quest is a new take on the ol' To-Do list. Designed as a kid-friendly, family oriented app, each family can set up their own set of to-dos and rewards."
      },
      {
        name: "SMARTify",
        image: Smartify,
        url: "https://acfoard.github.io/smartify/",
        git: "https://github.com/acfoard/smartify",
        description: "SMARTify is an app that modifies words. Entered sentences get deconstructed, the verbs and adjectives run through a thesaurus and a SMARTified version of the sentence is returned."
      },
      {
        name: "Hotdog Spaceship",
        image: Hotdog,
        url: "https://tranquil-shelf-47089.herokuapp.com/",
        git: "https://github.com/acfoard/hotdogspaceship",
        description: "Hotdog Spaceship is a hub for online gaming. Users create accounts where they can rate and comment on games along with the app tracking the user's scores."
      },
      {
        name: "Tiny Improvements",
        image: Tiny,
        url: "https://cryptic-lake-59302.herokuapp.com/",
        git: "https://github.com/acfoard/tinyImprovements",
        description: "Tiny Improvements is a message board where users can send and receive Kudos. The board re-renders after each Kudo sent."
      },
      {
        name: "Employee Matcher",
        image: Employee,
        url: "https://nameless-hollows-80143.herokuapp.com/",
        git: "https://github.com/acfoard/EmployeeMatcher",
        description: "Take a survey, find the current employee who most closely matches your responses, become BFFs."
      },
      {
        name: "Bamazon",
        image: Bamazon,
        url: "https://murmuring-hollows-16045.herokuapp.com/",
        git: "https://github.com/acfoard/bamazon",
        description: "Bamazon is a fake online store that tracks inventory across a dozen or so items."
      },
      {
        name: "Stock Tracker",
        image: Stock,
        url: "https://acfoard.github.io/Stock_Tracker/",
        git: "https://github.com/acfoard/Stock_Tracker",
        description: "The Stock Tracker pulls up the latest price and news for a preset group of stocks. Users can add any stock they wish to the list."
      }
    ]
  };
  render() {
    const projectList = this.state.projects;
    return (
      <MDBRow>
        {projectList.map(project => 
        <MDBCol size="6" >
          <MDBCard style={{ width: 'auto',maxWidth: "25rem" }} className='projectCard'>
            <MDBCardImage className="img-fluid" src={project.image} waves />
            <MDBCardBody>
              <MDBCardTitle>{project.name}</MDBCardTitle>
              <MDBCardText>{project.description}</MDBCardText>
              <MDBBtn href={project.url} target='blank'><MDBIcon icon="globe-americas" /> Site</MDBBtn>
              <MDBBtn href={project.git} target='blank'><MDBIcon icon="code" /> Code</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        )}
      </MDBRow>
    );
  }
}

export default Portfolio;
