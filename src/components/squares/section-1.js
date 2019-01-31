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
        this.RandomColor = this.RandomColor.bind(this);

    }

    RandomColor(){
        let arrColorClass =["bg-color_1 ","bg-color_2 ","bg-color_3 ","bg-color_4 "],
            color = arrColorClass[Math.floor(Math.random() * arrColorClass.length)]
        return color
    }

    Title(){
        let rezylt = null
        if(this.props.title !== "" && this.props.title !== undefined && this.props.title !== null){
            rezylt = <h2 className="section-link__title">{this.props.title}</h2>
        }

        return rezylt
    }

    Info(props){
        let rezylt = null
        if(this.props.info !== "" && this.props.info !== undefined && this.props.info !== null){
            rezylt = <p className="section-link__info">{this.props.info}</p>
        }

        return rezylt
    }

    Price(props){
        let rezylt = null
        if(this.props.price !== "" && this.props.price !== undefined && this.props.price !== null){
            rezylt = <p className="section-link__price">{this.props.price}</p>
        }

        return rezylt
    }

    UsName(props){
        let rezylt = null
        if(this.props.usname !== "" && this.props.usname !== undefined && this.props.usname !== null){
            rezylt = <p className="section-link__usname">{this.props.usname}</p>
        }

        return rezylt
    }

    UsInfo(){
        let rezylt = null
        if(this.props.usinfo !== "" && this.props.usinfo !== undefined && this.props.usinfo !== null){
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
                case 'arrow':
                    rezylt = <div className="arrow">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} className="arrow__left" />
                    </div>
                    break;
                default:
                    rezylt = null
                    break;
            }
        return rezylt
    }

    render() {
    const urlImg = withPrefix('/img/'),
          color = this.RandomColor();
      return (
        <div className="section-1">
            <Link 
                to={this.props.url} 
                state={{pleasant: "reasonably",}}
                className={`section-link ${color}`+(this.props.class)}
            >
                <div className="fon-link" style={{backgroundImage: `url(${urlImg}${this.props.bg})`}}>
                </div>
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