import { html } from '../node_modules/lit-html/lit-html.js'


export default ({ navigationHandler }) =>
  html`
  
  <div class="crew-page-wrapper" href='/crewSpecialist'>
    <div class="crew-information-wrapper">
      <span class="meet-your-crew-heading"><span class="meet-crew-span">02</span> Meet your crew</span>
  
      <span class="crew-job-title">Mission Specialist</span>
      <span class="crew-name">Mark Shuttleworth</span>
  
      <p class="crew-description">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
          the Linux-based Ubuntu operating system. Shuttleworth became the first South 
          African to travel to space as a space tourist.
      </p>
  
      <div class="crew-navigation-wrapper" @click=${navigationHandler}>
        
          <a class="crew-navigation-link-items" href="/crewRoot"></a>
          <a  class="crew-navigation-link-items" href="/crewSpecialist"></a>
          <a  class="crew-navigation-link-items" href="/crewPilot"></a>
          <a  class="crew-navigation-link-items" href="/crewEnginee"></a>
      </div>
    </div>
  
    <img class="crew-img" src='../assets/crew/image-mark-shuttleworth.png'>
  </div>

`