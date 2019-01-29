import React,{ Component } from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

class Section1 extends Component {
    constructor(props) {
        super(props);

        this.Info= this.Info.bind(this);
        //this.printPrice= this.printPrice.bind(this);
       // this.printUsName= this.printUsName.bind(this);

    }

    Info(props){
        let rezylt = null
        if(this.props.info !== ""){
            rezylt = <p className="section-link__info">{this.props.info}</p>
        }

        return rezylt
    }

    render() {
    const urlImg = withPrefix('/img/');
      return (
        <div className="section-1">
            <Link 
                to={"/"+(this.props.url)} 
                state={{pleasant: "reasonably",}}
                style={{backgroundImage: `url(${urlImg}${this.props.bg})`}}
                className="section-link"
            >
                <h2 className="section-link__title">
                    {this.props.title}
                </h2>
                {this.Info()}
            </Link>
        </div>
      )
    }
  }
  
  export default Section1