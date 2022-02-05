import React from "react"
import Column from "./column"
import Section from "./section"
import { StaticQuery, graphql } from "gatsby"
import Media from "react-media";

function PrintSection(data,classAnimation = "",objectOffset){
    let countFor = 3,
        arrSection = []
    if(objectOffset.offset > data.allMarkdownRemark.edges.length-1 ){
        return null
    } else {

    
    if(data.allMarkdownRemark.edges[0+objectOffset.offset].node.frontmatter.classHeight === 593 ||
         data.allMarkdownRemark.edges[1+objectOffset.offset].node.frontmatter.classHeight === 593){
            countFor = 2
    }
        for (let index = objectOffset.offset, i=0; i < countFor; index++, i++) {
            
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
                        +(classAnimation !== "" ? classAnimation : "")} 
                hoverIcon={data.allMarkdownRemark.edges[index].node.frontmatter.hoverGr}
            />
        }
        objectOffset.setOffset(objectOffset.offset + countFor);
        return arrSection
    }
}


class Content extends React.PureComponent {
  constructor(props) {
      super(props);
      this.offset = 0;
      this.PrintContent = this.PrintContent.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !JSON.stringify(nextProps.data) === !JSON.stringify(this.props.data);
   }

  PrintContent() {
    let arrColumn = []
    for (let index = 0; index < 4; index++) {
        arrColumn[index] = <Column key={"column-"+(index.toString())}>
            {this.props.printSection(this.props.data,"",{
              offset: this.offset,
              setOffset: (offset)=>{
                this.offset = offset;
              }
            })}
        </Column>
    }
    return arrColumn
}

  render() {
      return this.PrintContent()
    }
}


class ContentMobile extends React.PureComponent {
  constructor(props) {
      super(props);

      this.state = {
        arrowContent: [],
        load: false
      };
      this.offset = 0;
      this.MediaColumn = this.MediaColumn.bind(this);
      this.LoadContent = this.LoadContent.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !JSON.stringify(nextProps.data) === !JSON.stringify(this.props.data);
   }
  MediaColumn(a) {
    let arrSectiaon = []
        
    for (let index = 0; index < 4; index++) {
          arrSectiaon[index] =  PrintSection(a, index > 1 ? "animated slideInDown" : "",{
            offset: this.offset,
            setOffset: (offset)=>{
              this.offset = offset;
            }
          }) 
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
                  <Content data={data} printSection={PrintSection}/>
                )
              }
            </Media>
        </div>
    </div>
    )}
  />
)