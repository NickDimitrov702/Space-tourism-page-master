import { html, render } from '../../node_modules/lit-html/lit-html.js'

export default ({navigationHandler}) =>
  html`

  <div class="destination-style" href='/europa'>
    <section class="destination-header-plannetImg-wrapper">
      <span class="pick-destination"><span class="span-item">01</span> Pick your destination</span>
      <img class="planets-img" src='../assets/destination/image-europa.png'>
    </section>


    <div class="planets-wrapper">
      <ul class="planets-navigation" @click=${navigationHandler}>
        <li class="planets-navigation-list-items"><a href="/moon"> Moon</a></li>
        <li class="planets-navigation-list-items"><a href="/mars"> Mars</a></li>
        <li class="planets-navigation-list-items"><a href="/europa">Europa</a></li>
        <li class="planets-navigation-list-items"><a href="/titan"> Titan</a></li>
      </ul>

      <h2 class="plannet-heading">Europa</h2>

      <p class="planet-description"> 
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
      </p>

      <div id="line-effect-destination">

        <footer class="footer-wrapper">
          <div class="distace-wrapper">
            <span class="distance-items"> Avg. distance</span>
            <span class="distance-items-result">628 mil. km</span>
          </div>
          <div class="travle-time-wrapper">
            <span class="distance-items">Est. travel time</span>
            <span class="distance-items-result">3 years</span>
          </div>
        </footer>

      </div>
    </div>
  </div>


`

