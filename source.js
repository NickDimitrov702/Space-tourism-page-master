import {html, render} from './node_modules/lit-html/lit-html.js'



let h1 = document.getElementsByTagName('h1')[0]
let planetsList = document.querySelectorAll('#planets-list')
// let [moon, mars, eurpa, titan] = planetsList[0].children

import home from './pages/home.js'
import layout from './pages/layout.js'
import destionationMars from './pages/destinationMars.js'

const routes = [
    {
        path: '/',
        tempalte: home,
    },

    {
        path: '/destionationMars',
        tempalte: destionationMars,
    }
]

// I'm using lit-html to render the componenets.
// Simple router having array with routes that includes objects with rout path and the path's template to be rendered
// router functions as a manager of routs, we add a navigationHandler functions so onClick we could navigate to the links withing the NavBar
const router = (path) => {
    
    let rout = routes.find(x => x.path == path) || routes.find(x => x.path == '/not-found')
    // let context = rout.context;
    render(layout(rout.tempalte, { navigationHandler }),document.getElementById('app'))
    
}


router(location.pathname)
console.log(location.pathname)

function navigationHandler(e) {
    e.preventDefault()
    if(e.target.tagName == 'A') {
        e.preventDefault()
        console.log(e.target.href)

        
    }

    let url = new URL(e.target.href);
    history.pushState(null,null, url)
    console.log(location + `${url.pathname}`)

   router(url.pathname)
   
}



// const navigatTo = url => {
//     url = location.pathname
//     window.history.pushState(null, null, url)
//     router()
// }

// navigatTo()
