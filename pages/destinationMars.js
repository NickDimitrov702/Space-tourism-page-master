import { html } from '../node_modules/lit-html/lit-html.js'



export default () =>
  html`
  <!-- <link rel="stylesheet" type="text/css" href="./destinationStyle.css"> -->
  <div class="destination-style" href='/destionationMars'>
    <section class="destination-header-plannetImg-wrapper">
      <h1 class="pick-destination">01 Pick your destination</h1>
      <img class="planets-img" src='../assets/destination/image-mars.png'>
    </section>
  
  
    <div class="planets-wrapper">
      <ul class="planets-navigation">
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
      <div class="distace-wrapper">
        Avg. distance
        225 mil. km
      </div>
      <div class="travle-time-wrapper">
        Est. travel time
        9 months
      </div>
    </div>
  </div>
  
  
  </div>

`
