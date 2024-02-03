import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import ResumeIntroduction from './components/resumeIntroduction/resumeIntroduction.component';
import VideoGame from './components/videoGame.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollOfDeconstruction from '../src/components/scrollOfDeconstruction/scrollOfDeconstruction.component'
import MemeClashBlog from './components/scrollOfDeconstruction/blogs/memeClashBlog.component';

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
            </Routes>

            </Router>
        </div>
    );
};

export default App;