import React from "react"
import { Link } from "gatsby"

function paginations(pagesCount,currentPage,cat) {
    let itemsPagination = [];
    for (let index = 0,j=1; index < pagesCount; index++,j++) {
        itemsPagination.push(
            <Link 
                to={"/cat/"+(cat)+(index===0 ? "":`/${j}`)} 
                className={"pagination__link "+(j===currentPage ? "pagination_active":"")}  
                key={"pagination-page-"+(j)}
                state={{pleasant: "reasonably",}}
            >
                {j}
            </Link> 
        )
    }

    return itemsPagination
}

const Pagination = props => {
    return (
        <nav className="pagination">
            {paginations(props.numPages,props.currentPage,props.catName)}
        </nav>

    );
  };
  
  export default Pagination;
