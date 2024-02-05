import React from 'react';
import backgroundImage from './BackgroundTest.jpg';
import './../../../App.css'

const MemeClashBlog = () => {
    return (
        <div className="blog-container">
            
            <div className="blog-content">
            <div>
                <h1 className="title-container">This is meme clash blog's Title</h1>
                </div>
            <div className='inner-border'>
            <div className="text-container">
                <h2>1. Introduction to Meme Clash</h2>
                    <p>- My passion for game design traces back to my earliest memories when my father i
                    My passion for game design traces back to my earliest memories when my father i
                    My passion for game design traces back to my earliest memories when my father i
                    My passion for game design traces back to my earliest memories when my father i
                    My passion for game design traces back to my earliest memories when my father i
                    My passion for game design traces back to my earliest memories when my father i
                    My passion for game design traces back to my earliest memories when my father i
                    </p>
                </div>
                <div className="image-container">
                    <img src={backgroundImage} alt="Meme Image" className='img-size' />
                </div>
                <div className="text-container">
                    <p>This is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...
                    his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...
                    his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...
                    his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...
                    his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...his is a bit text ...
                    </p>
                </div>
                <div className="image-container">
                    <img src={backgroundImage} alt="Meme Image" className='img-size' />
                </div>
                </div>
            </div>
        </div>
    )
}

export default MemeClashBlog;
