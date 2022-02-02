import { html } from '../node_modules/lit-html/lit-html.js'

import destinationHeader from './destinationHeader.js'


export default (templateResult, props) =>

    html`

        ${destinationHeader(props)}
        
        ${templateResult(props)}

`

