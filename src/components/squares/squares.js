import React from "react"
import Column from "./column"
import Section from "./section-1"
import { StaticQuery, graphql } from "gatsby"

/*let shift = 0;

function printSection(data){
    let countFor = 3;

    if(data.allMarkdownRemark.edges[0+shift].node.frontmatter.size === "593" || data.allMarkdownRemark.edges[1+shift].node.frontmatter.size === "593"){
        countFor = 2
    }
        for (let index = shift; index < countFor; index++) {
            <Section 
                title={data.allMarkdownRemark.edges[index].node.frontmatter.title}
                bg={data.allMarkdownRemark.edges[index].node.frontmatter.bg}
                info={data.allMarkdownRemark.edges[index].node.frontmatter.info} 
                url="#" 
                price={data.allMarkdownRemark.edges[index].node.frontmatter.price} 
                usname={data.allMarkdownRemark.edges[index].node.frontmatter.usname} 
                class="link_h593 left-hover" 
                hoverIcon="errow"
            />
        }
    
        shift += countFor;  

}

function Content(data) {
    for (let index = 0; index < 4; index++) {
        <Column>
            {printSection(data)}
        </Column>
    }
} 

function Column1(props) {
    const arr =  props.data;
    const listSection = arr.map((arr) =>
        console.log(arr.allMarkdownRemark.edges[0].node.frontmatter.title)
  );
}*/

export default (props) => (
    <StaticQuery
    query={graphql`
      query SquaresQuery {
        allMarkdownRemark(
            filter: {
              frontmatter: { page: { eq: "home" } }
            }
                ){
                  edges {
                    node {
                      fields {
                        slug
                      }
                                
                     frontmatter{
                      title
                      sub_title
                      usname
                      usinfo
                      price
                      image
                      date
                      page
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
            {console.log(data)}
            <Column>
                <Section 
                    title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h593 left-hover" 
                    hoverIcon="errow"
                />
            </Column>
            <Column>
                <Section 
                    title="elegant shoes" 
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h298 top-hover" 
                    hoverIcon="errow"
                />
            </Column>
            <Column>
                <Section 
                    title="elegant shoes" 
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h298 bottom-hover" 
                    hoverIcon="errow"
                />
            </Column>
            <Column>
                <Section 
                    title="elegant shoes" 
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h298 right-hover" 
                    hoverIcon="errow"
                />
            </Column>
        </div>
    </div>
    )}
  />
)