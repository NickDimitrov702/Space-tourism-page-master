import { html } from '../node_modules/lit-html/lit-html.js'

export default () => html`
    <div href='destinationHeader'>
        <span class="pick-destination"><span class="span-item">01</span> Pick your destination</span>
        <ul class="planets-navigation">
            <li class="planets-navigation-list-items"><a href="/moon"> Moon</a></li>
            <li class="planets-navigation-list-items"><a href="/mars"> Mars</a></li>
            <li class="planets-navigation-list-items"><a href="/europa">Europa</a></li>
            <li class="planets-navigation-list-items"><a href="/titan"> Titan</a></li>
        </ul>
    </div>
  

`
