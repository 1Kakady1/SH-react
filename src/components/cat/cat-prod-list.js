import React, {Component} from "react"
import CartProd from "./cat-prod-item"
import Select from "./cat-select"

export default class ProdList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          size: null,
          color: null,
          price: null,
          productList: null
        };
  
        this.handlePrice = this.handlePrice.bind(this);
        this.handleColor = this.handleSize.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleSort = this.handleSort.bind(this);
    
    }

handlePrice(){return true}
handleColor(){return true}
handleSize(){return true}
handleSort(){return true}

    //componentDidMount(){
    //    this.state.productList = productList;
    //    console.log(this.state.productList)
    //}

    render() {
        const catProdList = this.props.data
        const productList = catProdList.map((prodItem) =>
                <CartProd 
                        key={prodItem.node.frontmatter.code.toString()} 
                        name={prodItem.node.frontmatter.title.toString()} 
                        nameImg={prodItem.node.frontmatter.image} 
                        price={prodItem.node.frontmatter.price}
                        prodUrl={prodItem.node.fields.slug}
                />
            );
           // console.log("rend")
        return (
            <React.Fragment>

                <div className="filter">
                    <Select
                        classModif={"contact_select"}
                        name={"price"}
                        options={this.props.optionsPrice}
                        //value={}
                        handleСhange={this.handlePrice}
                    />
                    <Select
                        classModif={"contact_select"}
                        name={"color"}
                        options={this.props.optionsColor}
                        //value={}
                        handleСhange={this.handleColor}
                    />
                    <Select
                        classModif={"contact_select"}
                        name={"size"}
                        options={this.props.optionsSize}
                        //value={}
                        handleСhange={this.handleSize}
                    />
                </div>

                <div className="product-cat">
                    {productList}
                </div>

            </React.Fragment>
        )
      }
  
}

