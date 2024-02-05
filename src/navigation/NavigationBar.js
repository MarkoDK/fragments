import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import './navigation.css';

const NavigationBar = () => {
    const [fontSize, setFontSize] = useState('1rem');
    const [textSize, setTextSize] = useState('1rem');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setFontSize('0.7rem');
                setTextSize('0.7rem');
            } else {
                setFontSize('1rem');
                setTextSize('1rem');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial font size and color

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppBar className='navigation' style={{ backgroundColor: "#23252b"}}>
            <Toolbar>
                <Typography variant="h6" style={{ fontSize: textSize, color: '#ffffff', fontWeight: 'bold' }} >Marko Veljkovic CV</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '84%', color: '#c2c2ba', fontWeight: 'bold' }}>
                    <Button color="inherit" component={Link} to="/CvIntroduction" style={{ fontSize }}>CV Introduction</Button>
                    <Button color="inherit" component={Link} to="/VideoGame" style={{ fontSize }}>Video Game</Button>
                    <Button color="inherit" component={Link} to="/ScrollOfDeconstruction" style={{ fontSize }}>Scroll of Deconstruction</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
