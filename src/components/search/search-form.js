import React, { Component } from "react"
import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"
import { Index } from "elasticlunr"

import Modal from 'react-responsive-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
//https://github.com/gatsby-contrib/gatsby-plugin-elasticlunr-search
class Search extends Component {
  // state = {
  //   open: false,
  // };

  // onOpenModal = () => {
  //   this.setState({ open: true });
  // };

  // onCloseModal = () => {
  //   this.setState({ open: false });
  // };

  // render() {
  //   const { open } = this.state;
  //   return (
  //     <div>
  //       <button className="btn search__btn" onClick={this.onOpenModal} ><FontAwesomeIcon icon={faSearch} className="genBtn_hover" /></button>
  //       <Modal open={open} onClose={this.onCloseModal} little>
  //         <h2>Поиск</h2>
  //       </Modal>
  //     </div>
  //   );
  // }

  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    console.log("query",this.state.query)
    console.log("search",this.props.searchIndex)
    console.log("rez",this.state.results)
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul>
          {this.state.results.map(page => (
            <li key={(page.id)+"key"}>
              <Link to={"/" + page.path}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    const docStr = this.index.documentStore.docs
    let arrRez = [], i = 0;
    
    // docStr.forEach(function(item, i, docStr) {
    //   console.log("item",item.title)  
    // });
    //documentStore.docs[""0d76f458-dc2b-576e-b626-4078c9776c60""].title
    for (let key in docStr) {
      //console.log("obj",docStr[key])
      if(docStr[key].title.indexOf(query) !== -1){
            arrRez[i]=docStr[key]
            i++
      }
    }

    if(arrRez !=={} ){
          this.setState({
          query,
          results: arrRez
        })
    } else {
        this.setState({
        query,
        results: this.index.search(query, {}).map(({ ref }) => this.index.documentStore.getDoc(ref)),
        })
    }
  }
}

export default (props) => (
  <StaticQuery  key="prodGrap"
  query={graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
  `}
  render={data => (
    <Search key="my-search" searchIndex={data.siteSearchIndex.index}  />
  )}
/>
)