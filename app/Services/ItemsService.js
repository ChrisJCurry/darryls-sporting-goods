import {ProxyState} from '../AppState.js'
import Item from '../Models/Item.js'

class ItemsService {

    getUserCurrency() {
        let currencyBtnElem = document.getElementById("currency-btn")
        currencyBtnElem.innerText = `$${ProxyState.userCurrency.toFixed(2)}`
    }

    addUserCurrency() {
        let currentCurrency = ProxyState.userCurrency
        currentCurrency += 1000
        ProxyState.userCurrency = currentCurrency
        this.getUserCurrency()
    }
}

export const itemsService = new ItemsService();