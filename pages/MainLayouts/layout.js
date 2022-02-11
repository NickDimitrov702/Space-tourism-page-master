import { html, render } from '../../node_modules/lit-html/lit-html.js'

import header from "./header.js";


export default (templateResult, props)  => 
    
    html `
         ${header(props)}
         
         ${templateResult(props)}
    `
   
