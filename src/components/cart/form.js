import React, { Component } from "react"
import Input from "../comp-form/input"
import Select from "../comp-form/select"
import Button from "../comp-form/btn"
import TextArea from "../comp-form/textarea"
import FormInfo from "../comp-form/form-info"
import CheckBox from "../comp-form/checkbox"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class OrderForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        newUser: {
          name: "",
          email: "",
        },

        errorValid: {
          name: null,
          email: null,
          about: null
        },
        disable: false,
        send: 0,flagEr: 0

      };

      this.handleEmail = this.handleEmail.bind(this);
      this.handleFullName = this.handleFullName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.handCheckEmail = this.handCheckEmail.bind(this);
      this.handCheckNameMsg = this.handCheckNameMsg.bind(this);
    }
  
    handCheckEmail(){
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String( this.state.newUser["email"]).toLowerCase()); 
    }

    handCheckNameMsg(a,b){
      if(a.length > b){
        return true
      } else {
        return false
      }
    }


    handleFullName(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            name: value
          }
        })
      );
    }
  
    handleEmail(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            email: value
          }
        })
      );
    }
  
    handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        })
      );
    }
  
    handleTextArea(e) {
      ;
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            about: value
          }
        })
      );
    }
  
  
    handleFormSubmit(e) {
      e.preventDefault();

        this.setState(
          prevState => ({
            errorValid: {
              ...prevState.errorValid,
            name: this.handCheckNameMsg(this.state.newUser.name,3),
            email: this.handCheckEmail(),
            about: this.handCheckNameMsg(this.state.newUser.about,6)
            }
          })
        );
     

      console.log(this.state.errorValid)
      if(this.state.errorValid.name===true && this.state.errorValid.email===true && this.state.errorValid.about===true){

        this.setState({disable : !this.state.disable})

        let userData = this.state.newUser;
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://ajax2.loc/react-ajax.php";
        fetch(url, {
          method: "POST",
          mode: "no-cors", // error!!!!!!!!!!!!!!
          body: JSON.stringify(userData),
          headers: {
            Accept: "text/plain",
            "Content-Type": "text/plain"
          }
        }).then(response => {
          response.text().then(data => {
              this.setState({
                  newUser: {
                    name: "",
                    fname: "",
                    email: "",
                    adr: ""
                  },
                  errorValid: {
                    name: null,
                    email: null,
                  },
                  disable: !this.state.disable,
                  send: 0,
                  flagEr: 0
                });
          });
        });
      } 
    }
 
    render() {
      return (

        <form className="container-fluid" onSubmit={this.handleFormSubmit}>


          <div className="us-info">

          <Input
              inputtype={"text"}
              classmodif={"contact_input" + (this.state.errorValid.name === null? "" : this.state.errorValid.name === true? "" : " contact_error")}
              title={"Фамилия"}
              name={"fname"}
              value={this.state.newUser.fname}
              placeholder={""}
              handlechange={this.handleInput}
            />

            <Input
              inputtype={"text"}
              classmodif={"contact_input" + (this.state.errorValid.name === null? "" : this.state.errorValid.name === true? "" : " contact_error")}
              title={"Имя"}
              name={"name"}
              value={this.state.newUser.name}
              placeholder={""}
              handlechange={this.handleInput}
            />
 
          </div>

         <div className="adr">
            <Input
                inputtype={"text"}
                classmodif={"contact_input"}
                orderwrapper={"adr_input"}
                name={"adr"}
                title={"Адрес"}
                value={this.state.newUser.adr}
                placeholder={""}
                handlechange={this.handleEmail}
            />
         </div>

         <div className="us-full-info">

          <Input
              inputtype={"text"}
              classmodif={"contact_input" + (this.state.errorValid.name === null? "" : this.state.errorValid.name === true? "" : " contact_error")}
              title={"Фамилия"}
              name={"fname"}
              value={this.state.newUser.fname}
              placeholder={""}
              handlechange={this.handleInput}
            />

            <Input
              inputtype={"text"}
              classmodif={"contact_input" + (this.state.errorValid.name === null? "" : this.state.errorValid.name === true? "" : " contact_error")}
              title={"Имя"}
              name={"name"}
              value={this.state.newUser.name}
              placeholder={""}
              handlechange={this.handleInput}
            />

            <Input
              inputtype={"text"}
              classmodif={"contact_input" + (this.state.errorValid.name === null? "" : this.state.errorValid.name === true? "" : " contact_error")}
              title={"Имя"}
              name={"name"}
              value={this.state.newUser.name}
              placeholder={""}
              handlechange={this.handleInput}
            />

            <Input
              inputtype={"text"}
              classmodif={"contact_input" + (this.state.errorValid.name === null? "" : this.state.errorValid.name === true? "" : " contact_error")}
              title={"Имя"}
              name={"name"}
              value={this.state.newUser.name}
              placeholder={""}
              handlechange={this.handleInput}
            />
 
          </div>

          <div className="term">
            <CheckBox
                classmodif={"mm"}
                title={"dd"}
                name={"term"}
                handlechange={this.handleInput}
                />
          </div>

         
          <Button
            action={this.handleFormSubmit}
            disab={this.state.disable}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />

        <ReactCSSTransitionGroup
                transitionName={ {
                    enter: 'slideInRight',
                    leave: 'slideOutRight',
                    appear: 'appear'
                } }
                transitionAppearTimeout={0}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={0}
            >
                {
                    this.state.disable
                        ? <FormInfo 
                            info={1}
                          />
                        : null
                }
            </ReactCSSTransitionGroup>
        
        </form>
      );
    }
  }
  
  const buttonStyle = {
      width: "100%"
  };
  
  export default OrderForm;