import React, { Component } from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from 'react-responsive-modal'

import Input from "../comp-form/input"
import Button from "../comp-form/btn"
import FormInfo from "../comp-form/form-info"
import CheckBox from "../comp-form/checkbox"

class OrderForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        newUser: {
          name: "",
          surname: "",
          email: "",
          adr: "",
          phone: "",
          indexCode: "",
          city:""
        },

        errorValid: {
          name: null,
          surname: null,
          email: null,
          adr: null,
          phone: null,
          indexCode: null,
          city:null
        },
        disable: false,
        send: 0,
        flagEr: 0,
        check: false,
        open: false,
      };

      this.handleEmail = this.handleEmail.bind(this);
      this.handleFullName = this.handleFullName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.handCheckEmail = this.handCheckEmail.bind(this);
      this.handCheckPhone = this.handCheckPhone.bind(this);
      this.handCheckNameMsg = this.handCheckNameMsg.bind(this);
    }

    handCheckEmail(){
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String( this.state.newUser["email"]).toLowerCase()); 
    }

    handCheckPhone(){
      var re = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
      return re.test(String( this.state.newUser["phone"]).toLowerCase()); 
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
      console.log(name);
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value
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
            surname: this.handCheckNameMsg(this.state.newUser.name,3),
            adr: this.handCheckNameMsg(this.state.newUser.name,3),
            phone: this.handCheckPhone(),
            city:this.handCheckNameMsg(this.state.newUser.name,3)
            }
          })
        );
     

      
      if(this.state.errorValid.name===true && this.state.errorValid.email===true && this.state.errorValid.about===true){

        this.setState({disable : !this.state.disable})

        let userData = this.state.newUser;
        //TODO: change url
        const url = "http://ajax2.loc/react-ajax.php";
        fetch(url, {
          method: "POST",
          mode: "no-cors",
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
                    adr: "",
                    phone: "",
                    indexCode: 0,
                    city:""
                  },
                  errorValid: {
                    name: null,
                    fname: null,
                    email: null,
                    adr: null,
                    phone: null,
                    indexCode: 0,
                    city: null
                  },
                  disable: !this.state.disable,
                  send: 0,
                  flagEr: 0
                });
          });
        });
      } 
    }

    handleInputCheck= () => {
      this.setState({ check: !this.state.check });
    };

    onOpenModal = () => {
      this.setState({ open: true });
    };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };
 
    render() {
      const { open } = this.state;
      return (

        <form className="container-fluid" onSubmit={this.handleFormSubmit}>


          <div className="us-info">

          <Input
              inputtype={"text"}
              classmodif={"contact_input" + (this.state.errorValid.surname === null? "" : this.state.errorValid.surname === true? "" : " contact_error")}
              title={"Фамилия"}
              name={"surname"}
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
                classmodif={"contact_input" + (this.state.errorValid.adr === null? "" : this.state.errorValid.adr === true? "" : " contact_error")}
                orderwrapper={"adr_input"}
                name={"adr"}
                title={"Адрес"}
                value={this.state.newUser.adr}
                placeholder={""}
                handlechange={this.handleInput}
            />
         </div>

         <div className="us-full-info">

          <Input
              inputtype={"text"}
              classmodif={"contact_input" + (this.state.errorValid.city === null? "" : this.state.errorValid.city === true? "" : " contact_error")}
              title={"Город"}
              name={"city"}
              value={this.state.newUser.city}
              placeholder={""}
              handlechange={this.handleInput}
            />

            <Input
              inputtype={"number"}
              classmodif={"contact_input" + (this.state.errorValid.indexCode === null? "" : this.state.errorValid.indexCode === true? "" : " contact_error")}
              title={"Почтовый индекс"}
              name={"indexCode"}
              value={this.state.newUser.indexCode}
              placeholder={""}
              handlechange={this.handleInput}
            />

            <Input
              inputtype={"tel"}
              classmodif={"contact_input" + (this.state.errorValid.phone === null? "" : this.state.errorValid.phone === true? "" : " contact_error")}
              title={"Телефон"}
              name={"phone"}
              value={this.state.newUser.phone}
              placeholder={""}
              handlechange={this.handleInput}
            />

            <Input
              inputtype={"email"}
              classmodif={"contact_input" + (this.state.errorValid.email === null? "" : this.state.errorValid.email === true? "" : " contact_error")}
              title={"Email"}
              name={"email"}
              value={this.state.newUser.email}
              placeholder={""}
              handlechange={this.handleInput}
            />
 
          </div>

          <div className="term">
            <CheckBox
                classmodif={"term__checked"}
                name={"term"}
                orderwrapper={"form-tern-checked"}
                handlechange={this.handleInputCheck}
                on_open_modal={this.onOpenModal}
                />
                <span className="term__good" onClick={this.onOpenModal} >Я согласен с пользовательским соглашением</span>
          </div>
          {
                    <ReactCSSTransitionGroup
                    transitionName={ {
                        enter: 'slideInUp',
                        leave: 'slideOutDown',
                        appear: 'appear'
                    } }
                    transitionAppearTimeout={0}
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}
                >
                    {
                        this.state.check === true ?
                        <Button
                          action={this.handleFormSubmit}
                          disab={this.state.disable}
                          type={"primary"}
                          title={"Оформить"}
                          style={buttonStyle}
                        />
                        :
                        null
                    }
                </ReactCSSTransitionGroup>
          }

          <Modal open={open} onClose={this.onCloseModal} center>
            <p>
              Настоящий документ «Пользовательское соглашение» представляет собой предложение ООО «_____» (далее — «Администрация»), заключить договор на изложенных ниже условиях Соглашения.
              <br/>
              1. Общие положения Пользовательского соглашения
              1.1. В настоящем документе и вытекающих или связанным с ним отношениях Сторон применяются следующие термины и определения:
              <br/>
              а. Платформа — программно-аппаратные средства, интегрированные с Сайтом Администрации;
              <br/>
              б. Пользователь — дееспособное физическое лицо, присоединившееся к настоящему Соглашению в собственном интересе либо выступающее от имени и в интересах представляемого им юридического лица.
              <br/>
              в. Сайт Администрации/ Сайт — интернет-сайты, размещенные в домене ________.ru и его поддоменах.
              <br/>
              г. Сервис — комплекс услуг и лицензия, предоставляемые Пользователю с использованием Платформы.
              <br/>
              д. Соглашение — настоящее соглашение со всеми дополнениями и изменениями.
              <br/>
            </p>
          </Modal>

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