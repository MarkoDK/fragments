import React from 'react';
import './../../../../App.css'

const FinalBattleBlog = () => {

    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => {
          const key = item.replace('./', '');
          images[key] = r(item);
        });
        return images;
      };
    
      const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



      return (
        <div className="blog-container">
          <div className="blog-content">
            <div>
              <h1 className="title-container">Final battle - My personal MOBA from back in 2008</h1>
            </div>
            <div className='inner-border'>
              <div className="dota-hero-container">
                <div className="hero-header">
                  <img src={images['FortinBrasModel.png']} alt="Fortinbras" className="hero-image" />
                  <div className="hero-text">
                    <h1 className="hero-name">FORTINBRAS - NETHERLORD</h1>
                    <p className="hero-description">Transforming his hands into massive tentacles used to pull his victims towards him while they are burned by the very flames of the Nether, Fortinbras is greatly feared by the forces of light.</p>
                  </div>
                </div>
                <div className="hero-abilities">
                  <h2 className='hero-ability-name'>ABILITIES</h2>
                  <div className="ability">
                    <img src={images['Fortin1.png']} alt="Ability 1" className="ability-icon" />
                    <div className="ability-text">
                      <h3 className="ability-name">Tentacle Grip</h3>
                      <p className="ability-description"><span className='bullet-point'>•</span> Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing <span className='rank-gold'>100/200/300/400</span> damage and pulling them back to the caster with <span className='rank-gold'>400/600/800/1000</span> range.
                      </p>
                     {/* <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 2:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 200 damage and pulling them back to the caster. 600 range.</p>
                     <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 3:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 300 damage and pulling them back to the caster. 800 range.</p>
                     <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 4:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 400 damage and pulling them back to the caster. 1000 range.</p> */}
                    <p class="ability-description"><span class='bullet-point'>•</span> <span className='cooldown-blue'>Cooldown: 14</span> </p>
                    </div>
                  </div>
                  <div className="ability">
                    <img src={images['Fortin2.png']} alt="Ability 1" className="ability-icon" />
                    <div className="ability-text">
                      <h3 className="ability-name">Nether Flames</h3>
                      <p className="ability-description"><span className='bullet-point'>•</span> Netherlord unleashes <span className='rank-gold'>4/6/8/10</span> wicked flames that burn enemy units, each dealing 25 damage. As flames return to Netherlord, they heal him for 30% damage they did.
                      </p>
                      <p class="ability-description"><span class='bullet-point'>•</span> <span className='cooldown-blue'>Cooldown: 14</span> </p>
                    </div>
                  </div>
                  <div className="ability">
                    <img src={images['Fortin3.png']} alt="Ability 1" className="ability-icon" />
                    <div className="ability-text">
                      <h3 className="ability-name">Soul Reap</h3>
                      <p className="ability-description"><span className='bullet-point'>•</span> Whenever Netherlord deals a killing blow to enemy hero, victim will suffer <span className='rank-gold'>-0.5/-1/-1.5/-2</span> to all stats penality.</p>
                      <p class="ability-description"><span class='bullet-point'>•</span> <span className='cooldown-blue'>Cooldown: Passive</span> </p>
                    </div>
                  </div>
                </div>
                <div class="ultimate-container">
    <h2 class='ultimate-ability-name'>ULTIMATE</h2>
    <div class="left-column">
        <img src={images['FortinUlti.png']} alt="Ultimate Ability" class="ultimate-icon" />
        <div class="text-container">
            <h3 class='ultimate-name'>Demonic Circle</h3>
            {/* <p className="ability-description"><span className='bullet-point'>•</span> Ultimate description goes here, explaining what the ability does.</p> */}
        </div>
    </div>
    <div class="right-column">
        <div class="ultimate-background-color-mix">
            <p class="ability-description"><span class='bullet-point'>•</span> Summons a circle of 6 tentacles around your target that attack nearby targets each second. Lasts 3 seconds, <span className='rank-gold'>15/24/33</span> pure damage each.</p>
            <p class="ability-description"><span class='bullet-point'>•</span> <span className='cooldown-blue'>Cooldown: 30</span> </p>
        </div>
    </div>
</div>
              </div>

              <div className="dota-hero-container">
                <div className="hero-header">
                  <img src={images['KonradModel.png']} alt="Fortinbras" className="hero-image" />
                  <div className="hero-text">
                    <h1 className="hero-name">KONRAD VON MARBURG - GRAND INQUISITOR</h1>
                    <p className="hero-description">With an ability to exorcise evil force from his target by setting him ablaze, healing and cleansing allies and burning every single heretic in his path, Konrad von Marburg is one of the Empire's greatest champions. 
                    </p>
                  </div>
                </div>
                <div className="hero-abilities">
                  <h2 className='hero-ability-name'>ABILITIES</h2>
                  <div className="ability">
                    <img src={images['Konrad1.png']} alt="Ability 1" className="ability-icon" />
                    <div className="ability-text">
                      <h3 className="ability-name">Exorcism</h3>
                      <p className="ability-description"><span className='bullet-point'>•</span> Grand Inquisitor attempts to banish evil by setting targeted unit ablaze, forcing it to take <span className='rank-gold'>6/12/18/24</span> damage each second for 10 seconds. If unit has less than <span className='rank-gold'>2%/4%/6%/8%</span> of maximum health during Exorcism, it will die instantly.
                      </p>
                     {/* <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 2:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 200 damage and pulling them back to the caster. 600 range.</p>
                     <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 3:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 300 damage and pulling them back to the caster. 800 range.</p>
                     <p className='ability-description'><span className='bullet-point'>•</span>  <span className='rank-gold'>Rank 4:</span>  Netherlord transforms his hand into massive tentacles and streaches them at the target location. Tentacles will impale the first target they encounter, dealing 400 damage and pulling them back to the caster. 1000 range.</p> */}
                    <p class="ability-description"><span class='bullet-point'>•</span> <span className='cooldown-blue'>Cooldown: 14</span> </p>
                    </div>
                  </div>
                  <div className="ability">
                    <img src={images['Konrad2.png']} alt="Ability 1" className="ability-icon" />
                    <div className="ability-text">
                      <h3 className="ability-name">Cleansed by Fire</h3>
                      <p className="ability-description"><span className='bullet-point'>•</span> Grand Inquisitor invokes Holy Fire to cleanse friendly unit, healing it for <span className='rank-gold'>70/140/210/280</span> and removing all debuffs from it.
                      </p>
                      <p class="ability-description"><span class='bullet-point'>•</span> <span className='cooldown-blue'>Cooldown: 13</span> </p>
                    </div>
                  </div>
                  <div className="ability">
                    <img src={images['Konrad3.png']} alt="Ability 1" className="ability-icon" />
                    <div className="ability-text">
                      <h3 className="ability-name">Crusader Aura</h3>
                      <p className="ability-description"><span className='bullet-point'>•</span> Increases the movement speed of nearby friendly units by <span className='rank-gold'>4%/8%/10%/16%</span>.In addition, every 20 seconds, Grand Inquisitor will get Truesight ability for 3 seconds, allowing him to detect invisible units.</p>
                      <p class="ability-description"><span class='bullet-point'>•</span> <span className='cooldown-blue'>Cooldown: Aura</span> </p>
                    </div>
                  </div>
                </div>
                <div class="ultimate-container">
    <h2 class='ultimate-ability-name'>ULTIMATE</h2>
    <div class="left-column">
        <img src={images['KonradUlti.png']} alt="Ultimate Ability" class="ultimate-icon" />
        <div class="text-container">
            <h3 class='ultimate-name'>Burn the Heretic</h3>
            {/* <p className="ability-description"><span className='bullet-point'>•</span> Ultimate description goes here, explaining what the ability does.</p> */}
        </div>
    </div>
    <div class="right-column">
        <div class="ultimate-background-color-mix">
            <p class="ability-description"><span class='bullet-point'>•</span> Grand Inquisitor has a special attack that will burn hero unit he attacks next, dealing  <span className='rank-gold'>100/200/300</span> damage each second for 3 seconds and silencing target over thatt time. This attack has cooldown of 14/12/10 seconds. </p>
            <p class="ability-description"><span class='bullet-point'>•</span> <span className='cooldown-blue'>Cooldown: 14/12/10</span> </p>
        </div>
    </div>
</div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default FinalBattleBlog;



