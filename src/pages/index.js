import React from "react"
import Helmet from 'react-helmet'
import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Footer from "../components/footer/index"
import Container from "../components/container"
import Arrivals from "../components/arrivals/index"
import Squares from "../components/squares/index"
import Title from "../components/title/index"
import Subscription from "../components/Subscription/index"
import TopSlider from "../components/top-product/index"

export default () => (

    <Container>
        <Helmet
            title="SH - Главаная"
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
        <Arrivals
            url = "#" 
            classBtn ="btn btn-arrivals"
            titleBtn="check new arrivals" 
            appeal="Hazy Shade of spring"  
            explanation="Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo."
        />
        <Squares/>
        <div className="sign-up">
            <Title 
                title="sign up to receive our updates" 
                subTitle="Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat." 
            />
            <Subscription btnTitle="add" btnClass={["subscription__btn"]} inputPlacentholder="Ваш e-mail" />
        </div>
        <TopSlider/>
        <Footer/>

    </Container>
)
