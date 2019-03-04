import React from "react"
import Helmet from 'react-helmet'


import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Footer from "../components/footer/index"
import Container from "../components/container"
import About from "../components/about/index"
import TopSlider from "../components/top-product/index"
import BarUrl from "../components/nav/nav-url"


export default () => (
            <Container>
                <Helmet
                    title="SH - О нас"
                    meta={[
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" },
                        { name: "viewport", content: "width=device-width, initial-scale=1"}
                    ]}>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>
                <Header>
                    <ToggleMenu>
                        <Nav/>
                        <NavBtn/>
                    </ToggleMenu>
                </Header>
                    <BarUrl>
                        <div className="url-now">
                            <span className="url-now__name">About</span>
                        </div>
                    </BarUrl>
                    <About />
                    <TopSlider/>
                <Footer/>
            </Container>

      )