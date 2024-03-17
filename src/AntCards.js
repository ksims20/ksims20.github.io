import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const AntCards = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "100px", padding:"15px" }}>
    <Card
      hoverable
      style={{ width: 400 }}
      cover={<img alt="Albers" src={`${process.env.PUBLIC_URL}/Albers.png`} />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Albers Project"
        description="Fifth project in the HTML design course. Albers was a famous artist, using html/css we recreated some of his artwork."
      />
      <br></br>
      <a
      style={{fontSize:"18px"}}
        href="https://github.com/ksims20/HTML-Albers"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link{" "}
      </a>
    </Card>


    <Card
      hoverable
      style={{ width: 400 }}
      cover={<img alt="Pong" src={`${process.env.PUBLIC_URL}/Pong.png`} />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Pong"
        description="Pong recreation final project using Processing IDE, two user controlled paddles, no A.I."
      />
      <br></br>
      <a
      style={{fontSize:"18px"}}
        href="https://github.com/ksims20/Processing-Pong"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link{" "}
      </a>
    </Card>


    <Card
      hoverable
      style={{ width: 400 }}
      cover={
        <img
          alt="Airplane Game"
          src={`${process.env.PUBLIC_URL}/Airplane.png`}
        />
      }
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Baby on a Plane Simulator"
        description="Built on a team of 3, as an Undergraduate Research project, we created a simulator based on being seated next to a crying baby on a plane.
        There are 3 endings to the game, will you respond Positively, neturally, or Negatively. The choice is your's!"
      />
    <br></br>
    <a
    style={{fontSize:"18px"}}
      href="https://github.com/ksims20/AirplaneTest2"
      target="_blank"
      rel="noopener noreferrer"
    >
      Link{" "}
    </a>
    </Card>

    <Card
      hoverable
      style={{ width: 400 }}
      cover={
        <img
          alt="Cookly"
          src={`${process.env.PUBLIC_URL}/Cookly.png`}
        />
      }
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Cookly"
        description="As apart of my Capstone Project, I built a recipe website that utilizes theMealDB api to fetch recipes. You're able to log-in using Firebase
        and save recipes into your 'favorites.' It was built orginally in html/css but was later converted into React."
      />
    <br></br>
    <a
    style={{fontSize:"18px"}}
      href="https://github.com/ksims20/RecipeWebsite2"
      target="_blank"
      rel="noopener noreferrer"
    >
      Link{" "}
    </a>
    </Card>

    <Card
      hoverable
      style={{ width: 400 }}
      cover={
        <img
          alt="SRI"
          src={`${process.env.PUBLIC_URL}/SRIProject.png`}
        />
      }
    >
      <Meta
      style={{fontSize:"18px"}}
        title="SRI Project"
        description="Another project from my NM 231 Web Design Class. As a final project we were to create a website that touched a current world subject.
        In my project I used html/css/javascript to design a website that scrolls through slides. Each slide features a video that plays in the background
        and link to resoucres."
      />
    <br></br>
    <a
    style={{fontSize:"18px"}}
      href="https://github.com/ksims20/SRI"
      target="_blank"
      rel="noopener noreferrer"
    >
      Link{" "}
    </a>
    </Card>

    <Card
      hoverable
      style={{ width: 400 }}
      cover={
      <video controls src={`${process.env.PUBLIC_URL}/KamrenCommunicativeDesign.mp4`} style={{ width: '100%', height: '100%'}} 
      />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Communicative Design AfterEffects"
        description="Created in my New Media 281 course, I was introduce to Adobe After Effects and got to mess around with this project. The goal for this project
        was for us to create a Communicative Design."
      />
    <br></br>
    </Card>

    <Card
      hoverable
      style={{ width: 400 }}
      cover={
      <video controls src={`${process.env.PUBLIC_URL}/TimeLapseFinal.mp4`} style={{ width: '100%', height: '100%'}} 
      />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="TimeLapse AfterEffects"
        description="Also created in my New Media 281 course, I created a timelapse of areas around the Concord/Charlotte area but with a little twist at the end."
      />
    <br></br>
    </Card>

    

  </div>
);

export default AntCards;
