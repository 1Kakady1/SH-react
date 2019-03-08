import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"
import { graphql } from "gatsby";

import Nav from "../components/nav/nav"
import ToggleMenu from "../components/nav/nav-toggle"
import NavBtn from "../components/nav/nav-btn"
import Header from "../components/header"
import Footer from "../components/footer/index"
import Container from "../components/container"
import TopSlider from "../components/top-product/index"
import BarUrl from "../components/nav/nav-url"
import Post from "../components/product-temalate/single-post"




export default class PostTemplate extends React.Component {

  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }
    console.log("post")
    return (

      <Container modifPad="prod-post_padding">
        <Helmet
            title={"SH - "+(post.title)}
            meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" },
                { name: "viewport", content: "width=device-width, initial-scale=1"}
            ]}>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Helmet>
        <Header>
            <ToggleMenu>
                <Nav/>
                <NavBtn/>
            </ToggleMenu>
        </Header>
            <BarUrl>
                <Link to={"/"+(post.cat)} className="bar-link"  state={{pleasant: "reasonably",}}>
                    <span className="bar-link__name">{post.cat}</span>
                </Link>
                <div className="sl">/</div>
                <div className="url-now">
                  <span className="url-now__name">
                      {post.title}
                  </span>
                </div>
            </BarUrl>
            <Post dataContent={post} dataContentNode={postNode}/>
            <TopSlider/>
        <Footer/>
  </Container>     
    );
  }
}

/* eslint no-undef: "off" */
export const postQuery = graphql`
  query singlPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        subTitle
        usname
        usinfo
        date
        image
        gallary
        page
      }
      fields {
        slug
      }
    }
  }
`;