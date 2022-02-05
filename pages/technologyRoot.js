import { html } from '../node_modules/lit-html/lit-html.js'

export default ({ navigationHandler }) =>
    html`
  
  <div class="technology-page-wrapper" href='/technologyRoot'>
        <span class="meet-your-crew-heading"><span class="meet-crew-span">03</span>Space launch 101</span>
        <div class="technology-information-wrapper">
            <div class='technology-info-navigation-wrapper'>
                <span class="technolgy-title">The terminology...</span>
                <span class="technolgy-type">Launch vehicle</span>
            
                <p class="technology-description">
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it's quite an awe-inspiring sight on the launch pad!
                </p>
            </div>
            
                <div class="technology-navigation-wrapper" @click=${navigationHandler}>
                    
                            <a class='technology-navigation-link-items' href="/launchVehicle"><div class='link-num'>1</div></a>
                            <a class='technology-navigation-link-items' href="/launchVehicle"><div class='link-num'>2</div></a>
                            <a class='technology-navigation-link-items' href="/launchVehicle"><div class='link-num'>3</div></a>
                </div>
           
        </div>
 
        <div class='technology-img-wrapper'>
                <img class="technology-img" src='../assets/technology/image-launch-vehicle-portrait.jpg'>
        </div>
  </div>
`





