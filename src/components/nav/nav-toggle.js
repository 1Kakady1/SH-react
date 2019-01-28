import React, { Component } from "react"

class ToggleMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.activeMenu= this.activeMenu.bind(this);
    }

    activeMenu() {
        this.setState(state => ({
            active: !state.active,
          }));

    }


    render() {
      return (
        <div className="menu-wrap">
            <div className="menu-toggle">
                <button  className={"menu-toggle__btn menu-toggle__htx"+(this.state.active ? ' menu-toggle_active': "")} onClick={this.activeMenu}>
                    <span>menu</span>
                </button>
            </div>
            <div className={"toggle-menu" + (this.state.active ? " toggle-menu_active" : "")}>
                {this.props.children}
            </div>   
        </div>
      )
    }
  }
  
  export default ToggleMenu