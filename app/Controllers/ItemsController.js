import {ProxyState} from '../AppState.js'
import {itemsService} from '../Services/ItemsService.js'

function _draw(){
    let shopItems = ProxyState.storeItems
    let template = ""
    shopItems.forEach(item=> template += item.Template)
    document.getElementById('app').innerHTML = template
    document.getElementById("currency-btn").innerText = `$${ProxyState.userCurrency.toFixed(2)}`
    //console.log(ProxyState.storeItems)
}

export default class ItemsController {
    constructor() {
        ProxyState.on("storeItems", _draw);
        _draw()
    }

    getUserCurrency() {
        itemsService.getUserCurrency();
    }

    addUserCurrency() {
        console.log("here")
        itemsService.addUserCurrency();
    }

}

_draw()