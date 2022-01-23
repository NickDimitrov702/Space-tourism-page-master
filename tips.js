import {render} from './node_modules/lit-html/lit-html.js'


import  { onLoginSubmit } from './eventListeners.js'

import login from './views/login.js'
import layout from './views/layout.js'
import homepage from './views/homepage.js'
import notfound from './views/notfound.js'
import register from './views/register.js'

// Create routs so you can fill them in with paths (links), array with objects

const routes = [
    {
        path:'/',
        template: homepage
    },

    {
        path:'/login',
        template: login,
        context: {
            onLoginSubmit
        }
    },

    {
        path: '/notfound',
        template: notfound
    },

    {
        path: '/register',
        template: register,
    }
]

// The router will take as a property "path", this routerd will render the templates.
const router = (path) => {

    let rout = routes.find(x => x.path == path) || routes.find(x => x.path == '/notfound') 
    let context = rout.context
    render(layout(rout.template(context), { navigationHandler }),document.getElementById('app'))
}
router(location.pathname)

function navigationHandler(e){
    if(e.target.tagName == 'A'){
        e.preventDefault()
    }

    let url = new URL(e.target.href);



    router(url.pathname)
}

// function addEventListener () {
    
//     document.querySelector('#nav-bar').addEventListener('click', e => {
//         e.preventDefault()
//         if(!e.target.classList.contains('nav-link')){
//             return
//         }

//         console.log(e.target.href);
//         history.pushState({},'',e.target.href)
//     })

// }   

// addEventListener()
