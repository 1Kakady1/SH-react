import React from "react"
import { Link } from "gatsby"

export default () => (
    <nav className="menu">
        <ul className="menu-list">
            <li className="menu-list__item">
                <Link to="/cat/women"  state={{pleasant: "reasonably",}}>
                    <span className="menu__item">Женское</span>
                </Link>
            </li>
            <li className="menu-list__item">
                <Link to="/cat/man" state={{pleasant: "reasonably",}}>
                    <span className="menu__item">Мужское</span>
                </Link>
            </li>
            <li className="menu-list__item">
                <Link to="/cat"  state={{pleasant: "reasonably",}}>
                    <span className="menu__item">Категории</span>
                </Link>
            </li>
            <li className="menu-list__item">
                <Link to="/about"  state={{pleasant: "reasonably",}}>
                    <span className="menu__item">О нас</span>
                </Link>
            </li>
        </ul>
    </nav>
    
)
