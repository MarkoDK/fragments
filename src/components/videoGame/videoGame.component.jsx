import React from "react";
import BackgroundStars from "../scrollOfDeconstruction/blogList/BackgroundStars.jpg";

const VideoGame = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          height: "100vh",
          boxSizing: "border-box",

          backgroundImage: `url(${BackgroundStars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            width: "75%",
            maxHeight: "90%",
          }}
        >
          <div style={{ boxShadow: "0 0 20px 0 rgba(48, 50, 55, 0.8",
              backgroundColor: "#303237" ,border: "2px solid black", display: "flex", borderRadius: "10px", justifyContent: "center", backgroundColor: "#23252b", marginBottom: "5px", marginTop: "10px", height: "50px"}}>
          <h4 style={{ color: "#f1b400", alignItems: "center", display: "flex",}}>The gameplay footage uses Youtube as source, so make sure to increase Quality, Fullscreen it & increase speed if you wish! Thanks for watching & enjoy!</h4>
          </div>
          <iframe
            width="100%"
            height="800px"
            src="https://www.youtube.com/embed/Eruq6SVZbdg"
            title="Gameplay Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              boxShadow: "0 0 20px 0 rgba(48, 50, 55, 0.8)",
              backgroundColor: "#303237",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoGame;