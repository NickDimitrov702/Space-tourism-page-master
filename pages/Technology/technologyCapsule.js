import { html, render } from '../../node_modules/lit-html/lit-html.js'

export default ({ navigationHandler }) =>
  html`
  
  <div class="technology-page-wrapper" href='/technologyCapsule'>
        <span class="meet-your-crew-heading"><span class="meet-crew-span">03</span>Space launch 101</span>
        <div class="technology-information-wrapper">
            <div class='technology-info-navigation-wrapper'>
                <span class="technolgy-title">The terminology...</span>
                <span class="technolgy-type">Space capsule</span>
            
                <p class="technology-description">
                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                you'll spend your time during the flight. It includes a space gym, cinema, 
                and plenty of other activities to keep you entertained.
                </p>
            </div>
            
                <div class="technology-navigation-wrapper" @click=${navigationHandler}>
                            <a class='technology-navigation-link-items' href="/technologyRoot">1</a>
                            <a class='technology-navigation-link-items' href="/spacePort">2</a>
                            <a class='technology-navigation-link-items' href="/technologyCapsule">3</a>
                </div>
           
        </div>
 
        <div class='technology-img-wrapper'>
                <img class="technology-img" src='../assets/technology/image-space-capsule-portrait.jpg'>
        </div>
  </div>
`






// <body>

//   00 Home
//   01 Destination
//   02 Crew
//   03 Technology

//   03 Space launch 101

//   1
//   2
//   3

//   The terminology...
//   Space capsule

//  
// </body>
// </html>