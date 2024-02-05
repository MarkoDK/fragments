import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import ResumeIntroduction from './components/resumeIntroduction/resumeIntroduction.component';
import VideoGame from './components/videoGame.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemeClashBlog from './components/scrollOfDeconstruction/blogs/memeClashBlog.component';
import ScrollOfDeconstruction from './../src/components/scrollOfDeconstruction/blogList/scrollOfDeconstruction.component'
import SurroundingsBlog from './components/scrollOfDeconstruction/blogs/surroundingsBlog/surroundingsBlog.component'

const App = () => {
    return (
        <div>
            <Router>
            <NavigationBar />
            <Routes>
                <Route path="/CvIntroduction" element={<ResumeIntroduction />} />
                <Route path="/VideoGame" element={<VideoGame />} />
                <Route path="/ScrollOfDeconstruction" element={<ScrollOfDeconstruction />}/>
                <Route path="/MemeClashBlog" element={<MemeClashBlog />}/>
                <Route path="/SurroundingsBlog" element={<SurroundingsBlog />}/>
            </Routes>

            </Router>
        </div>
    );
};

export default App;