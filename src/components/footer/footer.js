import React,{ Component } from "react"
import FooterNav from "./footer-nav";
import Social from "./social"
import Media from "react-media";

class Footer extends Component {
    //constructor(props) {
      //  super(props)
   // }

    render() {
        let  navFooter = {
                nav1: {
                    url: ["woman", "men", "kids", "comming", "soon"],
                    name: ["Woman", "Men", "Kids", "Comming", "Soon"],
                    titleHeader: "collection"
                },
                nav2: {
                    url: ["#","#","#","#","#"],
                    name: ["Terms of Service","Privacy Policy","Copyright Policy","Press Kit","Support"],
                    titleHeader: "site"
                },
                nav3: {
                    url: ["about","#","#","contact"],
                    name: ["About us","Shipping Metods","Career","Contact"],
                    titleHeader: "shop"
                },
            };
      return (
        <footer className="footer">
        <Media query="(max-width:768px)">
              {matches =>
                matches ? (null ) : (<FooterNav key="footer-nav_1" kk="item-ft1" navInfo={navFooter.nav1}/>)
              }
        </Media>
        <Media query="(max-width:768px)">
              {matches =>
                matches ? (null):(<FooterNav key="footer-nav_2" kk="item-ft2" navInfo={navFooter.nav2}/>) 
              }
        </Media> 
            <FooterNav key="footer-nav_3" kk="item-ft3" navInfo={navFooter.nav3}/>
            <Social
                title="social"
                copyraite="Shoper is made with love in Warsaw, 2014 © All rights reserved. El Passion"
            />
            {this.props.children}
        </footer>
      )
    }
  }
  export default Footer