import React, { Component } from "react"
import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"
import { Index } from "elasticlunr"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
//https://github.com/gatsby-contrib/gatsby-plugin-elasticlunr-search
class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      open: false,
    }

    this.currPAgeUrl = this.currPAgeUrl.bind(this);
    this.searchShow= this.searchShow.bind(this);
  }

   searchShow = () => {
     this.setState({ open: !this.state.open });
   };

  currPAgeUrl(cat){
      switch (cat){
       case "Мужское": return "product/man" ;
       case "Женское": return "product/woman";
       default: return "post"
      }
  }

  render() {
    console.log(this.state.results)
    return (
      <div>
        <button className="btn search__btn" onClick={this.searchShow} ><FontAwesomeIcon icon={faSearch} className="genBtn_hover" /></button>
        {this.state.open === false ? 
              null 
              
              :
        
              <div className="search-list">
                <input type="text" value={this.state.query} onChange={this.search} />
                {this.state.query.length >3 ?
                            <ul>
                            {this.state.results.map(page => (
                              <li key={(page.id)+"key"}>
                                <Link to={"/"+this.currPAgeUrl(page.cat)+"/" + page.path}>{page.title}</Link>
                              </li>
                            ))}
                          </ul>
                          :
                          null
                }
              </div>
        }

      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : 
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    //if(query.length > 3 ){
      this.index = this.getOrCreateIndex()
      const docStr = this.index.documentStore.docs
      let arrRez = [], i = 0;
      console.log("index",this.index)  
      for (let key in docStr) {

        if(docStr[key].title.toUpperCase().indexOf(query.toUpperCase()) !== -1){
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
    //}
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