import { html, render } from '../../node_modules/lit-html/lit-html.js'


export default ({ navigationHandler }) =>
  html`
  
  <div class="crew-page-wrapper" href='/crewPilot'>
    <div class="crew-information-wrapper">
      <span class="meet-your-crew-heading"><span class="meet-crew-span">02</span> Meet your crew</span>
  
      <span class="crew-job-title">Pilot</span>
      <span class="crew-name">Victor Glover</span>
  
      <p class="crew-description">
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space. 
      </p>
  
      <div class="crew-navigation-wrapper" @click=${navigationHandler}>
        
          <a class="crew-navigation-link-items" href="/crewRoot"></a>
          <a  class="crew-navigation-link-items" href="/crewSpecialist"></a>
          <a  class="crew-navigation-link-items" href="/crewPilot"></a>
          <a  class="crew-navigation-link-items" href="/crewEngineer"></a>
      </div>
    </div>
  
    <img class="crew-img" src='../assets/crew/image-victor-glover.png'>
  </div>

`

 