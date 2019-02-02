import React, { Component } from "react"

class Subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.subscription= this.subscription.bind(this);
    }

    subscription() {
        this.setState(state => ({
            active: !state.active,
          }));

        setTimeout(() => {
            this.setState(state => ({
                active: !state.active,
              })); 
        }, 8000);

        /** 
         *
         *  ajax
         * 
        **/

    }

    render() {
      return (
        <div className="subscription">
            <input type="email" className="subscription__input input" placeholder={this.props.inputPlacentholder}/>
            <button className={this.props.btnClass} onClick={this.subscription}>{this.props.btnTitle}</button>
            {this.state.active ? <span className="subscription__sps fade">Спасибо за подписку</span> : null}
        </div>
      )
    }
  }
  
  export default Subscription