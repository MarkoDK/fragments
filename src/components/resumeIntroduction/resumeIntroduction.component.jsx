import React from "react";
import "./resumeIntroduction.css";

const ResumeIntroduction = () => {
  return (
    <div className="container">
      <div className="intro-card">
        <h2 className="intro-title">Tutorial & Welcome to my CV!</h2>
        <h3 className="intro-subtitle">
          Explanation of idea and how does it work
        </h3>
        <p className="intro-text">
          Inspired by your short video game where you, Nordeus, explained the
          whole process of interview steps with it, I decided to try to do
          something similar by myself. I wanted to showcase my experience with
          Game Design through a video game. In order to access the full
          walkthrough of the video game, you can swap the tab in upper
          navigation to "Video Game", or you can access it directly on this
          YouTube link:
          <a
            href="https://youtu.be/j5wuqTrRqVU"
            className="yt-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://youtu.be/j5wuqTrRqVU
          </a>
          (Make sure to increase quality!)
        </p>

        <h3 className="intro-subtitle">Tab "Video Game", what is it?</h3>
        <p className="intro-text">
          Video game is called{" "}
          <span className="yt-link">Fragments of Memory</span>, and the goal of
          the game is to collect all Fragments of Memory to uncover your past
          and all your connection with Game Design. As a adventurer Marko, you
          will travel to 4 different past realms, each having the challenges and
          mechanics that are connected to your experiences with Game Design. For
          example, Level 1 is Football realm, this will uncover your experience
          with Football Games, and maybe something more.. After successfully
          collecting all 4 Fragments (Football, RPG, MOBA, MMO), you will end up
          in the Present Realm (Year 2025), where last, and surely the hardest
          challenge awaits..
        </p>
        <h3 className="intro-subtitle">
          *SPOILERS* Tab "Scroll of Deconstruction", what is it? *SPOILERS*
        </h3>
        <p className="intro-text">
          Tab "Scroll of Deconstruction" was planned to be seen after the video
          game since they're connected in a way 😀, but in case you dont have
          the time to check the video game, this tab has the articles about all
          my other gaming projects (personal, some from Game's Jams) and
          similar. Apart from video game projects, there are also articles
          connected to Game Design.
        </p>
      </div>
    </div>
  );
};

export default ResumeIntroduction;
