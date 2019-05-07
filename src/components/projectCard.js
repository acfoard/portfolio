import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Card = props => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage
          className="img-fluid"
          src={props.image}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText>
            {props.description}
          </MDBCardText>
          <MDBBtn href={props.url}>{props.title}</MDBBtn>
          <MDBBtn href={props.git}>See the code</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Card;
