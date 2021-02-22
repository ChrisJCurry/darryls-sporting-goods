import {ProxyState} from '../AppState.js'
import {cartsService} from '../Services/CartsService.js'

function _draw() {
    let template = ""
    let cartItems = ProxyState.userCart

    cartItems.forEach(i => template += i.CartTemplate)
    let updatedCost = cartsService.updateCart()
    template += /*html*/`
    <div>
    <button class="btn btn-primary btn-lg w-100" onclick="app.cartsController.buyFromShop(${this})">buy now $${updatedCost.toFixed(2)}</button>
    </div>
    `
    document.getElementById("cart-items").innerHTML = template;
    document.getElementById("currency-btn").innerText = `$${ProxyState.userCurrency}`
}

export default class CartsController {
    constructor() {
        ProxyState.on("userCart", _draw)
        ProxyState.on("userCurrency", _draw);
        _draw()
    }

    addToCart(id) {
        cartsService.addToCart(id)
    }

    deleteFromCart(id) {
        cartsService.deleteFromCart(id)
    }

    buyFromShop(id) {
        cartsService.buyFromCart(id)
    }

}

_draw()