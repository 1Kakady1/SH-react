const initalState = {
    ProductList: [
        {
            name: "prod1",
            cat: "women",
            image: "404.jpg",
            price: 141,
            code: 1001,
            count: 1,
            size: ["1","2"]
        },
        {
            name: "prod2",
            cat: "man",
            image: "404.jpg",
            price: 132,
            code: 1001,
            count: 1,
            size: ["1","2"]
        },
        {
            name: "prod3",
            cat: "man",
            image: "404.jpg",
            price: 133,
            code: 1001,
            count: 1,
            size: ["1","2"]
        },
    ],
    Summa: 406,
}
/*const initalState = {
    ProductList: [
    {
        name: "prod1",
        cat: "women",
        image: "404.jpg",
        price: 140,
        code: 1001,
        count: 1,
        size: ["1","2"]
    },
    {
        name: "prod2",
        cat: "man",
        image: "404.jpg",
        price: 130,
        code: 1001,
        count: 1,
        size: ["1","2"]
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
}*/

export default function rootReducer(state=initalState,action){
    
    switch (action.type){
        case 'CLEAR_CART':
            return {
                ProductList: initalState,
                Summa: 0
            }
        case 'DELETE_PRODUCT_CART':
            let  bufRev = state.ProductList;
            let j = 0, len = state.ProductList.length,spl=[];

            while(j<len ){
                if(action.payload !== j){
                    spl.push(state.ProductList[j])
                }

                j++
            }

            //let spl=state.ProductList.splice(action.payload,1)
            console.log(spl)
            return {
                Summa: state.Summa - bufRev[action.payload].price ,
                ProductList: spl,
            }
        case 'ADD_IN_CART':
            let bufArr = state.ProductList,
                newProd = action.payload,
                flagPush = true;

            for(let i = 0 ; i <  state.ProductList.length; i++){
                if(bufArr[i].code === newProd.code){
                    bufArr[i].price = parseInt(bufArr[i].price) + newProd.price
                    bufArr[i].size.push(newProd.size[0])
                    flagPush = false
                    break
                }
            }
            
            if(flagPush === true) {
                bufArr.push(action.payload);
                //bufArr[bufArr.length] = newProd
                //bufArr.unshift(newProd)
            }
            
            return {
                Summa: state.Summa + newProd.price ,
                ProductList: bufArr,
            }
        default:
           return state 
    }
    
}