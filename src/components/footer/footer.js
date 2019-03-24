import React,{ Component } from "react"
import FooterNav from "./footer-nav";
import Social from "./social"
import Media from "react-media";
import ReactWOW from 'react-wow'

class Footer extends Component {
    //constructor(props) {
      //  super(props)
   // }

    render() {
        let  navFooter = {
                nav1: {
                    url: ["cat/woman", "cat/men", "cat", ],
                    name: ["Женское", "Можское", "Все категории",],
                    titleHeader: "Категории"
                },
                nav2: {
                    url: ["#","#","#","#","#"],
                    name: ["Terms of Service","Privacy Policy","Copyright Policy","Press Kit","Support"],
                    titleHeader: "site"
                },
                nav3: {
                    url: ["about","contact"],
                    name: ["О нас","Контакты"],
                    titleHeader: "Информация"
                },
            };
      return (
        <ReactWOW animation='slideInUp'>
        <footer className="footer">
        <Media query="(max-width:768px)">
              {matches =>
                matches ? (null ) : (<FooterNav key="footer-nav_1" kk="item-ft1" navInfo={navFooter.nav1}/>)
              }
        </Media>
        {/*
        <Media query="(max-width:768px)">
              {matches =>
                matches ? (null):(<FooterNav key="footer-nav_2" kk="item-ft2" navInfo={navFooter.nav2}/>) 
              }
        </Media> 
        */
        }
            <FooterNav key="footer-nav_3" kk="item-ft3" navInfo={navFooter.nav3}/>
            <Social
                title="Социальные сети"
                copyraite="Shoper 2019 © Все права защищены"
            />
            {this.props.children}
        </footer>
        </ReactWOW>
      )
    }
  }
  export default Footer