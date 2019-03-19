import React,{ Component } from "react"

import {connect} from "react-redux"
import {sessionLoad} from "../../redux/actions/actions"



class SessionCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            session: null,
            flagOff: false
        };
        //handelCliked
    }

    componentDidMount(){
        //localStorage.removeItem('cart_user')
        let session = JSON.parse(localStorage.getItem('cart_user'))
            if(session !== null) {
                    if(this.props.Summa === 0 &&  JSON.stringify(session.cart) !=="{}" ){
                        this.state.session  =   session
                        this.setState(state => ({
                            session: session
                          }));
                        //document.getElementsByClassName("sessionCreate")[0].click()
                    }
            }
        
    }

    componentDidUpdate(prevProps){
        if(this.state.session !== null && this.state.flagOff === false){
            this.state.flagOff = true
            document.getElementsByClassName("sessionCreate")[0].click()
        }
    }

    // handelCliked(){
    //     document.getElementsByClassName("sessionCreate")[0].click()
    // }

    render() {
    
    let session = this.state.session
    //console.log("r", session)
      return (
        <div className="sessionCreate-wrap" >
            {this.state.session === null ? <button className="sessionCreate"></button> : <button className="sessionCreate" onClick={this.props.sessionLoad.bind(this,session)}></button>}
        </div>
      )
    }
  }

  function mapStateToProps(state){
    return {
        ProductList: state.cart.ProductList,
        Summa: state.cart.Summa,
        countPropd: state.counter.countProd
    }
}

function mapDispatchToProps(dispatch) {
    return{
        sessionLoad: localStorageSession =>  dispatch(sessionLoad(localStorageSession)) 
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(SessionCreate)