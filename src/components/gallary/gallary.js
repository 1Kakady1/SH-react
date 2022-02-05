import React from "react"
import { withPrefix } from 'gatsby'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

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
      
    onCloseModal = () => {
      this.setState({ open: false });
    };

    onOpenModal(e) {
        e.preventDefault();

        let target = e.target
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
            <Modal open={open} onClose={this.onCloseModal} center blockScroll={true}>
                <img src={this.state.img}/>
            </Modal>  
        </div>

      );
    }
  }