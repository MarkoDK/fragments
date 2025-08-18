import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Navigation + Pages
import NavigationBar from "./navigation/NavigationBar";
import ResumeIntroduction from "./components/resumeIntroduction/resumeIntroduction.component";
import VideoGame from "./components/videoGame/videoGame.component";
import MemeClashBlog from "./components/scrollOfDeconstruction/blogs/memeClashBlog/memeClashBlog.component";
import ScrollOfDeconstruction from "./components/scrollOfDeconstruction/blogList/scrollOfDeconstruction.component";
import SurroundingsBlog from "./components/scrollOfDeconstruction/blogs/surroundingsBlog/surroundingsBlog.component";
import BloodborneBlog from "./components/scrollOfDeconstruction/blogs/bloodborneBlog/bloodborneBlog.component";
import NordeusChallenge from "./components/scrollOfDeconstruction/blogs/nordeusChallengeBlog/nordeusChallenge.component";
import FinalBattleBlog from "./components/scrollOfDeconstruction/blogs/finalBattleBlog/finalBattle.component";
import RNGinGameDesign from "./components/scrollOfDeconstruction/articles/RNG-game-design/RNGinGameDesign.component";
import SeasonControlByMultipliers from "./components/scrollOfDeconstruction/articles/SeasonControlByMultipliers/SeasonControlByMultipliers.component";
import LiveOps from "./components/scrollOfDeconstruction/articles/LiveOps/LiveOps.component";

// 🎨 Global theme (lock sizes in px)
const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14, // default for body1 (px)
    h1: { fontSize: "32px", fontWeight: 700 },
    h2: { fontSize: "28px", fontWeight: 600 },
    h3: { fontSize: "24px", fontWeight: 600 },
    h4: { fontSize: "20px", fontWeight: 500 },
    h5: { fontSize: "14px", fontWeight: 500 },
    h6: { fontSize: "14px", fontWeight: 500 },
    body1: { fontSize: "14px" },
    body2: { fontSize: "14px" },
    subtitle1: { fontSize: "13px" },
    subtitle2: { fontSize: "11px" },
    button: { fontSize: "14px", textTransform: "none" },
    caption: { fontSize: "11px" },
    overline: { fontSize: "10px" },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* 🔑 ensures consistent rendering everywhere */}
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ResumeIntroduction />} />
          <Route path="/VideoGame" element={<VideoGame />} />
          <Route path="/ScrollOfDeconstruction" element={<ScrollOfDeconstruction />} />
          <Route path="/MemeClashBlog" element={<MemeClashBlog />} />
          <Route path="/SurroundingsBlog" element={<SurroundingsBlog />} />
          <Route path="/Bloodborne" element={<BloodborneBlog />} />
          <Route path="/NordeusChallenge" element={<NordeusChallenge />} />
          <Route path="/FinalBattle" element={<FinalBattleBlog />} />
          <Route path="/RNGinGameDesign" element={<RNGinGameDesign />} />
          <Route path="/SeasonControlByMultipliers" element={<SeasonControlByMultipliers />} />
          <Route path="/LiveOps" element={<LiveOps />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
