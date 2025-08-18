import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import './navigation.css';

const NavigationBar = () => {
    const [fontSize, setFontSize] = useState('14px');
    const [textSize, setTextSize] = useState('14px');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setFontSize('0.7rem');
                setTextSize('0.7rem');
            } else {
                setFontSize('14px');
                setTextSize('14px');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppBar className='navigation' style={{ backgroundColor: "#23252b"}}>
            <Toolbar>
                <Typography variant="h6" style={{ fontSize: textSize, color: '#ffffff', fontWeight: 'bold', minWidth: "175px" }} >Marko Veljkovic CV</Typography>
                <Box sx={{ display: 'flex',  justifyContent: 'flex-start', width: '84%', color: '#c2c2ba', fontWeight: 'bold', marginLeft: "20px" }}>
                    <Button color="inherit" component={Link} to="/" style={{ fontSize  }}> <span style={{ borderLeft: "1px solid #fff", paddingLeft: "10px" }}>
    Tutorial
  </span></Button>
                    <Button color="inherit" component={Link} to="/VideoGame" style={{ fontSize }}>Video Game</Button>
                    <Button color="inherit" component={Link} to="/ScrollOfDeconstruction" style={{ fontSize }}>Scroll of Deconstruction</Button>
                </Box>
                <Typography variant="h6" style={{ fontSize: textSize, color: '#ffffff', fontWeight: 'bold' }} >markoveljkovic11010@gmail.com</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
