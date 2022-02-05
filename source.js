// Check why it shows invalid URL some times on e.target.href - it may be the event since it is covering 2 nested elements.(FIXED)
// Make router for Planets navigation, it will be some kind of a nested router.(DONE, not a nested router but using the same router)
// Seperate the destinations components like, so you can render them with the destination router.(DONE, not going to use that)
// Continue with placing the rout paths for the other planets.
// Create the Crew section as creating a style sheet that will apply to all the crew markups.
// Create the technology section as the other sections. 
// Place all the relevant components in seperate folders so it can be easy to navigate. 
// Make the folders as fallows: Destination folder with the style.css, crew folder..., technology folder....,


import { html, render } from './node_modules/lit-html/lit-html.js'



let h1 = document.getElementsByTagName('h1')[0]
let planetsList = document.querySelectorAll('#planets-list')


import home from './pages/home.js'
import layout from './pages/layout.js'
import destionationRoot from './pages/destinationRoot.js'
import crewRoot from './pages/crewRoot.js'
import moon from './pages/destinationMoon.js'
import mars from './pages/destinationMars.js'
import europa from './pages/destinationEuropa.js'
import titan from './pages/destinationTitan.js'
import crewEngineer from './pages/crewEngineer.js'
import crewSpecialist from './pages/crewSpecialist.js'
import crewPilot from './pages/crewPilot.js'

const routes = [
    {
        path: '/',
        tempalte: home,
    },

    {
        path: '/destinationRoot',
        tempalte: destionationRoot,
    },

    {
        path: '/moon',
        tempalte: moon,
    },

    {
        path: '/crewRoot',
        tempalte: crewRoot,
    },

    {
        path: '/crewEngineer',
        tempalte: crewEngineer
    },


    {
        path: '/crewSpecialist',
        tempalte: crewSpecialist
    },

    {
        path: '/crewPilot',
        tempalte: crewPilot,
    },



    {
        path: '/mars',
        tempalte: mars,
    },

    {
        path: '/europa',
        tempalte: europa,
    },

    {
        path: '/titan',
        tempalte: titan,
    },


]

// I'm using lit-html to render the componenets.
// Simple router having array with routes that includes objects with rout path and the path's template to be rendered
// router functions as a manager of routs, we add a navigationHandler functions so onClick we could navigate to the links withing the NavBar
const router = (path) => {
    // Last time I forgot to compare x.path with path, instead I was comparing path === path :(
    let url = new URL('http://localhost:3000' + `${path}`);
    // history.pushState(null, null, url)
    // Checking isnide the router pathname if it is the same as the page we are on so we can keep the background 
    // for the relevant page the same on refresh.

    if (url.pathname === '/destinationRoot') {
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'

    }

    if (url.pathname === '/moon' || url.pathname === '/europa' || url.pathname === '/titan') {
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'
    }


    if (url.pathname === '/mars') {
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'
    }

    if (url.pathname === '/') {
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
    }

    if (url.pathname === '/crewRoot' || url.pathname === '/crewEngineer' || url.pathname === '/crewSpecialist'  || url.pathname === '/crewPilot') {
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/crew/background-crew-desktop.jpg)'
    }


    // You can delete below console.log
    console.log('http://localhost:3000' + `${path}`)
    let rout = routes.find(x => x.path == path) || routes.find(x => x.path == '/not-found')
    render(layout(rout.tempalte, { navigationHandler }), document.getElementById('app'))

}

router(location.pathname)
// console.log(location.pathname)

function navigationHandler(e) {
    e.preventDefault()
    if (e.target.tagName == 'A') {
        e.preventDefault()
        console.log(e.target.href)

    }



    let url = new URL(e.target.href);
    let background = document.getElementById('root')
    background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
    history.pushState(null, null, url)
    // console.log(location.pathname)

    if (url.pathname === '/destinationRoot') {
        let url = new URL(e.target.href);
        console.log(url)
        history.pushState(null, null, url)
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'
        router(url.pathname)

    }

    if (url.pathname === '/crewRoot') {
        let url = new URL(e.target.href);
        console.log(url)
        history.pushState(null, null, url)
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/crew/background-crew-desktop.jpg)'
        router(url.pathname)

    }

    if (url.pathname === '/crewEngineer' || url.pathname === '/crewSpecialist' || url.pathname === '/crewPilot') {
        let url = new URL(e.target.href);
        console.log(url)
        history.pushState(null, null, url)
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/crew/background-crew-desktop.jpg)'
        router(url.pathname)
    }

    if (url.pathname === '/') {
        let url = new URL(e.target.href);
        history.pushState(null, null, url)
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
        router(url.pathname)
    }


    if (url.pathname === '/moon') {
        let url = new URL(e.target.href);
        history.pushState(null, null, url)
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
        router(url.pathname)
    }

    if (url.pathname === '/mars' || url.pathname === '/europa' || url.pathname === '/titan') {
        let url = new URL(e.target.href);
        history.pushState(null, null, url)
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
        router(url.pathname)
    }


    // router(url.pathname)

}




