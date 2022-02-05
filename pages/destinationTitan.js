import { html, render } from '../node_modules/lit-html/lit-html.js'



export default ({navigationHandler}) =>

  html`

<div class="destination-style" href='/titan'>
    <section class="destination-header-plannetImg-wrapper">
      <span class="pick-destination"><span class="span-item">01</span> Pick your destination</span>
      <img class="planets-img" src='../assets/destination/image-titan.png'>
    </section>


    <div class="planets-wrapper">
      <ul class="planets-navigation" @click=${navigationHandler}>
        <li class="planets-navigation-list-items"><a href="/moon"> Moon</a></li>
        <li class="planets-navigation-list-items"><a href="/mars"> Mars</a></li>
        <li class="planets-navigation-list-items"><a href="/europa">Europa</a></li>
        <li class="planets-navigation-list-items"><a href="/titan"> Titan</a></li>
      </ul>

      <h2 class="plannet-heading">Titan</h2>

      <p class="planet-description"> 
         
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
      </p>

      <div id="line-effect-destination">

        <footer class="footer-wrapper">
          <div class="distace-wrapper">
            <span class="distance-items"> Avg. distance</span>
            <span class="distance-items-result">1.6 bil. km</span>
          </div>
          <div class="travle-time-wrapper">
            <span class="distance-items">Est. travel time</span>
            <span class="distance-items-result">7 years</span>
          </div>
        </footer>

      </div>
    </div>
  </div>

<body>

  00 Home
  01 Destination
  02 Crew
  03 Technology

  01 Pick your destination

  Moon
  Mars
  Europa
  Titan

  Titan


  Avg. distance
  1.6 bil. km

  Est. travel time

</body>

</html>

`

