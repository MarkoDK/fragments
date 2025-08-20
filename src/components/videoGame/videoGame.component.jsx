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
    minHeight: "100vh",   // ✅ fills at least screen height, grows with content
    boxSizing: "border-box",
    paddingTop: "70px",
    backgroundImage: `url(${BackgroundStars})`,
    backgroundSize: "cover",        // stretch background
    backgroundPosition: "center",
    backgroundRepeat: "repeat-y",   // ✅ repeat vertically
  }}
>
        <div
          style={{
            width: "75%",
            maxHeight: "90%",
          }}
        >
        <div
  style={{
    boxShadow: "0 0 20px 0 rgba(48, 50, 55, 0.8)",
    backgroundColor: "#23252b",
    border: "2px solid black",
    display: "flex",
    borderRadius: "10px",
    justifyContent: "center",
    padding: "10px 15px",
    marginBottom: "5px",
    marginTop: "30px",
    maxWidth: "100%",
  }}
>
  <h4
    style={{
      color: "#f1b400",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      fontSize: "0.95rem",
      lineHeight: "1.4rem",
      textAlign: "center",
      margin: 0,
    }}
  >
    If you want to just check out the Main Story Fragments and skip the
    showcase of Dialogs / Mechanics / Puzzles / Progression, the timestamps are:
    @3:24 & @5:24, @11:44, @15:54, @20:21, and from @22:00/22:37 till the very end.

    Thank you!
  </h4>
</div>

          <iframe
            width="100%"
            height="750px"
            src="https://www.youtube.com/embed/j5wuqTrRqVU"
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
