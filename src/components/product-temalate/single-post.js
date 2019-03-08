import React from "react";

import Title from "../title/index"
import Gallary from "../gallary/index"

const infoPost = props => {
    const post = props.dataContent
    const postNode = props.dataContentNode
    return (
        <React.Fragment>
            <div className="product-content">
              <Title title={post.title}  modifClass="product-content_size">
              </Title>
              <div className="product-content__html-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
           </div>
           {post.gallary ===  null || post.gallary ===  undefined ? null :<Gallary gallaryImg ={post.gallary}/>}
        </React.Fragment>      
    );

}

export default infoPost 
