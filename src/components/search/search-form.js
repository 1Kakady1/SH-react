import React, { Component } from "react"
import Modal from 'react-responsive-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
//https://github.com/gatsby-contrib/gatsby-plugin-elasticlunr-search
export default class Search extends Component {
  state = {
    open: false,
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
      <div>
        <button className="btn search__btn" onClick={this.onOpenModal} ><FontAwesomeIcon icon={faSearch} className="genBtn_hover" /></button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>Поиск</h2>
        </Modal>
      </div>
    );
  }
}