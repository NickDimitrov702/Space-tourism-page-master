import { html } from '../node_modules/lit-html/lit-html.js'

export default () =>
  html`
  
  <div class="crew-page-wrapper">
    <div class="crew-information-wrapper">
      <span class="meet-your-crew-heading"><span class="meet-crew-span">02</span> Meet your crew</span>
  
      <span class="crew-job-title">Pilot</span>
      <span class="crew-name">Victor Glover</span>
  
      <p class="crew-description">Pilot on the first operational flight of the SpaceX Crew Dragon to the
        International Space Station. Glover is a commander in the U.S. Navy where
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
        station systems flight engineer.
      </p>
  
      <div class="crew-navigation-wrapper">
        <div class="crew-navigation-link-items">
          <a href="$1"></a>
        </div>
        <div  class="crew-navigation-link-items">
          <a href="/crew"></a>
        </div>
        <div  class="crew-navigation-link-items">
          <a href="$1"></a>
        </div>
        <div  class="crew-navigation-link-items">
          <a href="$1"></a>
        </div>
      </div>
    </div>
  
    <img class="crew-img" src='../assets/crew/image-victor-glover.png'>
  </div>

`





