import Value from "./Models/Value.js"
import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /** @type {Item[]} */
  storeItems = [
    new Item({
      name: "Boo",
      price: 200,
      amountInStock: 100,
      description: "A test"
  }),
  new Item({
    name: "T2est",
    price: 400,
    amountInStock: 100,
    description: "A test"
}),
new Item({
  name: "Hike",
  price: 350,
  amountInStock: 100,
  description: "A test"
}),
new Item({
  name: "Test",
  price: 300,
  amountInStock: 100,
  description: "A test"
})]
  userCurrency = 1000


  /** @type {Item[]} */
  userCart = [
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
