import React from 'react';
import firstImage from './Surroundings1stPic.png';
import secondImage from './SurroundingsSecondPic.png'
import thirdImage from './SurroundingsThirdPic.png'
import fourthImage from './SurroundingsFourthPic.png'
import surroundingsMessage from './SurroundingsMessage.png'
import fifthImage from './SurroundingsFifthPic.png'
import './../../../../App.css'

const MemeClashBlog = () => {
    return (
        <div className="blog-container">
            
            <div className="blog-content">
            <div>
                <h1 className="title-container">Surroundings - My 2024 Game's Jam Video Game</h1>
                </div>
            <div className='inner-border'>
            <div className="text-container">
                <h2 style={{ color: "#fff" }}>1. Introduction</h2>
                    <p>- Back in around 2007-2008, while I was watching my first ever Blizzcon, 
                        where developers and designers presented games in front of an eager audience, I harbored a dream: one day, 
                        I would be able to do something similar. Recently, upon hearing about the Games Jam, I made the decision to participate, 
                        and it has proven to be one of the most enjoyable experiences I've had.
                    </p>
                    <p>When my teammate Rastko and I presented our game "Surroundings," 
                        we experienced an incredible interaction with the audience. It was reminiscent of that dream I had years ago about announcing a game, 
                        and I felt a small part of it come true.</p>
                    <p>In this article, I will detail the game we presented, "<strong>Surroundings</strong>"</p>
                    <h2 style={{ color: "#fff" }}>2. About the game</h2>
                    <p>- I always had this ideology that if I were to create even a prototype of a game, such as in this scenario, I would like it to potentially have a full release. 
                        This is why I opted for a level-progression type of game. </p>
                        <p>When developing this game, my entire focus was not on merely eliciting laughter from the audience. 
                            Rather, the overarching objective of the game itself was to bring joy to someone in-game, specifically depressed individuals, to improve their mental health
                            by making them laugh.</p>
                        <p>
                        
                            The most suitable genre for this game would be puzzle-novel. As a player, you assume the role of the Ghost of Motivation, 
                            tasked with aiding depressed individuals by completing objectives. 
                            These objectives are based on real-life activities that could potentially assist someone dealing with depression.
                           
                            </p>
                            <p>The prototype consists of three rooms: Bedroom, Bathroom and Kitchen/Hallway. 
                                Depending on the room you are in, specific hints are displayed on the top left part of the screen. 
                                Those hints are there to guide you to your next objective. 
                                Additionally, as you complete objectives, the 'Happiness Bar' fills up. Once it reaches full capacity, you proceed to the next level.</p>
                </div>
                <div className="image-container">
                <img src={firstImage} alt="Meme Image" title="First room: Bedroom" className='img-size' />
                </div>
                <div className="text-container">
                    <p>As we can see on the image above, where Bedroom is presented, at top left of the screen there is a hint for Ghost's first objective.
                    By going around the room and checking with which item you can achieve your first objective, the items you can interact with are highlighted with white border.
                    </p>
                    <p>
                        Ghost's first objective is completed after we interact with the TV. Turning on the TV will wake up the human, showing him a message of support.
                        Also, we can notice that our happiness bar got slightly filled up.
                    </p>
                </div>
                <div className="image-container">
                    <img src={secondImage} alt="Meme Image" className='two-images-size' />
                    <img src={fourthImage} alt="Meme Image" className='two-images-size' />
                </div>
                <p>
                After completing the first objective, the second objective is revealed, and so forth. Alcohol, 
                being one of the leading causes of depression, is often a substance that depressed individuals turn to. Inspired by these facts, 
                the next objective for the Ghost is to search for a bottle of alcohol in the room and remove it.
                </p>
                <p>
                The subsequent step involves motivating your human to create a better environment around themselves. 
                This is because the environment often mirrors someone's mental health.
                </p>
                <p>
                Motivating the individual to pick up their clothes from the floor and open the window to let sunlight into the room significantly boosts their happiness bar.
                
                </p>
                <p>
                Please dont mind the pink color, that was a result of a 48h Game's Jam Deadline!
                </p>
                <p>
                Next on the list is hygiene, and this is where as a Ghost you are supposed to go near the bathhub and turn on the water.
                This will draw human's attention and he will come to the bathroom!
                </p>
                <div className="image-container">
                    <img src={thirdImage} alt="Meme Image" className='two-images-size' />
                    <img src={fifthImage} alt="Meme Image" className='two-images-size' />
                </div>
                <p>As isolation is one of the main symptoms of depression, I had this idea in mind that one objective for the Ghost should be to
                    remind a human to check his phone. While the human is taking a bath, a player can move the Ghost to the kitchen and trigger an alarm to grab human's attention.
                </p>
                <p>As soon as human checks his phone, the game shows the player a message the human received: a coffee invitation from a coworker. This brightens up the mood
                    of the human significantly.
                </p>
                <p>
                    The final step would be to put some music on and after that is done, the human grabs his coat and leaves his house, venturing to Level 2.
                </p>
                <div className="image-container">
                    
                    <img src={surroundingsMessage} alt="Meme Image" className='img-size' />
                </div>
                <h2 style={{ color: "#fff" }}>3. Conclusion</h2>
                <p>
                    - To be fair, I was a bit nervous about the whole idea, especially considering it wasn't comedy. However, as soon as we started presenting, the audience did
                    a fantastic job following and interacting with us.
                </p>
                <p>
                    On my little suprise, even after the presentation and the day after, I received a few messages from people in Games Jam discord who unfortunately found themselves in our human.
                    I wasn't sure how to feel about that; I was very glad the game had the impact I wanted it to have, but on the other hand, it's not so awesome to hear someone struggling.
                </p>
                <p>
                    Overall, working in a team to meet a deadline was so much fun, and I can't wait for the next similar opportunity. Ubisoft's game jam, perhaps?
                </p>
                </div>
            </div>
        </div>
    )
}

export default MemeClashBlog;
