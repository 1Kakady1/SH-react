import React, { Component } from "react"
import Input from "../comp-form/input"
import Select from "../comp-form/select"
import Button from "../comp-form/btn"
import TextArea from "../comp-form/textarea"

class ContactForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        newUser: {
          name: "",
          email: "",
          cause: "Вопрос",
          about: ""
        },
  
        causeOption: ["Отзыв", "Вопрос", "Другое"],
      };

      this.handleTextArea = this.handleTextArea.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleFullName = this.handleFullName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);

    }
  
  
    handleFullName(e) {
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            name: value
          }
        }),
        () => console.log(this.state.newUser)
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
        }),
        () => console.log(this.state.newUser)
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
        }),
        () => console.log(this.state.newUser)
      );
    }
  
    handleTextArea(e) {
      console.log("Inside handleTextArea");
      let value = e.target.value;
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            about: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  
  
    handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state.newUser;
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "http://ajax2.loc/react-ajax.php";
      fetch(proxyurl + url, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
            this.setState({
                newUser: {
                  name: "",
                  email: "",
                  cause: "Вопрос",
                  about: ""
                }
              });

          console.log("Successful" + data);

        });
      });
    }
 
    render() {
      return (

        <form className="container-fluid" onSubmit={this.handleFormSubmit}>

          <Select
            title={"Причина обратной связи?"}
            classModif={"contact_select"}
            name={"cause"}
            options={this.state.causeOption}
            value={this.state.newUser.cause}
            placeholder={"--------"}
            handleСhange={this.handleInput}
          />
          <div className="us-info">
          
            <Input
              inputtype={"text"}
              classmodif={"contact_input"}
              title={"Имя"}
              name={"name"}
              value={this.state.newUser.name}
              placeholder={""}
              handlechange={this.handleInput}
            />

            <Input
              inputtype={"email"}
              classmodif={"contact_input"}
              name={"email"}
              title={"Email"}
              value={this.state.newUser.email}
              placeholder={""}
              handlechange={this.handleEmail}
            />
            
          </div>

          <TextArea
            title={"Сообщение"}
            rows={10}
            value={this.state.newUser.about}
            name={"currentPetInfo"}
            handleChange={this.handleTextArea}
            placeholder={""}
          />
         
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />
        
        </form>
      );
    }
  }
  
  const buttonStyle = {
      width: "100%"
  };
  
  export default ContactForm;