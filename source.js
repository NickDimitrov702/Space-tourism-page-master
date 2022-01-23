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
    console.log(location + `${url.pathname}`)
    

   router(url.pathname)

}



// console.log(planetsList[0].children)

// fetchData()


// function fetchData(e) {

//     fetch('data.json')
//         .then(response => response.json())
//         .then((data) => {

//             data.destinations.forEach(destination => {
//                 let name = destination.name

//                 if(destination.name === 'Moon') {
//                     moon.innerHTML = destination.name
//                 } else if(destination.name === 'Mars') {
//                     mars.innerHTML = destination.name
//                 } else if(destination.name === 'Europa') {
//                     eurpa.innerHTML = destination.name
//                 } else if (destination.name = 'Titan') {
//                     titan.innerHTML = destination.name
//                 }



//                 console.log(destination)
//                 console.log(name)

//             })


//         })


// }