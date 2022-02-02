import { html, render } from '../node_modules/lit-html/lit-html.js'



export default ({
  navigationHandler
}) =>

  html` 
<div>

  <div class="destination-style" href='/moon'>
    <section class="destination-header-plannetImg-wrapper">
      <span class="pick-destination"><span class="span-item">01</span> Pick your destination</span>
      <img class="planets-img" src='../assets/destination/image-moon.png'>
    </section>


    <div class="planets-wrapper">
      <ul class="planets-navigation" @click=${navigationHandler}>
        <li class="planets-navigation-list-items"><a href="/moon"> Moon</a></li>
        <li class="planets-navigation-list-items"><a href="/mars"> Mars</a></li>
        <li class="planets-navigation-list-items"><a href="/europa">Europa</a></li>
        <li class="planets-navigation-list-items"><a href="/titan"> Titan</a></li>
      </ul>

      <h2 class="plannet-heading">Moon</h2>

      <p class="planet-description"> See our planet as you’ve never seen it before. A perfect relaxing trip away to help
        regain perspective and come back refreshed. While you’re there, take in some history
        by visiting the Luna 2 and Apollo 11 landing sites.
      </p>

      <div id="line-effect-destination">

        <footer class="footer-wrapper">
          <div class="distace-wrapper">
            <span class="distance-items"> Avg. distance</span>
            <span class="distance-items-result">384,400 km</span>
          </div>
          <div class="travle-time-wrapper">
            <span class="distance-items">Est. travel time</span>
            <span class="distance-items-result">3 days</span>
          </div>
        </footer>

      </div>
    </div>
  </div>

</div>


`

