import React from "react";
import { withPrefix } from 'gatsby'

import Title from "../title/index"
import Gallary from "../gallary/index"

const infoPost = props => {
    const post = props.dataContent
    const postNode = props.dataContentNode
    return (
        <React.Fragment>
            <div className="product-content">
              <Title title={post.title} subTitle={"Article number: "+(post.code)} modifClass="product-content_size">
              </Title>
              <div className="product-content__html-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
           </div>
           <Gallary gallaryImg ={post.gallary}/>
        </React.Fragment>      
    );

}

export default infoPost 
