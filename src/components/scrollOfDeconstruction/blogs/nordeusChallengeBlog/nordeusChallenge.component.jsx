import React from 'react';
import tournamentDiagram from './tournamentDiagram.png';
import './../../../../App.css'

const nordeusChallenge = () => {
    return (
        <div className="blog-container">
            
            <div className="blog-content">
            <div>
                <h1 className="title-container">Game Design Challenge – Nordeus</h1>
                </div>
            <div className='inner-border'>
            <div className="text-container">
               <h2 style={{ color: "#fff" }}>1. My connection with video games</h2>
                    <p>My passion for game design traces back to my earliest memories when my father introduced me and my brothers to the world of video games with the PlayStation 1. This pivotal moment marked the beginning of a lifelong connection to gaming. As we explored various titles on the PS1, I had that luck that 3 of my brothers were huge video game’s fans, so I had a chance to discuss gameplays of various genres since the very early age. 
                    </p>
                    <p>
                    Gathering around a single PC, we delved into the intricate world of Heroes 3, spending hours and hours strategizing and playing. It was within the realm of Heroes 3 Map Editor that I discovered the very first thrill of creation, even if it was just a basic map – it felt so magnificent. 
The real turning point in my creative journey and the evolution of video games, in my view, occurred with Warcraft 3 and its Editor. Custom maps like DotA (even defined a new genre), Tower Defense, and Footman Frenzy captured my imagination. 

                    </p>
                    <p>
                    When I was around 10, my venture into “game design” took a significant leap when I crafted a MOBA map with around 30 Unique heroes. Witnessing it being played by people I know in nearby game cafes and on platforms like Garena was immensely gratifying. The pinnacle of this experience was connecting with Icefrog, the creator of DotA, discussing hero spells and contributing to the evolving world of DotA. Parts of DotA heroes like Abaddon, Bristleback and Mirana are proudly to say my creation.
                    </p>
                    <p>
                    Even today, playing DotA 2 and encountering those few spells I created in my early Warcraft 3 days invokes a unique sense of accomplishment and nostalgia.
                    </p>

                </div>
                <h2 style={{ color: "#fff" }}>2. My thoughts on game design philosophy</h2>
                <p>
                In contemplating game design philosophy, I firmly believe that while playing video games is a fundamental aspect of designing them, you also need to be very passionate about games and also curious about the depth of the game (Why was this level made this way?). 
In my opinion, games should be easy to learn, difficult to master. Personally, when embarking on the design process, I find it crucial to discern the intended audience—whether they are casual players, hardcore gamers, or fall somewhere in between. 

                </p>
                <p>
                Drawing from my own experiences as an E-sports player from 2019 to 2021 in MMOs like WoW, achieving top rankings in RPGs such as Diablo/Lost Ark, and winning several tournaments in FIFA, I've also enjoyed the challenges of the Souls games and other genres as an average player. 
While the overarching goal is to create a game that is inherently enjoyable for everyone, I maintain that as a game designer, it's essential to make a deliberate choice regarding the target audience and wholeheartedly commit to it. Attempting to cater to the diverse needs of casual players, hardcore gamers, and those in between can be very hard and punishing, given the stark differences in their preferences and play styles, and of course time invested. Although, drawing a perfectly balanced line between those 3 groups can give some amazing results (FF14).

                </p>
                <h2 style={{ color: "#fff" }}>3. Competitive system in a Sports game</h2>
                <h4 style={{ color: "#fff" }}>3.a About game modes in Sports video games</h4>
                <p>
                In the realm of sports games, such as FIFA, NBA, and MADDEN, adherence to real-life rules inherently limits the scope for significant gameplay innovation. The conventional model revolves around familiar game modes, reflecting the unalterable rules of sports like football or basketball. 
                </p>
                <p>
                The challenge lies in introducing new systems or game modes that can tangibly influence the gaming experience. We can guess that our demographic group within sports games are mostly players who are avid fans of the respective sports and previously watched real-life matches before engaging with the digital rendition. Many of these enthusiasts are ardent supporters of specific clubs, and their passion for both the club and the sport serves as the driving force behind their gaming involvement. In the current state of sports games, there is a lack of a game mode that seamlessly integrates competitiveness, player identity, and the deep-seated love for one's club. 
                </p>
                <p>
                Taking FIFA as an example, the existing Career mode allows players to establish their identity, create personalized avatars, and progress as footballers season after season with the goal to reach their favorite club. On the other hand, the immensely popular FUT mode, while fostering a highly competitive scene, lacks a player's personal identity and you are not playing with your favorite club. The Seasons mode, centered around supporting one's favorite club, falls short in terms of player identity and often lacks the level of competitiveness found in other modes. 
                </p>
                <p>
                I personally think that whoever combines the competitive spirit, individual player identity, and unwavering love for one's club into one game mode will mark a new era in a sports gaming landscape.
                </p>
                <h4 style={{ color: "#fff" }}>3.b Basics of my idea of this competitive system</h4>
                <p>
                In formulating my concept for a competitive system in a sports game, using FIFA as my example in this challenge, I aim to integrate elements that combine all three: competitiveness, player identity, and the genuine affinity players have for their favorite clubs. 
                </p>
                <p>
                To achieve this, I plan to draw inspiration from standout game modes that have defined their genres, earned Game of the Year accolades, and demonstrated enduring success. By meticulously deconstructing the mechanics of these acclaimed games, analyzing why they resonate with players, and cherry-picking the most effective components, I aspire to create a new sports game mode that not only captures the essence of competition but also nurtures a sense of personal player identity and deep-rooted passion for one's chosen club. This approach seeks to leverage the proven success of established game systems while innovatively adapting and combining them to elevate the gaming experience within the sports genre.
                </p>
                <h2 style={{ color: "#fff" }}>4. Core functionality of the system</h2>
                <p>
                Since currently this is just a write up and  I am not being able to talk to other game designers and Game Developers & Engineers, it is hard to pick one option that would work, so I would like to list few options and then after the feedback of others, together decide what route we should be taking in terms of optimization. 
                </p>
                <p>
                I would like to call my game mode <strong>"Path of Glory"</strong> since it shows a commitment to encapsulating a club's entire journey, from its humble beginnings to a storied history. This system aims to intertwine the essential elements of competitiveness, player identity, and the profound love fans have for their clubs. 
                </p>
                <h4 style={{ color: "#fff" }}>4.a  Format of the tournament</h4>
                <p style={{color: "#fff"}}>
                <strong>- Grouping of Teams</strong>
                </p>
                <p>
                When it comes to format of the tournament, I have an idea to separate the world into few different groups, those groups can be created based on two factors:
                </p>
                <p>
                - 1. Creation of groups based on real-life location (European teams only playing European teams, Asia teams only playing Asia teams and so on.)
                </p>
                <p>
                - 2. Creation of groups based on a Star Level of a team (2 Star level teams only playing against 2 Star level teams)
                </p>
                <p>
                Let’s try to cover both pros and cons of both of those systems.
                </p>
                <p>
                    <strong>Creation of groups based on real-life location:</strong>
                </p>
                <p>
                This type of grouping would lead to a higher level of accomplishment in a player’s identity and love for the club because it would feel more realistic, but less in a competitive side because you can have a team like Barcelona playing a team like Red Star Belgrade (5 Star versus 3 Star Team). 
<strong>Game balance</strong> is the clear issue with this type of creation.
                </p>
                <p>
                <strong>Creation of groups based on a Star level of a team:</strong>
                </p>
                <p>
                This type of grouping would be quite opposite of the first one, where we would have a much more balanced competition between players, but we are losing a bit of reality since in real-life world, we will rarely see that an European Team plays a Team from Asia.
In my opinion, I would group them with this method.

                </p>
                <p style={{color: "#fff"}}>
                <strong>- Choosing the type of Seasons we want to use</strong>
                </p>
                <p>
                There are two types of Seasons we could use for our system:
                </p>
                <p>
                - Shorter Seasons up to 1 month - more dynamic (Looking at examples of popular MOBA and FPS games, where competitiveness is the main focus)
                </p>
                <p>
                - Longer Seasons up to 6 months – less dynamic but a lot more player’s identity is involved (Looking at examples of connection to player’s characters/avatars in MMOs and RPGs) 
                </p>
                <p>
                It is worthy of noting that I love both, and would love to have both options available in this game mode but I understand the complexity and expenses of developing those systems so according to that let’s pick just one at first.
                </p>
                <p>
                Considering there is not really a bad decision here, but rather a choice in the direction you want your game to go, and analyzing the most popular games in recent years, we will see that fast-paced FPS and MOBA games have a higher player base than MMOs and RPGs. According to that, I would slightly lean towards the Shorter Seasons option.
                </p>
                <p>
                Although, this clearly does not mean that I don’t want to use elements of community engagement, progression and rewards from MMOs and RPGs in my Competitive System.
                </p>
                <p style={{color: "#fff"}}>
                <strong>- How to implement matchmaking & rankings</strong>
                </p>
                <p>
                As we opted for Shorter Seasons, which are going to last for 1 month, we are going to have few different tournaments (qualification rounds) each week within this 1 month time span.
                </p>
                <p>
                A diagraphic explanation of the idea presented as the diagram graph (from bottom to top): 
                </p>
                <div className="image-container">
                    <img src={tournamentDiagram} alt="Meme Image" className='img-size' />
                </div>
                <p>
                As we can see, there will be five groups in total completely separated from one another. Only way for a team to play a team from different group is to increase its Star Power level with our “gearing”/progression system and transition to higher Star Group. There is no reward for playing in a higher Star group, this was implemented only because of Gameplay balance, also this will encourage people to start a Season with their favorite club. 
                </p>
                <p style={{color: "#fff"}}>
                <strong>- Qualifying/Weeks Stage</strong>
                </p>
                <p>
                Each week, top 8(depending on how large our playerbase is, we might increase this number) from each group will qualify for the Grand Finals, those who don’t, will get a chance to do so in the week 2 and 3. Players who qualified from Week 1 wont impact leaderboards, but will still need to play their games in order to get Star Points to increase their Team Star Level.  In one sentence, Star Points will be used to increase player’s speed, stamina, shot power, dribbling, we will get more into this later in the text.
                </p>
                <p>
                In the first 10 games of each week, players will earn 2 Qualifying points for wins and 0.5 points for a draw, loss yields 0. After the first 10 matches are played in each week, starting from 11th match, players will start to earn 3 points for wins, 1.5 for draw and 0 for loss.
                </p>
                <p>
                This of course needs playtesting, but general idea behind this, is that we keep players engaged to play the full run even if they lost their first few matches, since other part of the week can turn things around.
Spending Star Points will be locked till 10th match in each week because we want to try to give a more value to Star Points and hopefully award a player who spent those points wisely a better run in the second part of the week. Also, since you will earn more Star Points if you win, we want to keep those first 10 matches as balanced as possible.

                </p>
                <p>
                Players that played less than 10 matches will not be able to get matched with players that are already at their 11th+ match and spent Star Power.
                </p>
                <p>
                in both Qualifying/Week Stage and Knockout Stage sort of additional game balance and fairness will be enhanced with the hidden MMR system, where system will try to pair players that have as similar scores as possible.
                </p>
                <p style={{color: "#fff"}}>
                <strong>- Knockout Stage</strong>
                </p>
                <p>
                After the first 3 weeks are finished, we will get a total of 120 players meeting up in the Grand Finals. Grand finals qualification for Knockout stage will last for 5 days, and in those 5 days, players will need to play a maximum of 20 games between themselves and try to qualify. Top 32 Players will go through and meet in the Knockout stage. The Knockout stage as stated will consist of 32 Players and will last for the last few days of the season System will match players according to their position in the qualifying rounds. Player ranked 1 will play player ranked 32, 2nd will play 31st and so on. Every pair of players in this stage will play two games back to back with each other with Home & Away football rules. 
                </p>
                <p style={{color: "#fff"}}>
                <strong>- Scheduling games in Knockout Stage, setting Time Frames</strong>
                </p>
                <p>
                I feel like this is a complex thing to develop, so I would invest my time to have a talk with game developers and engineers in order to see how we can optimize this.
                </p>
                <p>
                It is expected that players in different time zones can get paired and as system does not use “random matchmaking” in this stage, players should have an option to submit a Time Frame when they are able to play the matches. If time frames do not match, both of the players will have an option to adapt (maybe give some very small benefits in gameplay if player does this) to other’s player Time Frame (to accept it). If this happens, system schedules the match at that time. However, if none of the players wants to agree with the other player’s Time Frame, system will auto-schedule a Time Frame that is in between those two Time Frames that players submitted.
                </p>
                <h4 style={{ color: "#fff" }}>4.b Basics of Team progression – Player progression</h4>
                <p style={{color: "#fff"}}>
                <strong>- How are players earning Team Star Power?</strong>
                </p>
                <p>
                Obtaining Star Power points will be crucial for the success in Path of Glory game mode. Players will be able to earn from multiple sources, but the main one is just playing the game. 
                </p>
                <p>
                In the first 10 games for the each week, players will earn 10 points for win, 7 for draw and 5 for loss. In the other 10 games players will earn 15 / 10 / 7. The playtesting and exact math is needed to be done so we can get exact values in terms of Game Balance.
                </p>
                <p>
                To keep the players engaged every day, we would implement a specific set of daily challenges that aren’t hard, but serve as engagement tool for player to Login every day. Those challenges should be something that is completed as they play the game that day, for example: Score a goal, get awarded 3 corner kicks and so on. Completing this challenge every day would yield same amount of Star points as one win.
                </p>
                <p style={{color: "#fff"}}>
                <strong>- What are Team Star Power points?</strong>
                </p>
                <p>
                Star Power points will be used to improve the quality of a footballer. Footballers (in FIFA, as we use that for example) have a various number of stats like pace, dribbling, passing, shot power and so on. With your Star Power points, you can invest in one (or multiple) player’s stats and skills. 
                </p>
                <p>
                The whole goal of those points is that you make a smart progression with your players and increase overall Team Star Power to maximum. 
                </p>
                <p>
                Making your favorite club like River Plate, Red Star or Ajax a world class team, with original players with their skill enhanced sounds like a very interesting goal, considering it is also a very competitive multiplayer system. The game should also feature a History Calendar where you could check which clubs/player’s tags qualified in Weeks stage and won the Grand Finals for each Season. It would be very satisfying to see Boca or Red Star Belgrade as a winner in one of the seasons!
                </p>
                <p style={{color: "#fff"}}>
                <strong>- Adding a bit of depth to the system</strong>
                </p>
                <p>
                In my opinion, again, games should be easy to learn, difficult to master. I want that everyone who plays a game for a week to understand fundamentals of the system, so I want to be very careful when adding depth.
                </p>
                <p>
                Everything I wrote before, as you are progressing with your favorite team, that’s already a decent connection with player’s identity and love for the club, but I would like to go step further.
                </p>
                <p>
                <strong>Creating your own Footballer to be a part of the team:</strong>  
                </p>
                <p>
                – At the very beginning of the season, you will be able to create and chose a name of your own footballer within a character creation system and add him to your favorite club to start a Path of Glory together. You will be able to pick at which position your created character would like to play, should he be a striker, winger, midfielder, defender or maybe a goalkeeper. Choosing a position will determine his stats accordingly.
                </p>
                <p>
                There is also an idea that we make the created footballer come with a specific number of Star points, and then players can use them on their Avatar as they think is the best, though this adds a bit of complexity, so I am not sure.
                </p>
                <p>
                <strong>Boosting Star Power of your Fans/Ultras:</strong>  
                </p>
                <p>
                - Yet to this date there is not a sports game that connected Fans/Ultras to the gameplay, and I think that’s a wasted opportunity. Same as your footballers, your football club fans and ultras will have their Star Power. Some of the teams will have their Ultras Star Power a lot higher at the beginning than other Teams, for example, Turkish and Argentine clubs will come with nearly maxed out Ultras from the very beginning. I have a few ideas how they could simply but efficiently affect the gameplay. 
                </p>
                <p>
                Turkish Galatasaray will have its fans/Ultras maxed out from the beginning. Having a maxed out fans will decrease overall stats of opponent’s players by a small margin, or maybe give him a foggy screen from time to time. Additionally, we could introduce a dynamic feature where, if a player is trailing by a goal or two, the in-game fans become increasingly vocal, boosting the entire team's skill by 10%. This not only adds an immersive and responsive element to the gameplay but also aligns with the real-world influence of crowd support on a team's performance. You will be able to choose one of the multiple options available in terms how you want your fans to help you.
                </p>
                <p>
                <strong>Trading Footballers with other players or buying them in a shop:</strong>  
                </p>
                <p>
                - As I want to keep the identity of the football clubs with their original roster, trading players will be only available in Week 3 of Group Stage and it will be Limited to 3 footballers per season. 
                </p>
                <p>
                The price of the footballer will be nearly x2 Star Power of the player you are buying. If you want to buy Mbappe from a Player who plays PSG, and Mbappe Star Power is 95, you will need to trade him up to two players with a minimum Star Power of 90+. Keep in mind that fatigue of players will play a role where you will need to rest some of the players, so this option is not always the best for overall Team Power. 
                </p>
                <p>
                <strong>Boosting Star Power of your manager:</strong>  
                </p>
                <p>
                - This is yet to be thought about. Main idea is that every manager will have one type of speciality in terms of: Defense, Attack, Possession, Counter-Attack and similar. Using Star Power on your manager will increase the whole team skill level based on manager’s speciality. I think that in terms of gameplay balance, every team should be able to pick any manager in the game at the beginning of the Season. Only difference between managers should be their speciality.
                </p>
                <p>
                <strong>Side missions versus AI, challenges that rewards items:</strong>  
                </p>
                <p>
                    - Each week there will be a very challenging side mission/challenge against AI, where you will have to perform a series of dribbles, score a goal in a specific way, beat AI who plays on specific difficulty and so on. This missions could reward specific item that you could enhance your CUSTOM PLAYER with, for example, Maradona’s cleats that will increase player’s Star Power.
                </p>
                <h2 style={{ color: "#fff" }}>5. Rewards and what transitions to next Season?</h2>
                <p>
                I have some ideas when it comes to this, but I am leaning towards having a <strong>Custom player</strong> Star Power transition from Season to Season. So if you upgraded him up to have Star Power 85 in Season 1, he will start Season 2 with same exact Star Power. Making the players connect with those footballers like they do with characters in various MMOs/RPGs.
                </p>
                <p>
                In modern gaming, cosmetics play a huge role in games, so being able to modify the look of custom player’s shirt, modify the stadium of your favorite club, custom ultras songs and so on. Rewards should be focused on this.
                </p>
                <h2 style={{ color: "#fff" }}>6. Balancing the start with 5 Star Teams versus 1 Star Teams</h2>
                <p>
                Few ideas regarding this:
                </p>
                <p>
                - 1. Simply reward Star Power based on Star level of the team
                </p>
                <p>
                - 2. Ultras of 5 Star Teams expect a high performance of the team, so winning by small margin yields less Star Power, also on loss the Star Power decreases (Although I would prefer to award a player for good behavior, not to punish him for bad behavior)
                </p>
                <p>
                This needs to be playtested, but it is important that the core idea is set, and that is that by the end of week 3, all teams are nearly maxed out.
                </p>
                <h2 style={{ color: "#fff" }}>7. In-game Shop and microtransactions</h2>
                <p>
                 I would like to add some examples where the shop could be of a very good value.
                </p>
                <p>
                - 1. <strong>Season Pass Boost</strong> – 10% Increased Star Power Gain for Win/Draw/Loss
                </p>
                <p>
                - 2. <strong>Season Catch up option</strong> - If a player misses a first week in a season (not play it at all), give him the catch-up option in In-game Shop, something in terms of to gain Star Power in the same amount as the average amount in Week 1 was.
                </p>
                <p>
                - 3. <strong>Buying a player from other team</strong> – Gives option to buy up to 3 footballers from any team, this needs to be done before Season start so the System can generate your new-made Star Power and group you accordingly.
                </p>
                <p>
                - 4. <strong>Buying an item from side mission</strong> – If you are not able to complete a side mission that rewards a specific item for your custom player, you will be able to buy it from in-game shop directly. You will also be able to buy items from previous seasons from time to time
                </p>
                </div>
            </div>
        </div>
    )
}

export default nordeusChallenge;
