import { SetStateAction } from "react";
import { CardProduct, Product } from "../model/api-model";


/* This method compares the current product data after currency select
 * in order to update the cart object based on the items available in the cart
*/
export const compareObjectForCartUpdate = (obj1: CardProduct[], obj2: Product[]) => {
    obj1.map((res) => {
        const tempObj = obj2.find((v) => v.id === res.id);
        if (tempObj) {
            res['product'] = tempObj
        }
    })
    return obj1;
}

// This method adds an item to cart and also increases the item if the quantity is increased
export const addItemToCart = (prod: any, cartStorage: CardProduct[], setCartStorage: SetStateAction<any>) => {
    if (cartStorage.length === 0) {
        setCartStorage([{
            'id': prod.id,
            'product': prod,
            'qty': 1
        }]);
    } else {
        let added = 0;
        const immutableStorage = cartStorage.slice(); // Create a new object from the state so we have an immutable store
        for (let i = 0; i < immutableStorage.length; i++) {

            if (prod.id === immutableStorage[i].product.id) {

                const qty = immutableStorage[i].qty;
                immutableStorage[i].qty = qty + 1;
                added = 1;
            }
            setCartStorage(immutableStorage);
        }
        if (added === 0) {
            immutableStorage.push({
                'id': prod.id,
                'product': prod,
                'qty': 1
            });
            setCartStorage(immutableStorage);
        }
    }

}

// This method removes a quantity if the quantity is more than one or removes the item if the quantity is one
export const removeItemFromCart = (prodId: any, cartStorage: CardProduct[], setCartStorage: SetStateAction<any>) => {
    const newArray: CardProduct[] = cartStorage.slice();
    for (let i in newArray) {
        if (newArray[i].id === prodId) {
            if (newArray[i].qty === 1) {
                newArray.splice(newArray.findIndex((val: any) => val.id === prodId), 1)
            } else {
                newArray[i].qty = newArray[i].qty - 1;
            }
        }
    }
    setCartStorage(newArray);
}

// This method removes product from cart
export const removeProductFromCart = (prodId: number, cartStorage: CardProduct[], setCartStorage: SetStateAction<any>) => {
    const newArray: CardProduct[] = cartStorage.slice();
    newArray.splice(newArray.findIndex((val) => val.id === prodId), 1);
    setCartStorage(newArray);
}