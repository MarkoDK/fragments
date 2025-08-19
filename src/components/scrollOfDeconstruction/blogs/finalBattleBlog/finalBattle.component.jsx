import React from "react";
import "./../../../../App.css";

const FinalBattleBlog = () => {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      const key = item.replace("./", "");
      images[key] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("./images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="blog-container">
      <div className="blog-content">
        <div>
          <h1 className="title-container">
            Preview of some Hero Designs in Final battle - My personal MOBA from back in 2010s
          </h1>
        </div>
        <div className="inner-border">
          <div className="dota-hero-container">
            <div className="hero-header">
              <img
                src={images["FortinBrasModel.png"]}
                alt="Fortinbras"
                className="hero-image"
              />
              <div className="hero-text">
                <h1 className="hero-name">FORTINBRAS - NETHERLORD</h1>
                <p className="hero-description">
                  Transforming his hands into massive tentacles used to pull his
                  victims towards him while they are burned by the very flames
                  of the Nether, Fortinbras is greatly feared by the forces of
                  light.
                </p>
              </div>
            </div>
            <div className="hero-abilities">
              <h2 className="hero-ability-name">ABILITIES</h2>
              <div className="ability">
                <img
                  src={images["Fortin1.png"]}
                  alt="Ability 1"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Tentacle Grip</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Netherlord
                    transforms his hand into massive tentacles and streaches
                    them at the target location. Tentacles will impale the first
                    target they encounter, dealing{" "}
                    <span className="rank-gold">100/200/300/400</span> damage
                    and pulling them back to the caster with{" "}
                    <span className="rank-gold">400/600/800/1000</span> range.
                  </p>
                  {/* <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 2:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 200 damage and pulling them back to the caster. 600 range.</p>
                     <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 3:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 300 damage and pulling them back to the caster. 800 range.</p>
                     <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 4:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 400 damage and pulling them back to the caster. 1000 range.</p> */}
                  <p class="ability-description">
                    <span class="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 14</span>{" "}
                  </p>
                </div>
              </div>
              <div className="ability">
                <img
                  src={images["Fortin2.png"]}
                  alt="Ability 1"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Nether Flames</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Netherlord unleashes{" "}
                    <span className="rank-gold">4/6/8/10</span> wicked flames
                    that burn enemy units, each dealing 25 damage. As flames
                    return to Netherlord, they heal him for 30% damage they did.
                  </p>
                  <p class="ability-description">
                    <span class="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 14</span>{" "}
                  </p>
                </div>
              </div>
              <div className="ability">
                <img
                  src={images["Fortin3.png"]}
                  alt="Ability 1"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Soul Reap</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Whenever Netherlord
                    deals a killing blow to enemy hero, victim will suffer{" "}
                    <span className="rank-gold">-0.5/-1/-1.5/-2</span> to all
                    stats penality.
                  </p>
                  <p class="ability-description">
                    <span class="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: Passive</span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="ultimate-container">
              <h2 class="ultimate-ability-name">ULTIMATE</h2>
              <div class="left-column">
                <img
                  src={images["FortinUlti.png"]}
                  alt="Ultimate Ability"
                  class="ultimate-icon"
                />
                <div class="text-container">
                  <h3 class="ultimate-name">Demonic Circle</h3>
                  {/* <p className="ability-description"><span className='bullet-point'>•</span> Ultimate description goes here, explaining what the ability does.</p> */}
                </div>
              </div>
              <div class="right-column">
                <div class="ultimate-background-color-mix">
                  <p class="ability-description">
                    <span class="bullet-point">•</span> Summons a circle of 6
                    tentacles around your target that attack nearby targets each
                    second. Lasts 3 seconds,{" "}
                    <span className="rank-gold">15/24/33</span> pure damage
                    each.
                  </p>
                  <p class="ability-description">
                    <span class="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 30</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="dota-hero-container">
            <div className="hero-header">
              <img
                src={images["KonradModel.png"]}
                alt="Fortinbras"
                className="hero-image"
              />
              <div className="hero-text">
                <h1 className="hero-name">
                  KONRAD VON MARBURG - GRAND INQUISITOR
                </h1>
                <p className="hero-description">
                  With an ability to exorcise evil force from his target by
                  setting him ablaze, healing and cleansing allies and burning
                  every single heretic in his path, Konrad von Marburg is one of
                  the Empire's greatest champions.
                </p>
              </div>
            </div>
            <div className="hero-abilities">
              <h2 className="hero-ability-name">ABILITIES</h2>
              <div className="ability">
                <img
                  src={images["Konrad1.png"]}
                  alt="Ability 1"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Exorcism</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Grand Inquisitor
                    attempts to banish evil by setting targeted unit ablaze,
                    forcing it to take{" "}
                    <span className="rank-gold">6/12/18/24</span> damage each
                    second for 10 seconds. If unit has less than{" "}
                    <span className="rank-gold">2%/4%/6%/8%</span> of maximum
                    health during Exorcism, it will die instantly.
                  </p>
                  {/* <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 2:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 200 damage and pulling them back to the caster. 600 range.</p>
                     <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 3:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 300 damage and pulling them back to the caster. 800 range.</p>
                     <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 4:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 400 damage and pulling them back to the caster. 1000 range.</p> */}
                  <p class="ability-description">
                    <span class="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 14</span>{" "}
                  </p>
                </div>
              </div>
              <div className="ability">
                <img
                  src={images["Konrad2.png"]}
                  alt="Ability 1"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Cleansed by Fire</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Grand Inquisitor
                    invokes Holy Fire to cleanse friendly unit, healing it for{" "}
                    <span className="rank-gold">70/140/210/280</span> and
                    removing all debuffs from it.
                  </p>
                  <p class="ability-description">
                    <span class="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 13</span>{" "}
                  </p>
                </div>
              </div>
              <div className="ability">
                <img
                  src={images["Konrad3.png"]}
                  alt="Ability 1"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Crusader Aura</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Increases the
                    movement speed of nearby friendly units by{" "}
                    <span className="rank-gold">4%/8%/10%/16%</span>.In
                    addition, every 20 seconds, Grand Inquisitor will get
                    Truesight ability for 3 seconds, allowing him to detect
                    invisible units.
                  </p>
                  <p class="ability-description">
                    <span class="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: Aura</span>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="ultimate-container">
              <h2 class="ultimate-ability-name">ULTIMATE</h2>
              <div class="left-column">
                <img
                  src={images["KonradUlti.png"]}
                  alt="Ultimate Ability"
                  class="ultimate-icon"
                />
                <div class="text-container">
                  <h3 class="ultimate-name">Burn the Heretic</h3>
                  {/* <p className="ability-description"><span className='bullet-point'>•</span> Ultimate description goes here, explaining what the ability does.</p> */}
                </div>
              </div>
              <div class="right-column">
                <div class="ultimate-background-color-mix">
                  <p class="ability-description">
                    <span class="bullet-point">•</span> Grand Inquisitor has a
                    special attack that will burn hero unit he attacks next,
                    dealing <span className="rank-gold">100/200/300</span>{" "}
                    damage each second for 3 seconds and silencing target over
                    thatt time. This attack has cooldown of 14/12/10 seconds.{" "}
                  </p>
                  <p class="ability-description">
                    <span class="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 14/12/10</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="dota-hero-container">
            <div className="hero-header">
              <img
                src={images["KaelModel.png"]}
                alt="Kael"
                className="hero-image"
              />
              <div className="hero-text">
                <h1 className="hero-name">KAEL - BLOOD MAGE</h1>
                <p className="hero-description">
                  A master of forbidden arts, Kael sacrifices his own lifeblood
                  to conjure devastating flames, unleash arcane power, and
                  summon creatures of fire. Though each spell drains him, his
                  relentless hunger for destruction makes him one of the most
                  feared mages in existence.
                </p>
              </div>
            </div>

            <div className="hero-abilities">
              <h2 className="hero-ability-name">ABILITIES</h2>

              {/* Ability 1 */}
              <div className="ability">
                <img
                  src={images["Kael1.png"]}
                  alt="Ability 1"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Bloodfire</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Blood Mage conjures
                    a massive fiery orb from his own blood, dealing{" "}
                    <span className="rank-gold">100/200/300/400</span> damage to
                    enemies and stunning them for 1 second. However, he suffers
                    half the damage dealt (
                    <span className="rank-gold">50/100/150/200</span>).
                  </p>
                  <p className="ability-description">
                    <span className="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 12</span>
                  </p>
                  <p className="ability-description">
                    <span className="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Mana Cost: 125</span>
                  </p>
                </div>
              </div>

              {/* Ability 2 */}
              <div className="ability">
                <img
                  src={images["Kael2.png"]}
                  alt="Ability 2"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Arcane Barrage</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Releases a barrage
                    of arcane bolts, striking all enemies within 450 range for
                    <span className="rank-gold">70/140/210/280</span> damage
                    each.
                  </p>
                  <p className="ability-description">
                    <span className="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 8</span>
                  </p>
                  <p className="ability-description">
                    <span className="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">
                      Mana Cost: 75/100/125/150
                    </span>
                  </p>
                </div>
              </div>

              {/* Ability 3 */}
              <div className="ability">
                <img
                  src={images["Kael3.png"]}
                  alt="Ability 3"
                  className="ability-icon"
                />
                <div className="ability-text">
                  <h3 className="ability-name">Phoenix</h3>
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Summons a Phoenix
                    with
                    <span className="rank-gold">600/800/1000/1200 HP</span>,
                    dealing{" "}
                    <span className="rank-gold">20–30/30–40/40–50/50–60</span>{" "}
                    magic damage and
                    <span className="rank-gold">2/3/4/5 armor</span>. The
                    Phoenix loses health over time, but when slain, it spawns an
                    egg that hatches into a new Phoenix.
                  </p>
                  <p className="ability-description">
                    <span className="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 35</span>
                  </p>
                  <p className="ability-description">
                    <span className="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">
                      Mana Cost: 140/180/220/260
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Ultimate */}
            <div className="ultimate-container">
              <h2 className="ultimate-ability-name">ULTIMATE</h2>
              <div className="left-column">
                <img
                  src={images["KaelUlti.png"]}
                  alt="Ultimate Ability"
                  className="ultimate-icon"
                />
                <div className="text-container">
                  <h3 className="ultimate-name">Amplify Magic</h3>
                </div>
              </div>
              <div className="right-column">
                <div className="ultimate-background-color-mix">
                  <p className="ability-description">
                    <span className="bullet-point">•</span> Blood Mage curses a
                    targeted unit with Amplify Magic, increasing spell damage
                    taken by <span className="rank-gold">30%/40%/50%</span> for
                    15 seconds.
                  </p>
                  <p className="ability-description">
                    <span className="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">Cooldown: 45</span>
                  </p>
                  <p className="ability-description">
                    <span className="bullet-point">•</span>{" "}
                    <span className="cooldown-blue">
                      Mana Cost: 100/150/200
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="dota-hero-container">
  <div className="hero-header">
    <img src={images['KhajiitModel.png']} alt="Khajiit" className="hero-image" />
    <div className="hero-text">
      <h1 className="hero-name">KHAJIIT - TIGERIAN SLICER</h1>
      <p className="hero-description">
        Born under the silver moon, Khajiit is a Tigerian warrior whose agility and ferocity strike fear into his foes. 
        Harnessing the essence of the moon, he burns mana, leaps across the battlefield, and unleashes deadly combos that overwhelm even the strongest of enemies. 
        When he enters his frenzied assault, no foe escapes his claws.
      </p>
    </div>
  </div>

  <div className="hero-abilities">
    <h2 className="hero-ability-name">ABILITIES</h2>

    {/* Ability 1 */}
    <div className="ability">
      <img src={images['Khajiit1.png']} alt="Ability 1" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Mana Burn</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Sends a bolt of negative energy that burns the target’s mana. 
          Burned mana combusts, dealing equal damage to the target.
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> Burns <span className="rank-gold">65/130/195/260</span> mana.
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 7</span>
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 60/80/100/120</span>
        </p>
      </div>
    </div>

    {/* Ability 2 */}
    <div className="ability">
      <img src={images['Khajiit2.png']} alt="Ability 2" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Leap</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Khajiit leaps to a target point, striking enemies upon impact for 
          <span className="rank-gold">200</span> damage.
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> Leap range: 
          <span className="rank-gold">400/600/800/1000</span>.
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 20</span>
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 100</span>
        </p>
      </div>
    </div>

    {/* Ability 3 */}
    <div className="ability">
      <img src={images['Khajiit3.png']} alt="Ability 3" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Moon Strike</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Khajiit’s attacks have a 20% chance to call upon the power of the moon, 
          dealing bonus magical damage and briefly stunning the target.
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> Bonus damage: 
          <span className="rank-gold">60/120/180/240</span>.
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> <span className="cooldown-blue">Passive</span>
        </p>
      </div>
    </div>
  </div>

  {/* Ultimate */}
  <div className="ultimate-container">
    <h2 className="ultimate-ability-name">ULTIMATE</h2>
    <div className="left-column">
      <img src={images['KhajiitUlti.png']} alt="Ultimate Ability" className="ultimate-icon" />
      <div className="text-container">
        <h3 className="ultimate-name">Tigerian Assault</h3>
      </div>
    </div>
    <div className="right-column">
      <div className="ultimate-background-color-mix">
        <p className="ability-description">
          <span className="bullet-point">•</span> Khajiit enters a feral frenzy, slicing through his enemies in a flurry of attacks. 
          He strikes <span className="rank-gold">4/6/8</span> times, rapidly slashing multiple targets.
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 90</span>
        </p>
        <p className="ability-description">
          <span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 100/150/200</span>
        </p>
      </div>
    </div>
  </div>
</div>
     <div className="dota-hero-container">
  <div className="hero-header">
    <img src={images['VoldoModel.png']} alt="Voldo" className="hero-image" />
    <div className="hero-text">
      <h1 className="hero-name">VOLDO - VOIDCRAWLER</h1>
      <p className="hero-description">
        Emerging from the abyss between realities, Voldo is a phantom assassin who manipulates the void to
        confuse, torment, and destroy his enemies. With every strike, he tears rifts in space, spawning illusions 
        of himself to overwhelm his prey. Few can withstand his relentless assault, and fewer still can escape
        once he vanishes into the shadows of the void.
      </p>
    </div>
  </div>

  <div className="hero-abilities">
    <h2 className="hero-ability-name">ABILITIES</h2>

    {/* Ability 1 */}
    <div className="ability">
      <img src={images['Voldo1.png']} alt="Ability 1" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Faceless Macabre</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Voldo lashes out with his twin katars, 
          dealing <span className="rank-gold">80/160/240/320 + Agility</span> damage and mini-stunning the target.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 11</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 80/100/120/140</span></p>
      </div>
    </div>

    {/* Ability 2 */}
    <div className="ability">
      <img src={images['Voldo2.png']} alt="Ability 2" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Riftwalk</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> On attack, Voldo has a chance to phase through the void and 
          reappear behind his target, dealing AoE damage within 250 radius. Works on illusions.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Chance: <span className="rank-gold">5%/10%/15%/20%</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> AoE Damage: <span className="rank-gold">40/80/120/160</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Passive</span></p>
      </div>
    </div>

    {/* Ability 3 */}
    <div className="ability">
      <img src={images['Voldo3.png']} alt="Ability 3" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Voidweaver</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Harnessing void energy, Voldo has a 20% chance on attack to 
          summon an illusion of himself that lasts 7 seconds.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Illusion deals <span className="rank-gold">5%/10%/15%/20%</span> of Voldo’s damage.</p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Passive</span></p>
      </div>
    </div>
  </div>

  {/* Ultimate */}
  <div className="ultimate-container">
    <h2 className="ultimate-ability-name">ULTIMATE</h2>
    <div className="left-column">
      <img src={images['VoldoUlti.png']} alt="Ultimate Ability" className="ultimate-icon" />
      <div className="text-container">
        <h3 className="ultimate-name">Asylum Breakout</h3>
      </div>
    </div>
    <div className="right-column">
      <div className="ultimate-background-color-mix">
        <p className="ability-description">
          <span className="bullet-point">•</span> Voldo becomes one with the void, slipping into invisibility every 3 seconds. 
          Each time he vanishes, he leaves behind an illusion lasting 7 seconds that deals 20% of his total damage.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Turns invisible <span className="rank-gold">3/4/5</span> times per cast.</p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 60</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 125/150/175</span></p>
      </div>
    </div>
  </div>
</div>
<div className="dota-hero-container">
  <div className="hero-header">
    <img src={images['CadorModel.png']} alt="Cador" className="hero-image" />
    <div className="hero-text">
      <h1 className="hero-name">CADOR - DEATH KNIGHT</h1>
      <p className="hero-description">
        Once a noble paladin, Cador fell to the corruption of the Runeblade, becoming a Death Knight bound to Blood, Plague, and Frost. 
        Harnessing unholy powers, he strikes fear and despair into all who stand before him, cutting down his foes with relentless precision. 
        His mastery of the three runes makes him a versatile warrior capable of crippling, rotting, and freezing his enemies before finishing them with his ultimate strike.
      </p>
    </div>
  </div>

  <div className="hero-abilities">
    <h2 className="hero-ability-name">ABILITIES</h2>

    {/* Ability 1 */}
    <div className="ability">
      <img src={images['Cador1.png']} alt="Blood Strike" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Blood Strike (Q)</h3>
        <p className="ability-description"><span className="bullet-point">•</span> Strikes target with runeblade empowered by Blood, dealing damage and reducing their outgoing damage for 6 seconds.</p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage: <span className="rank-gold">100/150/200/250</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage Reduction: <span className="rank-gold">10%/15%/20%/25%</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 9</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 60/70/80/90</span></p>
      </div>
    </div>

    {/* Ability 2 */}
    <div className="ability">
      <img src={images['Cador2.png']} alt="Plague Strike" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Plague Strike (W)</h3>
        <p className="ability-description"><span className="bullet-point">•</span> Infuses his blade with plague, dealing initial damage and damage over time for 6 seconds.</p>
        <p className="ability-description"><span className="bullet-point">•</span> Initial Damage: <span className="rank-gold">60/80/100/120</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> DoT: <span className="rank-gold">10/15/20/25 per second</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 8</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 55/65/75/85</span></p>
      </div>
    </div>

    {/* Ability 3 */}
    <div className="ability">
      <img src={images['Cador3.png']} alt="Frost Strike" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Frost Strike (E)</h3>
        <p className="ability-description"><span className="bullet-point">•</span> Cador empowers his blade with frost, slowing enemy movement and attack speed on hit for 3 seconds.</p>
        <p className="ability-description"><span className="bullet-point">•</span> Movement Slow: <span className="rank-gold">10%/20%/30%/40%</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Attack Speed Reduction: <span className="rank-gold">5%/10%/15%/20%</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">On-Hit Effect</span></p>
      </div>
    </div>
  </div>

  {/* Ultimate */}
  <div className="ultimate-container">
    <h2 className="ultimate-ability-name">ULTIMATE</h2>
    <div className="left-column">
      <img src={images['CadorUlti.png']} alt="Rune Strike" className="ultimate-icon" />
      <div className="text-container">
        <h3 className="ultimate-name">Rune Strike (R)</h3>
      </div>
    </div>
    <div className="right-column">
      <div className="ultimate-background-color-mix">
        <p className="ability-description"><span className="bullet-point">•</span> Unleashes the full power of his Runeblade, dealing base damage and bonus damage for each active rune strike (Blood, Plague, Frost) still on the target. Heals for bonus damage dealt. Stuns for 1 second.</p>
        <p className="ability-description"><span className="bullet-point">•</span> Base Damage: <span className="rank-gold">100/200/300</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Bonus Damage per Rune: <span className="rank-gold">50/100/150</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 30</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 100</span></p>
      </div>
    </div>
  </div>
</div>
    <div className="dota-hero-container">
  <div className="hero-header">
    <img src={images['ThrogrimModel.png']} alt="Throgrim" className="hero-image" />
    <div className="hero-text">
      <h1 className="hero-name">THROGRIM - ENGINEER</h1>
      <p className="hero-description">
        A master of invention and explosive warfare, Throgrim constructs deadly contraptions that dominate the battlefield. 
        With cunning precision, he deploys turrets, barricades, and devastating bombs, turning any ground into a fortress. 
        His expertise in mechanics makes him a relentless defender and an overwhelming force in siege combat.
      </p>
    </div>
  </div>

  <div className="hero-abilities">
    <h2 className="hero-ability-name">ABILITIES</h2>

    {/* Ability 1 */}
    <div className="ability">
      <img src={images['Throgrim1.png']} alt="Ability 1" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Napalm Bomb</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Throgrim hurls a Napalm Bomb at the target area, stunning enemies for 
          1 second and scorching the ground. Enemies caught take burning damage over 10 seconds.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage per second: <span className="rank-gold">14/26/38/50</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Duration: <span className="rank-gold">10 seconds</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 15</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 140</span></p>
      </div>
    </div>

    {/* Ability 2 */}
    <div className="ability">
      <img src={images['Throgrim2.png']} alt="Ability 2" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Setup Turret</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Deploys a mechanical turret at Throgrim’s position, firing at enemies 
          every second. A maximum of 5 turrets can exist at a time.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Turret HP: <span className="rank-gold">75/150/225/300</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage: <span className="rank-gold">9/17/25/33</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 15</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 60</span></p>
      </div>
    </div>

    {/* Ability 3 */}
    <div className="ability">
      <img src={images['Throgrim3.png']} alt="Ability 3" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Barricade</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Constructs barricades at the target location, each with 500 health 
          and 5 medium armor, blocking enemy movement. Barricades last 10 seconds.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Number of Barricades: <span className="rank-gold">3/6/9/12</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 18</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 135</span></p>
      </div>
    </div>
  </div>

  {/* Ultimate */}
  <div className="ultimate-container">
    <h2 className="ultimate-ability-name">ULTIMATE</h2>
    <div className="left-column">
      <img src={images['ThrogrimUlti.png']} alt="Ultimate Ability" className="ultimate-icon" />
      <div className="text-container">
        <h3 className="ultimate-name">Mine Field</h3>
      </div>
    </div>
    <div className="right-column">
      <div className="ultimate-background-color-mix">
        <p className="ability-description">
          <span className="bullet-point">•</span> Deploys a deadly Mine Field at the target area, spawning Land Mines every 4 seconds. 
          Mines explode when enemies approach, dealing 200 damage in a 300 AoE.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Mines: <span className="rank-gold">3/5/7</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> AoE Damage: <span className="rank-gold">200</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 25</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 100/150/200</span></p>
      </div>
    </div>
  </div>
</div>
<div className="dota-hero-container">
  <div className="hero-header">
    <img src={images['LazarusModel.png']} alt="Lazarus" className="hero-image" />
    <div className="hero-text">
      <h1 className="hero-name">LAZARUS – ARCHBISHOP</h1>
      <p className="hero-description">
        A divine archbishop who wields both holy and arcane powers to dominate the battlefield. 
        Lazarus blinds his enemies, petrifies them with curses, and moves freely with teleportation. 
        His fiery judgment empowers his attacks, burning all who oppose the light.
      </p>
    </div>
  </div>

  <div className="hero-abilities">
    <h2 className="hero-ability-name">ABILITIES</h2>

    {/* Ability 1 */}
    <div className="ability">
      <img src={images['Lazarus1.png']} alt="Ability 1" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Flash</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Emits a blinding flash of light, damaging and slowing nearby enemies.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage: <span className="rank-gold">60/120/180/240</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Slow: <span className="rank-gold">5% / 10% / 15% / 20%</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 13</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 90/110/130/150</span></p>
      </div>
    </div>

    {/* Ability 2 */}
    <div className="ability">
      <img src={images['Lazarus2.png']} alt="Ability 2" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Stone Curse</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Petrifies the target, disabling them for a short duration.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Duration: <span className="rank-gold">1 / 1.75 / 2.5 / 3.25 seconds</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 20</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 110/130/150/170</span></p>
      </div>
    </div>

    {/* Ability 3 */}
    <div className="ability">
      <img src={images['Lazarus3.png']} alt="Ability 3" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Teleport</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Teleports a short distance, allowing Lazarus to move in or out of combat instantly.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Cooldown: <span className="rank-gold">12 / 9 / 7 / 5 seconds</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 60</span></p>
      </div>
    </div>
  </div>

  {/* Ultimate */}
  <div className="ultimate-container">
    <h2 className="ultimate-ability-name">ULTIMATE</h2>
    <div className="left-column">
      <img src={images['LazarusUlti.png']} alt="Ultimate Ability" className="ultimate-icon" />
      <div className="text-container">
        <h3 className="ultimate-name">Fireball</h3>
      </div>
    </div>
    <div className="right-column">
      <div className="ultimate-background-color-mix">
        <p className="ability-description">
          <span className="bullet-point">•</span> On toggle, imbues his attacks with blazing fireballs, dealing bonus damage on hit.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Bonus Damage: <span className="rank-gold">40 / 80 / 120</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 0</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 25</span></p>
        <p className="ability-description" style={{ color: 'red' }}>
        </p>
      </div>
    </div>
  </div>
</div>
 <div className="dota-hero-container">
  <div className="hero-header">
    <img src={images['SiegfriedModel.png']} alt="Siegfried" className="hero-image" />
    <div className="hero-text">
      <h1 className="hero-name">SIEGFRIED – PALADIN</h1>
      <p className="hero-description">
        A holy knight blessed with divine power, Siegfried protects his allies and smites his enemies 
        with radiant force. His sacred storm slows foes, his judgment stuns the wicked, and his shield 
        renders him invulnerable. When invoking Avenging Wrath, he becomes an unstoppable avatar of light, 
        striking with overwhelming might.
      </p>
    </div>
  </div>

  <div className="hero-abilities">
    <h2 className="hero-ability-name">ABILITIES</h2>

    {/* Ability 1 */}
    <div className="ability">
      <img src={images['Siegfried1.png']} alt="Ability 1" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Divine Storm</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Siegfried swings his sword infused with holy power, 
          creating a storm that damages and slows all enemies in a wide area for 4 seconds.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage: <span className="rank-gold">100 / 175 / 250 / 300</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Slow: <span className="rank-gold">15% / 20% / 25% / 30%</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 14</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 70 / 90 / 110 / 130</span></p>
      </div>
    </div>

    {/* Ability 2 */}
    <div className="ability">
      <img src={images['Siegfried2.png']} alt="Ability 2" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Judgement of Light</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Strikes a target with holy power, dealing multiplied 
          damage based on Siegfried's Strength. If the target is under Divine Storm’s effect, it is stunned 
          for 2 seconds.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage: <span className="rank-gold">2x / 3x / 4x / 5x Strength</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Stun Duration (if affected by Divine Storm): <span className="rank-gold">2 seconds</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 13</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 125</span></p>
      </div>
    </div>

    {/* Ability 3 */}
    <div className="ability">
      <img src={images['Siegfried3.png']} alt="Ability 3" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Divine Shield</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Siegfried becomes immune to all damage and spells for a 
          short duration.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Duration: <span className="rank-gold">1 / 2 / 3 / 4 seconds</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 20</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 125</span></p>
      </div>
    </div>
  </div>

  {/* Ultimate */}
  <div className="ultimate-container">
    <h2 className="ultimate-ability-name">ULTIMATE</h2>
    <div className="left-column">
      <img src={images['SiegfriedUlti.png']} alt="Ultimate Ability" className="ultimate-icon" />
      <div className="text-container">
        <h3 className="ultimate-name">Avenging Wrath</h3>
      </div>
    </div>
    <div className="right-column">
      <div className="ultimate-background-color-mix">
        <p className="ability-description">
          <span className="bullet-point">•</span> Siegfried ascends as the Avatar of Heavens, greatly 
          increasing his attack damage for 20 seconds.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Bonus Damage: <span className="rank-gold">100% / 125% / 150%</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 100</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 100 / 150 / 200</span></p>
      </div>
    </div>
  </div>
</div>
<div className="dota-hero-container">
  <div className="hero-header">
    <img src={images['BrutusModel.png']} alt="Brutus" className="hero-image" />
    <div className="hero-text">
      <h1 className="hero-name">BRUTUS – GLADIATOR</h1>
      <p className="hero-description">
        A battle-hardened warrior forged in the arenas, Brutus thrives in relentless combat. 
        With unyielding resilience and brutal strikes, he crushes his enemies with sheer force. 
        His mastery of boulders, crushing blows, and ensnaring techniques make him a relentless 
        predator who dominates the battlefield.
      </p>
    </div>
  </div>

  <div className="hero-abilities">
    <h2 className="hero-ability-name">ABILITIES</h2>

    {/* Ability 1 */}
    <div className="ability">
      <img src={images['Brutus1.png']} alt="Ability 1" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Rolling Boulder</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Hurls a massive boulder that rolls forward, damaging all enemies in its path.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage: <span className="rank-gold">75 / 150 / 225 / 300</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 8</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 75 / 85 / 95 / 105</span></p>
      </div>
    </div>

    {/* Ability 2 */}
    <div className="ability">
      <img src={images['Brutus2.png']} alt="Ability 2" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Resilience</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Hardened by countless arena battles, Brutus takes reduced incoming damage.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Damage Reduction: <span className="rank-gold">4% / 8% / 12% / 16%</span></p>
      </div>
    </div>

    {/* Ability 3 */}
    <div className="ability">
      <img src={images['Brutus3.png']} alt="Ability 3" className="ability-icon" />
      <div className="ability-text">
        <h3 className="ability-name">Furious Blow</h3>
        <p className="ability-description">
          <span className="bullet-point">•</span> Brutus' attacks have a chance to deal bonus damage and stun the enemy for 1 second.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Chance: <span className="rank-gold">10% / 15% / 20% / 25%</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Bonus Damage: <span className="rank-gold">40 / 50 / 60 / 70</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> Stun Duration: <span className="rank-gold">1 second</span></p>
      </div>
    </div>
  </div>

  {/* Ultimate */}
  <div className="ultimate-container">
    <h2 className="ultimate-ability-name">ULTIMATE</h2>
    <div className="left-column">
      <img src={images['BrutusUlti.png']} alt="Ultimate Ability" className="ultimate-icon" />
      <div className="text-container">
        <h3 className="ultimate-name">Ensnare</h3>
      </div>
    </div>
    <div className="right-column">
      <div className="ultimate-background-color-mix">
        <p className="ability-description">
          <span className="bullet-point">•</span> Throws a massive net, binding the target to the ground and preventing escape.
        </p>
        <p className="ability-description"><span className="bullet-point">•</span> Duration: <span className="rank-gold">4 / 5 / 6 seconds</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Cooldown: 40 / 35 / 30</span></p>
        <p className="ability-description"><span className="bullet-point">•</span> <span className="cooldown-blue">Mana Cost: 50</span></p>
      </div>
    </div>
  </div>
</div>

















        </div>
      </div>
    </div>
  );
};

export default FinalBattleBlog;
