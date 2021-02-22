import {ProxyState} from '../AppState.js'
import Cart from '../Models/Cart.js'
import Item from '../Models/Item.js'
import {generateId} from '../Utils/GenerateId.js'

class CartsService {

    addToCart(id) {
        let current = ProxyState.userCurrency
        let shopItem = ProxyState.storeItems
        for(let i = 0; i < shopItem.length; i++) {
            console.log(current, shopItem[i].price)
            if(shopItem[i].id == id) {
                if(ProxyState.userCurrency < shopItem[i].price) {
                    return;
                } else {
                    current -= shopItem[i].price
                    ProxyState.userCurrency = current
                }
            }
            
        }
        let temp
        for(let i = 0; i < ProxyState.storeItems.length; i++) {
            if(ProxyState.storeItems[i].id == id) {
                temp = ProxyState.storeItems[i]
            }
        }
        if(temp != null) {
            temp.orderId = generateId()
            console.log(temp.orderId, temp.id)
            ProxyState.userCart = [...ProxyState.userCart, new Item(temp)]
        }
    }

    deleteFromCart(id) {
        for(let i = 0; i < ProxyState.userCart.length; i++) {
            if(ProxyState.userCart[i].orderId == id) {
                console.log("ID: ", id)
                ProxyState.userCart = ProxyState.userCart.filter(item => item.orderId != id)
                
            }
        }
    }

    buyFromCart(id) {
        let temp = ProxyState.userCart;
        let totalCost = 0
        for(let i = 0; i < temp.length; i++) {
            totalCost += temp[i].price
        }
        console.log("Total: ", totalCost)
        ProxyState.userCart = []
    }

    updateCart() {
        let temp = ProxyState.userCart;
        let totalCost = 0
        for(let i = 0; i < temp.length; i++) {
            totalCost += temp[i].price
        }

        return totalCost;
    }

}

export const cartsService = new CartsService();