import React from "react"
import Helmet from 'react-helmet'
import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Container from "../components/container"
import Arrivals from "../components/arrivals/index"

export default () => (

    <Container>
        <Helmet
            title="SH - Главаная"
            meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" },
                { name: "viewport", content: "width=device-width, initial-scale=1"}
            ]}
        /> 
        <Header>
            <ToggleMenu>
                <Nav/>
                <NavBtn/>
            </ToggleMenu>
        </Header>
        <Arrivals
            url = "#" 
            classBtn ="btn btn-arrivals"
            titleBtn="check new arrivals" 
            appeal="Hazy Shade of spring"  
            explanation="Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo."
        />
    </Container>
)
