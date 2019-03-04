const initalState = {
    ProductList: [
        {
            name: "",
            cat: "",
            image: "",
            price: 0,
            id: 0,
        }
        ],
        Summa: 0,
}
/*const initalState = {
    ProductList: [
    {
        name: "prod1",
        cat: "women",
        image: "404.jpg",
        price: 140,
        id: 1,
    },
    {
        name: "prod2",
        cat: "man",
        image: "404.jpg",
        price: 130,
        id: 2,
    },
    ],
    Summa: 270,
}

const bufClear = {
    ProductList: [
    {
        name: "",
        cat: "",
        image: "",
        price: 0,
        id: 0,
    }
    ],
    Summa: 0,
}
*/
export default function rootReducer(state=initalState,action){
    
    switch (action.type){
        case 'CLEAR_CART':
            return {
                ProductList: initalState,
                Summa: 0
            }
        case 'DELETE_PRODUCT_CART':
            let  bufRev = Array.from(state.ProductList).reverse();
            return {
                Summa: state.Summa - bufRev[action.payload].price ,
                ProductList: state.ProductList.splice(action.payload, 1),
            }
        default:
           return state 
    }
    
}