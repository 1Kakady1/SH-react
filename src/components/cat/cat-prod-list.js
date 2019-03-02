import React from "react"
import CartProd from "./cat-prod-item"


const ProdList = props => {
    const catProdList = props.data
    const productList = catProdList.map((prodItem) =>
            <CartProd 
                    key={prodItem.node.frontmatter.code.toString()} 
                    name={prodItem.node.frontmatter.title.toString()} 
                    nameImg={prodItem.node.frontmatter.image} 
                    price={prodItem.node.frontmatter.price}
            />
        );

    return (
        <div className="product-cat">
            {productList}
        </div>
    );
  };
  
  export default ProdList;
