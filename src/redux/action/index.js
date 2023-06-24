// for add item to cart
export const addCart =(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

// for Delete Item from Cart

export const delCart = (product) =>{
    return{
        type:"DELITEM",
        payload : product
    }
}