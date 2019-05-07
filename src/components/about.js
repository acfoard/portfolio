import React from "react";
import { MDBMedia } from "mdbreact";
import Profile from '../assets/Profile.jpg';


const About = props => {
  return (
    <MDBMedia>
      <MDBMedia left className="mr-3">
        <img
          src={Profile}
          className="img-fluid profile-img"
          alt=""
        />
      </MDBMedia>
      <MDBMedia body>
        <MDBMedia heading>About Andrew</MDBMedia>
        <p>
          Andrew was born and raised in Richmond, VA and spent his formative
          years riding his bicycle with his friends in search of mischief and
          mud puddles. Once mud puddles lost their appeal and high school was
          completed, he moved to Statesboro, GA to attend Georgia Southern
          University where he graduated with a BBA in Marketing. Following
          college Andrew took up residence in the suburbs of northern Atlanta,
          settling down in Woodstock with his wife, three chidren, two dogs and
          a cat.
        </p>
        <p>
          Over the last decade Andrew has worked as a business analyst on
          varying software development projects. As a natural progression to his
          career he has taken on the title of developer.
        </p>
        <p>
          In his spare time Andrew enjoys playing hockey, mountain biking, and
          undertaking massive lego projects with his kids. Andrew also finds
          enjoyment in introducing his children to pop-culture of the 1980's and
          90's. His children have taken to the Teenage Mutant Ninja Turtles,
          Animaniacs, Ghostbusters, Ozzy Osbourne and the Beastie Boys but have
          resisted Thundercats, He-man and Right Said Fred. And although only
          one will admit it, all three children once had an affinity for "Barbie
          Girl" by Aqua.
        </p>
        <p>
          Lastly, Andrew loves to travel. He has been fortunate enough to
          experience scuba diving on the Great Barrier Reef, jumping the prime
          meridian in Greenwich, United Kingdom and grocery shopping in Boliver,
          Missouri.
        </p>
      </MDBMedia>
    </MDBMedia>
  );
};

export default About;
