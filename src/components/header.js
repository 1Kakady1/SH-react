import React from "react"
import generalSass from '../styles/sass/general.module.sass'
import logo from "../assets/img/logo.png" // Tell Webpack this JS file uses this image
//import Media from "react-media";
//https://www.npmjs.com/package/react-media
//https://webformyself.com/kak-sozdat-blog-react-na-osnove-gatsby-za-10-minut/


export default ({ children}) => (

    <header className={generalSass.Header}>
        <div className="logo-wrap">
            <img src={logo} className="logo" alt="logo"/>
        </div>
        {children}
    </header>
)
