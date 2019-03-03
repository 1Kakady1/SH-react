import React from "react"
import { Link } from "gatsby"

function pagArr(a,b,cat) {
    let bufComp = [];
    for (let index = 0,j=1; index < a; index++,j++) {
       bufComp.push(
            <Link 
                to={"/cat/"+(cat)+(index===0 ? "":`/${j}`)} 
                className={"pagination__link "+(j===b ? "pagination_active":"")}  
                key={"pagination-page-"+(j)}
                state={{pleasant: "reasonably",}}
            >
                {j}
            </Link> 
        )
    }

    return bufComp
}

const Pagination = props => {
    return (
        <nav className="pagination">
            {pagArr(props.numPages,props.currentPage,props.catName)}
        </nav>

    );
  };
  
  export default Pagination;
