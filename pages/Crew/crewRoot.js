import { html, render } from '../../node_modules/lit-html/lit-html.js'

export default ({ navigationHandler }) =>
  html`
  
  <div class="crew-page-wrapper" href='/crewRoot'>
    <div class="crew-information-wrapper">
      <span class="meet-your-crew-heading"><span class="meet-crew-span">02</span> Meet your crew</span>
  
      <span class="crew-job-title">Commander</span>
      <span class="crew-name">Douglas Hurley</span>
  
      <p class="crew-description">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
        and former NASA astronaut. He launched into space for the third time as 
        commander of Crew Dragon Demo-2.
      </p>
  
      <div class="crew-navigation-wrapper" @click=${navigationHandler}>
        
          <a class="crew-navigation-link-items" href="/crewRoot"></a>
          <a  class="crew-navigation-link-items" href="/crewSpecialist"></a>
          <a  class="crew-navigation-link-items" href="/crewPilot"></a>
          <a  class="crew-navigation-link-items" href="/crewEngineer"></a>
      </div>
    </div>
  
    <img class="crew-img" src='../assets/crew/image-douglas-hurley.png'>
  </div>

`





