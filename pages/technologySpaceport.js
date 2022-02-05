import { html } from '../node_modules/lit-html/lit-html.js'

export default ({ navigationHandler }) =>
  html`
  
  <div class="technology-page-wrapper" href='/spacePort'>
        <span class="meet-your-crew-heading"><span class="meet-crew-span">03</span>Space launch 101</span>
        <div class="technology-information-wrapper">
            <div class='technology-info-navigation-wrapper'>
                <span class="technolgy-title">The terminology...</span>
                <span class="technolgy-type">Spaceport</span>
            
                <p class="technology-description">
                A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                by analogy to the seaport for ships or airport for aircraft. Based in the 
                famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                of the Earth’s rotation for launch.
                </p>
            </div>
            
                <div class="technology-navigation-wrapper" @click=${navigationHandler}>
                    
                            <a class='technology-navigation-link-items' href="/technologyRoot">1</a>
                            <a class='technology-navigation-link-items' href="/spacePort">2</a>
                            <a class='technology-navigation-link-items' href="/technologyCapsule">3</a>
                </div>
           
        </div>
 
        <div class='technology-img-wrapper'>
                <img class="technology-img" src='../assets/technology/image-spaceport-portrait.jpg'>
        </div>
  </div>
`

















