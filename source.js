// Check why it shows invalid URL some times on e.target.href - it may be the event since it is covering 2 nested elements.
// Make router for Planets navigation, it will be some kind of a nested router.
// Seperate the destinations components like, so you can render them with the destination router.
// Most probably you will need a layout like the initial one that is made for the main navigation. 
import { html, render } from './node_modules/lit-html/lit-html.js'



let h1 = document.getElementsByTagName('h1')[0]
let planetsList = document.querySelectorAll('#planets-list')


import home from './pages/home.js'
import layout from './pages/layout.js'
import destionationMars from './pages/destinationMars.js'
import crew from './pages/crew-pilot.js'

const routes = [
    {
        path: '/',
        tempalte: home,
    },

    {
        path: '/destionationMars',
        tempalte: destionationMars,
    },

    {
        path: '/crew',
        tempalte: crew,
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

    if(url.pathname === '/destionationMars'){
        let background = document.getElementById('root')
        // setTimeout(background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)', 2000)
        background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'

    } if(url.pathname === '/') {
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)'
    }

    if(url.pathname === '/crew') {
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/crew/background-crew-desktop.jpg)'
    }
    // You can delete below console.log
    console.log('http://localhost:3000'+`${path}`)
    let rout = routes.find(x => x.path == path) || routes.find(x => x.path == '/not-found')
    render(layout(rout.tempalte, { navigationHandler }), document.getElementById('app'))

}

router(location.pathname)
// console.log(location.pathname)

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

    if (url.pathname === '/destionationMars') {
        let url = new URL(e.target.href);
        console.log(url)
        history.pushState(null, null, url)
        let background = document.getElementById('root')
        background.style.backgroundImage = 'url(./assets/destination/background-destination-desktop.jpg)'
        router(url.pathname)

    }

    if (url.pathname === '/crew') {
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


    router(url.pathname)

}


