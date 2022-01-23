import { html } from '../node_modules/lit-html/lit-html.js'


export default ({
    navigationHandler
}) =>

    html`
        <header id="header-wrapper" >
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17"
                            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                    </g>
                </svg>
            </div>
        
            <div id="line-effect">
        
            </div>
            <nav id="nav-bar-wrapper" >
                <ul id="nav-bar-links"  @click=${navigationHandler} >
                    <li class="link-items">
                        <span class="number">00</span>
                        <a href="/">Home</a>
                    </li>
                    <li class="link-items">
                        <span class="number">01</span>
                        <a href="/destionationMars">Destination</a>
                    </li>
                    <li class="link-items">
                        <span class="number">02</span>
                        <a href="">Crew</a>
                    </li>
                    <li class="link-items">
                        <span class="number">03</span>
                        <a href="">Technology</a>
                    </li>
                </ul>
            </nav>
        </header>
    
    `
