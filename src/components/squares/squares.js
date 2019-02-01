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
                    bg={data.allMarkdownRemark.edges[0].node.frontmatter.image}
                    info={data.allMarkdownRemark.edges[0].node.frontmatter.subTitle} 
                    url={data.allMarkdownRemark.edges[0].node.fields.slug} 
                    price={data.allMarkdownRemark.edges[0].node.frontmatter.price} 
                    usname={data.allMarkdownRemark.edges[0].node.frontmatter.usname} 
                    class="link_h593 left-hover" 
                    hoverIcon={data.allMarkdownRemark.edges[0].node.frontmatter.hoverGr}
                />
                <Section 
                    title={data.allMarkdownRemark.edges[1].node.frontmatter.title}
                    bg={data.allMarkdownRemark.edges[1].node.frontmatter.image}
                    info={data.allMarkdownRemark.edges[1].node.frontmatter.subTitle} 
                    url={data.allMarkdownRemark.edges[1].node.fields.slug} 
                    price={data.allMarkdownRemark.edges[1].node.frontmatter.price} 
                    usname={data.allMarkdownRemark.edges[1].node.frontmatter.usname} 
                    class="link_h298 left-hover" 
                    hoverIcon={data.allMarkdownRemark.edges[1].node.frontmatter.hoverGr}
                />
            </Column>
            <Column>
                <Section 
                        title={data.allMarkdownRemark.edges[2].node.frontmatter.title}
                        bg={data.allMarkdownRemark.edges[2].node.frontmatter.image}
                        info={data.allMarkdownRemark.edges[2].node.frontmatter.subTitle} 
                        url={data.allMarkdownRemark.edges[2].node.fields.slug} 
                        price={data.allMarkdownRemark.edges[2].node.frontmatter.price} 
                        usname={data.allMarkdownRemark.edges[2].node.frontmatter.usname} 
                        class="link_h298 top-hover" 
                        hoverIcon={data.allMarkdownRemark.edges[2].node.frontmatter.hoverGr}
                    />
                    <Section 
                        title={data.allMarkdownRemark.edges[3].node.frontmatter.title}
                        bg={data.allMarkdownRemark.edges[3].node.frontmatter.image}
                        info={data.allMarkdownRemark.edges[3].node.frontmatter.subTitle} 
                        url={data.allMarkdownRemark.edges[3].node.fields.slug} 
                        price={data.allMarkdownRemark.edges[3].node.frontmatter.price} 
                        usname={data.allMarkdownRemark.edges[3].node.frontmatter.usname} 
                        class="link_h298 bottom-hover" 
                        hoverIcon={data.allMarkdownRemark.edges[3].node.frontmatter.hoverGr}
                    />
                    <Section 
                        title={data.allMarkdownRemark.edges[4].node.frontmatter.title}
                        bg={data.allMarkdownRemark.edges[4].node.frontmatter.image}
                        info={data.allMarkdownRemark.edges[4].node.frontmatter.subTitle} 
                        url={data.allMarkdownRemark.edges[4].node.fields.slug} 
                        price={data.allMarkdownRemark.edges[4].node.frontmatter.price} 
                        usname={data.allMarkdownRemark.edges[4].node.frontmatter.usname} 
                        class="link_h298 right-hover" 
                        hoverIcon={data.allMarkdownRemark.edges[4].node.frontmatter.hoverGr}
                    />
            </Column>
            <Column>
                    <Section 
                        title={data.allMarkdownRemark.edges[5].node.frontmatter.title}
                        bg={data.allMarkdownRemark.edges[5].node.frontmatter.image}
                        info={data.allMarkdownRemark.edges[5].node.frontmatter.subTitle} 
                        url={data.allMarkdownRemark.edges[5].node.fields.slug} 
                        price={data.allMarkdownRemark.edges[5].node.frontmatter.price} 
                        usname={data.allMarkdownRemark.edges[5].node.frontmatter.usname} 
                        class="link_h298 bottom-hover" 
                        hoverIcon={data.allMarkdownRemark.edges[5].node.frontmatter.hoverGr}
                    />
                    <Section 
                        title={data.allMarkdownRemark.edges[6].node.frontmatter.title}
                        bg={data.allMarkdownRemark.edges[6].node.frontmatter.image}
                        info={data.allMarkdownRemark.edges[6].node.frontmatter.subTitle} 
                        url={data.allMarkdownRemark.edges[6].node.fields.slug} 
                        price={data.allMarkdownRemark.edges[6].node.frontmatter.price} 
                        usname={data.allMarkdownRemark.edges[6].node.frontmatter.usname} 
                        class="link_h298 top-hover" 
                        hoverIcon={data.allMarkdownRemark.edges[6].node.frontmatter.hoverGr}
                    />
                    <Section 
                        title={data.allMarkdownRemark.edges[7].node.frontmatter.title}
                        bg={data.allMarkdownRemark.edges[7].node.frontmatter.image}
                        info={data.allMarkdownRemark.edges[7].node.frontmatter.subTitle} 
                        url={data.allMarkdownRemark.edges[7].node.fields.slug} 
                        price={data.allMarkdownRemark.edges[7].node.frontmatter.price} 
                        usname={data.allMarkdownRemark.edges[7].node.frontmatter.usname} 
                        class="link_h298 left-hover" 
                        hoverIcon={data.allMarkdownRemark.edges[7].node.frontmatter.hoverGr}
                    />
            </Column>
            <Column>
                <Section 
                        title={data.allMarkdownRemark.edges[8].node.frontmatter.title}
                        bg={data.allMarkdownRemark.edges[8].node.frontmatter.image}
                        info={data.allMarkdownRemark.edges[8].node.frontmatter.subTitle} 
                        url={data.allMarkdownRemark.edges[8].node.fields.slug} 
                        price={data.allMarkdownRemark.edges[8].node.frontmatter.price} 
                        usname={data.allMarkdownRemark.edges[8].node.frontmatter.usname} 
                        class="link_h298 right-hover" 
                        hoverIcon={data.allMarkdownRemark.edges[8].node.frontmatter.hoverGr}
                    />
                    <Section 
                        title={data.allMarkdownRemark.edges[9].node.frontmatter.title}
                        bg={data.allMarkdownRemark.edges[9].node.frontmatter.image}
                        info={data.allMarkdownRemark.edges[9].node.frontmatter.subTitle} 
                        url={data.allMarkdownRemark.edges[9].node.fields.slug} 
                        price={data.allMarkdownRemark.edges[9].node.frontmatter.price} 
                        usname={data.allMarkdownRemark.edges[9].node.frontmatter.usname} 
                        class="link_h593 right-hover" 
                        hoverIcon={data.allMarkdownRemark.edges[9].node.frontmatter.hoverGr}
                    />
            </Column>
        </div>
    </div>
    )}
  />
)