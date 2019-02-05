import React,{ Component } from "react"
import { Link } from "gatsby"

class FooterNav extends Component {
    constructor(props) {
        super(props)

        this.ListItems = this.ListItems.bind(this);
    }

    ListItems(arrNav){
        let menu = []

            for (let index = 0; index < arrNav.name.length; index++) {
                menu[index] = <li className="menu-ft__item item-ft" key={(this.props.kk)+"_"+(index+1)}>
                            <Link to={"/"+ (arrNav.url)} className="item-ft__link link-ft" state={{pleasant: "reasonably",}}>
                                <span className="link-ft__name">{arrNav.name[index]}()</span>
                            </Link>
                         </li>
            }
            
        return menu
    }

    render() {
      return (
            <div className="footr-nav">
                <nav className="ft-menu">
                    <h2 className="ft-menu__title">{this.props.navInfo.titleHeader}</h2>
                    <ul className="menu-ft">
                        {this.ListItems(this.props.navInfo)}
                    </ul>
                </nav>
            </div>
      )
    }
  }

  export default FooterNav