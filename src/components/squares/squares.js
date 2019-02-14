import React,{ Component } from "react"
import Column from "./column"
import Section from "./section-1"
import { StaticQuery, graphql } from "gatsby"
import Media from "react-media";

let shift = 0;

function PrintSection(data,b){
    let countFor = 3,
        arrSection = []
    if(shift > data.allMarkdownRemark.edges.length-1 ){
        return null
    } else {

    
    if(data.allMarkdownRemark.edges[0+shift].node.frontmatter.classHeight === 593 ||
         data.allMarkdownRemark.edges[1+shift].node.frontmatter.classHeight === 593){
            countFor = 2
    }
        for (let index = shift, i=0; i < countFor; index++, i++) {
            
            arrSection[i]= <Section key={"section-"+(index.toString())}
                title={data.allMarkdownRemark.edges[index].node.frontmatter.title}
                bg={data.allMarkdownRemark.edges[index].node.frontmatter.image}
                info={data.allMarkdownRemark.edges[index].node.frontmatter.subTitle} 
                url={data.allMarkdownRemark.edges[index].node.fields.slug} 
                price={data.allMarkdownRemark.edges[index].node.frontmatter.price} 
                usname={data.allMarkdownRemark.edges[index].node.frontmatter.usname} 
                usinfo={data.allMarkdownRemark.edges[index].node.frontmatter.usinfo}
                class={"link_h"+(data.allMarkdownRemark.edges[index].node.frontmatter.classHeight  !== null ? "593" : "298")+
                        " "+(data.allMarkdownRemark.edges[index].node.frontmatter.hoverAnimation)+"-hover " 
                        +(b !== "" ? b : "")} 
                hoverIcon={data.allMarkdownRemark.edges[index].node.frontmatter.hoverGr}
            />
        }

        shift += countFor;
        return arrSection
    }
}

function Content(props) {
    let arrColumn = []
    for (let index = 0; index < 4; index++) {
        arrColumn[index] = <Column key={"column-"+(index.toString())}>
            {PrintSection(props.data)}
        </Column>
    }
    return arrColumn
}

/*function ContentMobile(props){

  function mediaSection(a) {
    let arrSectiaon = []
        for (let index = 0; index < 2; index++) {
          arrSectiaon[index] = PrintSection(a,"section_dn")
    }
    return arrSectiaon
  }

  let mediaColumn = <Column key="column-media" className="column-media">
    {mediaSection(props.data)}
  </Column>

  return mediaColumn
}*/

class ContentMobile extends Component {
  constructor(props) {
      super(props);

      this.state = {
        arrowContent: [],
        load: false
      };

      this.MediaColumn = this.MediaColumn.bind(this);
      this.LoadContent = this.LoadContent.bind(this);
  }

  MediaColumn(a) {
    let arrSectiaon = []
        
    for (let index = 0; index < 4; index++) {
          arrSectiaon[index] = index > 1 ? PrintSection(a," animated slideInDown") : PrintSection(a,"")
    }
    
    this.state = { arrowContent: arrSectiaon};
    return [arrSectiaon[0],arrSectiaon[1]]
  }

  LoadContent(){
    this.setState(state => ({
      load: !state.load
    }));

  }
  

  render() {
      return (
      <Column key="column-media" className="column-media">
          {this.state.load ?   this.state.arrowContent : this.MediaColumn(this.props.data)}
          {this.state.load ? null :<button className="btn btn_load-media" onClick={this.LoadContent}>Еще</button>}
      </Column>
      )
    }
}


export default (props) => (
    <StaticQuery
    query={graphql`
      query SquaresQuery {
        allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "home" } }
            }
         	 sort: {fields: [frontmatter___position], order: ASC}
                ){
                  edges {
                    node {
                      fields {
                        slug
                      }
                                
                     frontmatter{
                      title
                      subTitle
                      usname
                      usinfo
                      price
                      image
                      date
                      page
                      position
                      hoverGr
                      hoverAnimation
                      classHeight
                    }
                    excerpt
                    }
                  }
            }
      }
    `}
    render={data => (
        <div className="squares">
        <div className="row">
            
            <Media query="(max-width:768px)">
              {matches =>
                matches ? (
                  <div className="mobile-content">
                    <ContentMobile  data={data}  />
                  </div>  
                ) : (
                  <Content data={data}/>
                )
              }
            </Media>
        </div>
    </div>
    )}
  />
)