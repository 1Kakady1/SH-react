/*const initalState = {
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
            count: 1,
            image: "404.jpg",
            price: 133,
            code: 1001,
            count: 1,
            size: ["1","2"]
        },
    ],
    Summa: 406,
    countProd: 3
}
const initalState = {
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
}*/
import {CLEAR_CART,DELETE_PRODUCT_CART,ADD_IN_CART,SESSION_LOAD,CART_COUNTER_ADD,CART_COUNTER_SUB} from '../actions/actionsType'

const initalState = {
    ProductList: [],
    Summa: 0,
    countProd: 0
}


export default function cart(state=initalState,action){
    
    switch (action.type){
        case CLEAR_CART:
            return {
                ProductList: [],
                Summa: 0,
                countProd: 0
            }
        case DELETE_PRODUCT_CART:
            let  bufRev = state.ProductList;
            let j = 0, len = state.ProductList.length,spl=[];

            while(j<len ){
                if(action.payload !== j){
                    spl.push(state.ProductList[j])
                }

                j++
            }
           
            if(state.ProductList.length -1  === 0){
                spl = []
            }

            return {
                Summa: state.Summa - bufRev[action.payload].price ,
                ProductList: spl,
                countProd: state.countProd - bufRev[action.payload].count
            }
        case ADD_IN_CART:
            let bufArr = state.ProductList,
                newProd = action.payload,
                flagPush = true,countPrice = 1;

            for(let i = 0 ; i <  state.ProductList.length; i++){
                if(bufArr[i].code === newProd.code){
                    bufArr[i].price = parseInt(bufArr[i].price) +  newProd.constPrice 
                    bufArr[i].count = bufArr[i].count + 1
                    countPrice = bufArr[i].count
                    bufArr[i].size.push(newProd.size[0])
                    flagPush = false
                    break
                }
            }
    
            if(flagPush === true) {
                bufArr.push(action.payload);
            } 
            return {
                //Summa: state.Summa +  (newProd.price/countPrice),
                Summa: state.Summa +  newProd.constPrice,
                ProductList: bufArr,
                countProd: state.countProd + 1
            }
        case SESSION_LOAD:
            //console.log("session ok")
            const arrSession = action.payload
            console.log('session',arrSession.cart)
            return {
                Summa: arrSession.cart.Summa ,
                ProductList: arrSession.cart.ProductList ,
                countProd: arrSession.cart.countProd
            }

        case CART_COUNTER_ADD:
            let jj = 0, lenAdd = state.ProductList.length,sumOne=0;
            while(jj<lenAdd ){
                if(action.payload === jj){

                    sumOne = state.ProductList[jj].price/state.ProductList[jj].count;
                    state.ProductList[jj].price +=  sumOne;
                    state.ProductList[jj].count+=1;
                    
                    break;
                }

                jj++
            }

            return {
                Summa:  state.Summa + sumOne ,
                ProductList: state.ProductList,
                countProd: state.countProd + 1
            } 
        case CART_COUNTER_SUB:
            let jm = 0, lenSub= state.ProductList.length,sumOneSub=0;
           
            while(jm<lenSub ){
                if(action.payload === jm && state.ProductList[jm].count > 1){

                    sumOneSub = state.ProductList[jm].price/state.ProductList[jm].count;
                    state.ProductList[jm].price -=  sumOneSub;
                    state.ProductList[jm].count-=1;

                    return {
                        Summa:  state.Summa - sumOneSub ,
                        ProductList: state.ProductList,
                        countProd: state.countProd - 1
                    }
                }

                jm++
            }

            return  state 
        default:
           return state 
    }
}