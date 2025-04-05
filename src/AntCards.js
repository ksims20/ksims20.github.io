import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const AntCards = () => (
  <div style={{ display: "grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap: "20px", padding:"15px" }}>
   
   <Card
      hoverable
      className="card-hover"
      style={{ width: "100%"}}
      cover={<img alt="Budgetly" src={`${process.env.PUBLIC_URL}/BudgetlyMockUp.png`} />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Budgetly (In Progress!)"
        description={
          <>
            <p><strong style={{ color: "red", fontWeight: "bold" }} >Problem:</strong>  Many people struggle to track their spending and stay within their budget.</p>
            <p><strong style={{ color: "green", fontWeight: "bold" }}>Solution:</strong> Budgetly helps users easily track expenses, set budget goals, and receive alerts to stay on top of 
            their finances.</p>
          </>
        }
      />
      <br></br>
      <a
      style={{fontSize:"18px"}}
        href="https://github.com/ksims20/Budgetly"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link{" "}
      </a>
    </Card>
   
    <Card
      hoverable
      className="card-hover"
      style={{ width: "100%"}}
      cover={
        <video controls src={`${process.env.PUBLIC_URL}/AlbersDemoFinal.mp4`} style={{ width: '100%', height: '100%'}} 
        />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Albers Project"
        description={
          <>
            <p  ><strong style={{ color: "red", fontWeight: "bold" }} >Problem:</strong>  Recreating the geometric patterns and abstract art of Josef Albers using only HTML and 
            CSS without the use of images or advanced techniques.</p>
            <p><strong style={{ color: "green", fontWeight: "bold" }}>Solution:</strong> Utilized CSS Grid and Flexbox to create the layout, with each shape and color 
            defined using pure CSS properties.</p>
          </>
        }
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
      className="card-hover"
      style={{ width: "100%" }}
      cover={
        <video controls src={`${process.env.PUBLIC_URL}/PongDemoFinal.mp4`} style={{ width: '100%', height: '100%'}} 
        />}
    >
      <Meta
      style={{fontSize:"18px" , color: "black"}}
        title="Pong"
        description={
          <>
            <p><strong style={{ color: "red", fontWeight: "bold" }}>Problem:</strong> Create a two-player Pong game that operates with no AI, 
            but provides a challenge with two human-controlled paddles.</p>
            <p ><strong style={{ color: "green", fontWeight: "bold" }}>Solution:</strong> Developed the game in Processing IDE, using basic physics to handle paddle movement and ball bouncing. 
            The game was designed to be played with two players on the same device.</p>
          </>
        }
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
      className="card-hover"
      style={{ width: "100%" }}
      cover={
        <video controls src={`${process.env.PUBLIC_URL}/FinalDemoAirplaneGame.mp4`} style={{ width: '100%', height: '100%'}} 
        />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Baby on a Plane Simulator"
        description={
          <>
            <p><strong style={{ color: "red", fontWeight: "bold" }}>Problem:</strong> Design a fun and interactive simulation game that mimics the stressful situation of sitting next to a crying baby
             on a plane with different responses based on user input.</p>
            <p><strong style={{ color: "green", fontWeight: "bold" }}>Solution:</strong> Created the game with three possible endings depending on how the player chooses to respond to the 
            crying baby, using JavaScript and HTML5 for the game logic.</p>
          </>
        }
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
      className="card-hover"
      style={{ width: "100%" }}
      cover={
        <video controls src={`${process.env.PUBLIC_URL}/CooklyLiveDemo.mp4`} style={{ width: '100%', height: '100%'}} 
        />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Cookly"
        description={
          <>
            <p><strong style={{ color: "red", fontWeight: "bold" }}>Problem:</strong> Develop a recipe website that allows users to browse and save recipes using theMealDB API, 
            with authentication for saving favorites.</p>
            <p><strong style={{ color: "green", fontWeight: "bold" }}>Solution:</strong> Built the website using React, integrated Firebase for authentication, and fetched recipes from theMealDB API.
             The site was originally created with HTML/CSS but later converted to React for better interactivity.</p>
          </>
        }
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
      className="card-hover"
      style={{ width: "100%" }}
      cover={
        <video controls src={`${process.env.PUBLIC_URL}/SRIDemo.mp4`} style={{ width: '100%', height: '100%'}} 
        />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="SRI Project"
        description={
          <>
            <p><strong style={{ color: "red", fontWeight: "bold" }}>Problem:</strong> Create a website that informs users about a current world topic, while providing an engaging 
            and interactive experience through a slideshow and background video.</p>
            <p><strong style={{ color: "green", fontWeight: "bold" }}>Solution:</strong> Designed a one-page website with HTML, CSS, and JavaScript that features a clickable slideshow, 
            each slide containing a background video and resource links.</p>
          </>
        }
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
      className="card-hover"
      style={{ width: "100%" }}
      cover={
      <video controls src={`${process.env.PUBLIC_URL}/KamrenCommunicativeDesign.mp4`} style={{ width: '100%', height: '100%'}} 
      />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="Communicative Design AfterEffects"
        description={
          <>
            <p><strong style={{ color: "red", fontWeight: "bold" }}>Problem:</strong> Create a communicative design animation that conveys a clear message through visual storytelling.</p>
            <p><strong style={{ color: "green", fontWeight: "bold" }}>Solution:</strong> Utilized Adobe After Effects to create an animated design that communicates an idea effectively, 
            focusing on motion graphics and visual composition.</p>
          </>
        }
      />
      <p>Video project — No GitHub link available.</p>
    <br></br>
    </Card>

    <Card
      hoverable
      className="card-hover"
      style={{ width: "100%" }}
      cover={
      <video controls src={`${process.env.PUBLIC_URL}/TimeLapse.mp4`} style={{ width: '100%', height: '100%'}} 
      />}
    >
      <Meta
      style={{fontSize:"18px"}}
        title="TimeLapse AfterEffects"
        description={
          <>
            <p ><strong style={{ color: "red", fontWeight: "bold" }}>Problem:</strong>Produce a time-lapse video showing local areas with a creative twist.</p>
            <p><strong style={{ color: "green", fontWeight: "bold" }}>Solution:</strong> Captured time-lapse footage of various locations around Concord/Charlotte and edited the video using 
            Adobe After Effects, adding creative effects for visual impact.</p>
          </>
        }
      />
    <p>Video project — No GitHub link available.</p>
    <br></br>
    </Card>

    

  </div>
);

export default AntCards;
