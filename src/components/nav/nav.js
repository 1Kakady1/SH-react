import React from "react"
import { Link } from "gatsby"
//import generalSass from '../styles/sass/general.sass'

export default () => (
    <nav className="menu">
        <ul className="menu-list">
            <li className="menu-list__item">
                <Link to="/product/woman"  state={{pleasant: "reasonably",}}>
                    <span className="menu__item">Woman</span>
                </Link>
            </li>
            <li className="menu-list__item">
                <Link to="/product/men" state={{pleasant: "reasonably",}}>
                    <span className="menu__item">Men</span>
                </Link>
            </li>
            <li className="menu-list__item">
                <Link to="/product/kids"  state={{pleasant: "reasonably",}}>
                    <span className="menu__item">Kids</span>
                </Link>
            </li>
            <li className="menu-list__item">
                <Link to="/comming"  state={{pleasant: "reasonably",}}>
                    <span className="menu__item">Comming Soon</span>
                </Link>
            </li>
            <li className="menu-list__item">
                <Link to="/about"  state={{pleasant: "reasonably",}}>
                    <span className="menu__item">About</span>
                </Link>
            </li>
        </ul>
    </nav>
    
)
