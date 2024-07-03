import React from 'react';
import bloodborneShield from './BloodborneShield.jpg';
import './../../../../App.css'

const BloodborneBlog = () => {
    return (
        <div className="blog-container">
            
            <div className="blog-content">
            <div>
                <h1 className="title-container">Bloodborne – The Evolution of Souls Combat</h1>
                </div>
            <div className='inner-border'>
            <div className="text-container">
            <h2 style={{ color: "#fff" }}>1. Introduction</h2>
                    <p>
                    Throughout my gaming journey, there have been many 
                    unforgettable and amazing moments, but one of the most precious is when my three 
                        brothers and I played Demon's Souls together back when it was released around 2010.
                        </p>
                        <p>
                                We used to swap the controller after each death, and as you know with this genre, 
                        far too many circles were completed! This game brought such a revolutionary game design to single-player 
                    games, where whether you were watching or playing, the feeling of constant pressure and tension was always there!
                    </p>
                    <p>
                    Having that in mind, I have to say that FromSoftware stands as one of my favorite game studios, releasing titles such as Demon's Souls, the Dark Souls trilogy, Bloodborne, Sekiro, and Elden Ring. 
                    It's not difficult to see why I hold them in such high regard. While each of these games 
                    could be argued as "the best in the series", I feel compelled to shine a spotlight on 
                    Bloodborne, primarily due to the game design decisions that accompany it and how every next Soulsborne game followed its formula.
                    </p>
                    <p>
                    The art style, setting, new combat and the perfect prediction of how player's skill will improve over time 
                    with perfectly tailored challenges based on that were the main reason this game attracted not only hardcore players, but also a lot of players
                    who were never really interested in Soulsgames.
                    This popularity got Bloodborne multiple Game of the Year awards, 
                    even when pitted against fierce competition like The Witcher 3 - which is considered by many as “the best game of all time”. On top of that,
                    we have to keep in mind that Bloodborne was a PS4 Exclusive Game.
                    </p>
                    <h2 style={{ color: "#fff" }}>2. Bloodborne innovations to progression and combat</h2>
                    {/* <p>
                    How did FromSoftware deconstruct and twist their Souls games and made something that was a base for all their future games?
                    </p> */}
                    <h4 style={{ color: "#fff" }}>- The perfect prediction of player's skill improvement</h4>
                    <p>
                    I've watched quite a few people play Bloodborne for the first time, both solid gamers and casual players. 
                    One thing I found very interesting is that there wasn't much difference in the progress between these groups, which was usually the case in Dark Souls games. 
                    In my opinion, the main reason for this is the way FromSoftware managed to design the learning/progression curve.
                    </p>
                    <p>
                    As Miyazaki once said in an interview, Bloodborne feels like learning to play an music instrument - 
                    the start is very hard, but as you play more, the tones that seemed difficult before become simple now, while new tones are perfectly 
                    harder than the ones you currently know – <strong >and there are no shortcuts</strong>.  
                    </p>
                    <p>
                    As in no shortucts, Bloodborne  was FromSoftware’s first game where armor 
                    didn’t play huge role, there isn’t really an “Easy mode” which is fueled 
                    by very strong armors. In Dark Souls 1 you could get Havel’s armor and the 
                    game gets a lot easier, those things do not exist in Bloodborne, and most of 
                    the success is very tied to player’s skill improvement. Ofcourse, you are getting stronger as you level up, 
                    upgrade your weapons, but those things can maybe make the game slightly easier so it will still require a lot of skill to beat it.
                    </p>
                    <p>
                    Bloodborne deeply mastered the difficulty scaling that increases exactly as the player gets progressively better. 
                    After some time, a lot of the players will be questioning themselves about how they were even dying to some enemies at first place!
                    </p>
                    <p>
                        
                    Let's examine the very first example of this:
                    </p>
                    <p>
                    I still remember struggling to fight the very first werewolf for about 
                    10 minutes; it was designed to kill you. I honestly believe this design 
                    decision is often overlooked. For me, this is the exact moment where 
                    Bloodborne excels. After approximately 2 hours into the game, just 
                    before encountering the first boss, two of those same werewolves 
                    attack you. This time, you're prepared. You've grasped the fundamentals of the game, and you'll usually 
                    defeat them easily—not because of your character's increased power, but because of the pure improvement of 
                    your gameplay skills. 
                    </p>
                    <p>For me, the way Bloodborne manages to perfectly anticipate and prepare players for
                     challenges by predicting increases in their skill level is one of the most amazing aspects of its game design. 
                    This way of progress happens till the very end of the game. 
                    </p>
                    <h4 style={{ color: "#fff" }}>- Big changes to combat system</h4>
                    <p>
                    Bloodborne's departure from the combat mechanics of Dark Souls 1 and 2 marks a significant evolution in 
                    FromSoftware's approach to action role-playing games. By emphasizing aggression, fluidity, and risk-reward dynamics, 
                    Bloodborne delivers a visceral and exhilarating 
                    combat experience that stands as a testament to the studio's commitment to innovation and player engagement.
                    <p>How did FromSoftware manage to make the combat feel that good?</p>
                    </p>
                    <p>
                    From the moment players encounter the ferocious werewolf 
                    in the opening moments of the game, 
                    it becomes abundantly clear that Bloodborne's combat is nowhere similar as its predecessors. 
                    </p>
                    <p>
                    Unlike the slow and methodical pacing of Dark Souls, 
                    Bloodborne thrusts players 
                    into a relentless frenzy right from the start. 
                    The first enemies encountered in Bloodborne are fast, 
                    aggressive, and unrelenting, setting the tone for the rest of the game. 
                    </p>
                    <p>From the very start, game designers are trying to show the player that a slow, passive and 
                        defensive style of gameplay isn't favored in this title. Bloodborne has an amazing way of telling the story through item descriptions, 
                        and the one on the shield is a pure mockery of the players who are used to the passive and defensive gameplay of DS1/2
                    </p>
                    <div className="image-container">
                <img src={bloodborneShield} alt="Meme Image" title="Shield item is considered a joke in Bloodborne" className='img-size' />
                </div>
                <p>
               One of my favourte examples of Bloodborne's emphasis on aggression is the rally mechanic. When players take damage, 
                they have a limited window of opportunity to regain lost health by landing subsequent attacks on their foes. This mechanic not only encourages
                 players to stay engaged in combat but also adds a 
                 layer of tension and excitement as they strive to turn the tide of battle in their favor through sheer aggression.
                </p>
                <p>
                The inclusion of a swift and responsive dodging mechanic further enhances 
                the game's focus on aggressive playstyles. Unlike the slower and more deliberate dodges found in other FromSoftware titles, 
                Bloodborne's quickstep allows players to swiftly evade incoming attacks and seamlessly transition into counterattacks. 
                This design of fluidity in movement encourages players to stay on the offensive, 
                rewarding those who can master the art of dodging.
                </p>
                <h4 style={{ color: "#fff" }}>- Weapons that allow combos by transforming mid combat</h4>
                <p>
                Weapon design also plays a crucial role in facilitating aggressive gameplay in Bloodborne. 
                Each weapon in the game offers 
                unique movesets and abilities that cater to different playstyles. One standout feature 
                is the transforming weapon mechanic, which allows players to switch between different modes mid-combat. This versatility enables players to unleash 
                devastating combos and maintain constant pressure on their enemies, further reinforcing the game's emphasis on aggression as a viable and rewarding strategy.
                </p>
                <h4 style={{ color: "#fff" }}>- Connecting music and lore with agressive combat</h4>
                <p>
                Bloodborne's aggressive combat mechanics are perfectly complemented by its intense musical score. 
                As players engage in intense battles against beasts and grotesque monstrosities, 
                the pounding rhythms and driving melodies propel them forward, fueling their adrenaline and heightening the sense of urgency. 
                It's a symphony of violence and chaos, that perfectly enhances your agressive gameplay.
                </p>
                <p>
                Bloodborne achieves a great synergy between its lore and gameplay mechanics, further enhancing the 
                immersive experience for players. The game's narrative revolves around a city 
                plagued by a corrupting blood that drives its inhabitants to madness and aggression.
                This thematic element seamlessly integrates with the aggressive gameplay mechanics, as players are thrust into a 
                world where survival hinges on embracing the relentless ferocity of their foes. By intertwining 
                its lore with its gameplay, Bloodborne creates a cohesive and immersive experience that is as intellectually engaging as it is viscerally thrilling.
                </p>
                <h2 style={{ color: "#fff" }}>3. Conclusion</h2>
                <p>
                In conclusion, I honestly believe that DS 3, Sekiro, and Elden Ring are more complete games than Bloodborne. However, 
                I also believe that when considering the significance of a game in shaping the evolution of the 
                Souls genre, Bloodborne stands alongside Demon's Souls, which defined the genre itself.
                </p>
                <p>
                <em>"A hunter is a hunter, even in a dream."</em>
                </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BloodborneBlog;
