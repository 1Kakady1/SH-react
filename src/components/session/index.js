import React,{ Component } from "react"

import {connect} from "react-redux"
import {sessionLoad} from "../../redux/actions/actions"



class SessionCreate extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount(){
        //localStorage.removeItem('cart_user')
        let session = JSON.parse(localStorage.getItem('cart_user')) 
            console.log('sess',JSON.stringify(session))
            if(session !== null) {
                    console.log('sum',this.props)
                    console.log('cart',JSON.stringify(session.cart))
                    if(this.props.Summa === 0 &&  JSON.stringify(session.cart) !=="{}" ){
                        console.log("ок")
                        document.getElementsByClassName("sessionCreate")[0].click()
                    }
            }
        
    }

    render() {
    
    let session = JSON.parse(localStorage.getItem('cart_user'))
    //console.log("localStore",session.cart)  

    
      return (
        <div className="sessionCreate-wrap" >
            <button className="sessionCreate" onClick={this.props.sessionLoad.bind(this,session)}></button>
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