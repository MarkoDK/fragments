import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import ResumeIntroduction from './components/resumeIntroduction/resumeIntroduction.component';
import VideoGame from './components/videoGame/videoGame.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemeClashBlog from './components/scrollOfDeconstruction/blogs/memeClashBlog/memeClashBlog.component';
import ScrollOfDeconstruction from './../src/components/scrollOfDeconstruction/blogList/scrollOfDeconstruction.component'
import SurroundingsBlog from './components/scrollOfDeconstruction/blogs/surroundingsBlog/surroundingsBlog.component'
import BloodborneBlog from './components/scrollOfDeconstruction/blogs/bloodborneBlog/bloodborneBlog.component';
import NordeusChallenge from './components/scrollOfDeconstruction/blogs/nordeusChallengeBlog/nordeusChallenge.component'
import FinalBattleBlog from './components/scrollOfDeconstruction/blogs/finalBattleBlog/finalBattle.component';
import RNGinGameDesign from './components/scrollOfDeconstruction/articles/RNG-game-design/RNGinGameDesign.component';


const App = () => {
    return (
        <div>
            <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<ResumeIntroduction />} />
                <Route path="/VideoGame" element={<VideoGame />} />
                <Route path="/ScrollOfDeconstruction" element={<ScrollOfDeconstruction />}/>
                <Route path="/MemeClashBlog" element={<MemeClashBlog />}/>
                <Route path="/SurroundingsBlog" element={<SurroundingsBlog />}/>
                <Route path="/Bloodborne" element={<BloodborneBlog />}/>
                <Route path="/NordeusChallenge" element={<NordeusChallenge />}/>
                <Route path="/FinalBattle" element={<FinalBattleBlog />}/>
                <Route path="/RNGinGameDesign" element={<RNGinGameDesign />}/>
            </Routes>

            </Router>
        </div>
    );
};

export default App;