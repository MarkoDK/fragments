import React from 'react';
import MemeClashBoard from './MemeClashBoard.png';
import './../../../../App.css'
import CollegeForWeb from './CollegeForWeb.jpg';
import BoardAvatarCards from './BoardAvatarCards.jpg'
import JudgementCollege from './JudgmentCollege4.jpg'
import BloodStrike from "./BloodStrike.png"
import RuneStrike from './RuneStrikeUlti.png'
import FortinbrasModel from './FortinBrasModel.png'

const MemeClashBlog = () => {


    const randomSentences = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      ];
    
      const randomText = randomSentences.join(' ');

    return (
        <div className="blog-container">
            <div className="blog-content">
                <div>
                    <h1 className="title-container">Meme Clash - Belgrade Jam 2024</h1>
                </div>
                <div className='inner-border'>
                    <div className="text-container">
                        <h2 style={{ color: "#fff" }}>1. Introduction to Meme Clash</h2>
                        <p>- On my 2024 Games Jam, apart from creating a video game, I was also working on a boardgame called Meme Clash. The thing I made this game with a team full of people very close to me, makes this event much more special. How did it all start?</p>
                        <p>Considering the theme was "Make me laugh", making a boardgame that utilizes memes is a chance we didn't want to miss. Following this idea and overcoming a lot of gameplay problems, I even more realized how simple playtesting is important in game design. We were very lucky that a lot of people within the jam wanted to try our game, it helped us a lot to shape it its final form.</p>
                        <p>On the other hand, we were a bit stunned when we realized how many people were coming to us to check the game out, people who played it recommended it to others to try it and so on, we achieved a factor of returning players which felt amazing. I just wish we had more than one board!</p>
                    </div>
                    <div className="text-container">
                    <h2 style={{ color: "#fff" }}>2. About the game</h2>
                    <h4 style={{ color: "#fff" }}>- Board</h4>
                    <p>We opted for a basic Monopoly-styled board. The main reason is the time limit in creating the game and simplicity. We wanted people to easily understand how the rules work.</p>
<p>The center of the board features the name of our game, "Meme Clash," surrounded by some funny-trolling faces. Around the center, in a square shape, there are playable fields.</p>
<p>There are 3 types of fields on the board: Draw a Card, Meme Battle, and Judgement. Additionally, we included a "Start" field, marked by a flag, where players who complete a full circle around the board are awarded 1 Judgement card.</p>


                    </div>
                   
                    <div className="text-container">
                    <h4 style={{ color: "#fff"}}>- Phase 1 (Setup & Movement) </h4>
<p>Before we begin the very first turn, we need to place player avatars on the "Start" field and also position two separate decks near the board: one deck for "Meme Cards" and the other for Judgment cards. </p>
<p>Each player will be given 4 "Meme Cards" at the beginning of the game. Once this is completed, players can begin rolling a six-sided die in order to move across the board.</p>

<h4 style={{ color: "#fff"}}>- Phase 2 (Fields & Scoring) </h4>
<p>As mentioned previously, there are three different fields in total:</p>
<p>- "Draw a Card" - When a player lands on this field, they draw an additional card from the "Meme Cards" deck.</p>
<p>- "Judge" is similar, but in this case, the player draws a card from the "Judgement" deck.</p>
<p>- "Meme Battle" is the main gameplay field. When a player stands on this field, they can challenge any other player to a Meme Battle. Players who have no cards in their hands cannot be challenged. If two or more players are on the same "Meme Battle" field, they engage in a Meme Battle with each other. If there is three or more players, they form a "Clownfiesta" (explained later).</p>

                    </div>
                    <div className="image-container">
                        <img src={BoardAvatarCards} alt="Meme Image" className='img-size-700' />
                    </div>
                    <div className="text-container">
    <h4 style={{ color: "#fff"}}>How do Meme Battles Work?</h4>
    <p>As mentioned before, there is a “Meme cards” deck. This deck contains a total of 52 cards. After each battle, used Meme cards are placed at the very bottom of the deck. </p>
       <p> So, what exactly are Meme cards? Meme cards are essentially Meme templates, with each card featuring a unique picture. The goal of a Meme battle is to create a better joke than your opponent while connecting the joke and the picture on your card,
        its like creating a verbal meme!</p>
        After the jokes are told, all players not involved in the battle vote. Each player can vote only once. If the result is tied, the players in the battle draw new cards from the top of the Meme card deck, each having a short amount of time to come up with a joke. Winning the Meme Battle grants you 2 points out of the 14 total points needed to win the game.
        <p></p>
    <p>Here are the few Meme card templates:</p>
    <div className="image-container">
                        <img src={CollegeForWeb} alt="Meme Image" className='img-size' />
                    </div>
                    <h4 style={{ color: "#fff"}}>What did we do to spice things up?</h4>
                    <p>I do really enjoy simple games, but there should always be something that can change the course of the game, and in our case, this is where Judgement cards
                        come into play. What are those?
                    </p>
                    <p>Judgement cards are specific cards that player earn when they move to a "Judgement" field, or when they complete a full lap. Those cards were 
                        definetily the most fun thing for me to work on! 
                    </p>
                    <div className="image-container">
                        <img src={JudgementCollege} alt="Meme Image" className='img-size-700' />
                    </div>
                    <h2 style={{ color: "#fff" }}>3. Conclusion</h2>
                    <p>
    As we can see, those cards are a bit "complex" and are exactly what we needed to prolong the replayability of our board game. During the game jam itself, 
    we had a huge number of people playtest the game, which helped us a lot in designing everything. Adapting and changing the rules/cards as we got 
    more playtime was a really fun challenge.
</p>
<p>
    Overall, we were very happy with the feedback from people and how our game turned out. The thing that worried us the most was how playable this game
    would be when players do not know each other personally and have to adapt to make general jokes that everybody will understand. This turned out to be great,
    as some of the funniest jokes were made during this playtest!
</p>
</div>

                   
                </div>
            </div>
        </div>
    )
    
}

export default MemeClashBlog;
