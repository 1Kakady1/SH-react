import React from "react"
import Helmet from 'react-helmet'
import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Container from "../components/container"

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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem libero ea perferendis ratione dolores eligendi! Illo assumenda ea, nobis harum molestias nulla quasi, consequatur autem eius sit asperiores optio. Et.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aperiam facere animi laboriosam, dolores eius ea possimus illum  laborum impedit, minus necessitatibus debitis. Est in id quisquam consectetur eos!</p>
    </Container>
)
