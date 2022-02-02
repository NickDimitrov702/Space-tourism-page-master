
import { render } from '../node_modules/lit-html/lit-html.js'

import moon from './destinationMoon.js'
import mars from './destinationMars.js'
import europa from './destinationEuropa.js'
import titan from './destinationTitan.js'
import destinationsLayout from './destinationsLayout.js'

const planetRoutes = [
    {
        path: '/destinationMoon',
        template: moon,
    },

    {
        path: '/destionationMars',
        template: mars,
    },

    {
        path: '/destinationEuropa',
        template: europa,
    },

    
    {
        path: '/destinationTitan',
        template: titan,
    }
]

// I'm using lit-html to render the componenets.
// Simple router having array with routes that includes objects with rout path and the path's template to be rendered
// router functions as a manager of routs, we add a navigationHandler functions so onClick we could navigate to the links withing the NavBar
const router = (path) => {
    // Last time I forgot to compare x.path with path, instead I was comparing path === path :(
    let url = new URL('http://localhost:3000'+`${path}`);
    // history.pushState(null, null, url)
    // Checking isnide the router pathname if it is the same as the page we are on so we can keep the background 
    // for the relevant page the same on refresh.

    // if(url.pathname === '/destionationMars'){
    //     let background = document.getElementById('root')
    //     // setTimeout(background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)', 2000)
    //     background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'

    // } if(url.pathname === '/') {
    //     let background = document.getElementById('root')
    //     background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
    // }

    // if(url.pathname === '/crew') {
    //     let background = document.getElementById('root')
    //     background.style.backgroundImage = 'url(./assets/crew/background-crew-desktop.jpg)'
    // }
    // // You can delete below console.log
    // console.log('http://localhost:3000'+`${path}`)

    let rout = planetRoutes.find(x => x.path == path) || routes.find(x => x.path == '/not-found')
    render(destinationsLayout(rout.template, { navigationHandler }), document.getElementById('destinationRoot'))

}


function navigationHandler(e) {
    // e.preventDefault()
    if (e.target.tagName == 'A') {
        e.preventDefault()
        console.log(e.target.href)

    }



    let url = new URL(e.target.href);
    // let background = document.getElementById('root')
    // background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
    history.pushState(null,null, url)
    // console.log(location.pathname)

    // if (url.pathname === '/destionationMars') {
    //     let url = new URL(e.target.href);
    //     console.log(url)
    //     history.pushState(null, null, url)
    //     let background = document.getElementById('root')
    //     background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'
    //     router(url.pathname)

    // }

    // if (url.pathname === '/crew') {
    //     let url = new URL(e.target.href);
    //     console.log(url)
    //     history.pushState(null, null, url)
    //     let background = document.getElementById('root')
    //     background.style.backgroundImage = 'url(./assets/crew/background-crew-desktop.jpg)'
    //     router(url.pathname)

    // }

    // if (url.pathname === '/') {
    //     let url = new URL(e.target.href);
    //     history.pushState(null, null, url)
    //     let background = document.getElementById('root')
    //     background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
    //     router(url.pathname)
    // }


    router(url.pathname)

}
