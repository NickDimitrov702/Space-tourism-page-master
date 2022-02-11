import { html, render } from '../../node_modules/lit-html/lit-html.js'



export default ({
  navigationHandler
}) =>
  html`
  <!-- <link rel="stylesheet" type="text/css" href="./destinationStyle.css"> -->
  <div class="destination-style" href='/mars'>
    <section class="destination-header-plannetImg-wrapper">
      <span class="pick-destination"><span class="span-item">01</span> Pick your destination</span>
      <img class="planets-img" src='../assets/destination/image-mars.png'>
    </section>
  

    <div class="planets-wrapper">
      <ul class="planets-navigation"  @click=${navigationHandler} >
        <li class="planets-navigation-list-items"><a href="/moon"> Moon</a></li>
        <li class="planets-navigation-list-items"><a href="/mars"> Mars</a></li>
        <li class="planets-navigation-list-items"><a href="/europa">Europa</a></li>
        <li class="planets-navigation-list-items"><a href="/titan"> Titan</a></li>
      </ul>

      <h2 class="plannet-heading">Mars</h2>
  
      <p class="planet-description">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
        the tallest planetary mountain in our solar system. It’s two and a half times
        the size of Everest!
      </p>

      <div id="line-effect-destination">

      <footer class="footer-wrapper">
        <div class="distace-wrapper">
          <span class="distance-items">distance</span>
          <span class="distance-items-result">225 mil. km</span>
        </div>
        <div class="travle-time-wrapper">
          <span class="distance-items">Est. travel time</span>
          <span class="distance-items-result">9 months</span>
        </div>
      </footer>
  
    </div>
  </div>
  
  
  </div>

`