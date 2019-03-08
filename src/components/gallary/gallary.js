import React from "react"
import { withPrefix } from 'gatsby'
import Modal from 'react-responsive-modal'

export default class Gallary extends React.Component {
    state = {
      open: false,
      img: null
    };
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            img: null
          };

        this.onOpenModal= this.onOpenModal.bind(this);

    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onOpenModal, false);
      }
      
      componentWillMount() {
        document.addEventListener('click', this.onOpenModal, false);
      }
  
    //onOpenModal = () => {
    //  this.setState({ open: true });
   // };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };

    onOpenModal(e) {
        e.preventDefault();

        let target = e.target
           // gallaryItem = document.getElementsByClassName('gallary__link-item');
      console.log(target)
        if (target.className==='gallary__link-item' || target.className==='gallary__img-item') {
            console.log(target)
          this.setState(state => ({
            img: target.src,
            open: true
          }));
        }
      }
  
    render() {
      const { open } = this.state;
      const urrlPref = withPrefix('/img')
      const gallary = this.props.gallaryImg
      const gallaryList =  gallary.map((gallaryItem,index) =>  
          <a href={urrlPref+"/"+gallaryItem} key={gallaryItem.toString()+"-"+index} onClick={this.onOpenModal} className="gallary__link-item">
              <img src={urrlPref+"/"+gallaryItem} alt="" className="gallary__img-item"/>
          </a>);

      return (
        <div className="gallary">
            <div className="gallary__title">
              <h3>Галерея:</h3>
            </div>
            <div className="gallary-list">
                {gallaryList}
            </div> 
            <Modal open={open} onClose={this.onCloseModal} little>
                <img src={this.state.img}/>
            </Modal>  
        </div>

      );
    }
  }