import React,{ Component } from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'

class Section1 extends Component {
    constructor(props) {
        super(props);

        this.Title= this.Title.bind(this);
        this.Info= this.Info.bind(this);
        this.Price= this.Price.bind(this);
        this.UsName= this.UsName.bind(this);
        this.UsInfo= this.UsInfo.bind(this);
        this.HoverIcon= this.HoverIcon.bind(this);

    }

    Title(){
        let rezylt = null
        if(this.props.title !== "" && this.props.title !== undefined){
            rezylt = <h2 className="section-link__title">{this.props.title}</h2>
        }

        return rezylt
    }

    Info(props){
        let rezylt = null
        if(this.props.info !== "" && this.props.info !== undefined){
            rezylt = <p className="section-link__info">{this.props.info}</p>
        }

        return rezylt
    }

    Price(props){
        let rezylt = null
        if(this.props.price !== "" && this.props.price !== undefined){
            rezylt = <p className="section-link__price">{this.props.price}</p>
        }

        return rezylt
    }

    UsName(props){
        let rezylt = null
        if(this.props.usname !== "" && this.props.usname !== undefined ){
            rezylt = <p className="section-link__usname">{this.props.usname}</p>
        }

        return rezylt
    }

    UsInfo(){
        let rezylt = null
        if(this.props.usinfo !== "" && this.props.usinfo !== undefined){
            rezylt = <p className="section-link__usinfo">{this.props.usinfo}</p>
        }

        return rezylt
    }

    HoverIcon(props){
        let rezylt = null
            switch (this.props.hoverIcon) {
                case 'line':
                    rezylt = <div className="line-wrap line">
                                <hr className="line__left"/>
                                <hr className="line__rigt"/>
                            </div>
                    break;    
                case 'errow':
                    rezylt = <div className="errow">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} className="errow__left" />
                    </div>
                    break;
                default:
                    rezylt = null
                    break;
            }
        return rezylt
    }

    render() {
    const urlImg = withPrefix('/img/');
      return (
        <div className="section-1">
            <Link 
                to={this.props.url} 
                state={{pleasant: "reasonably",}}
                style={{backgroundImage: `url(${urlImg}${this.props.bg})`}}
                className={"section-link "+(this.props.class)}
            >
                {this.HoverIcon()}
                {this.Title()}
                {this.Info()}
                {this.Price()}
                {this.UsInfo()}
                {this.UsName()}
            </Link>
        </div>
      )
    }
  }
  
  export default Section1