import ValuesController from "./Controllers/ValuesController.js";

import ItemsController from './Controllers/ItemsController.js'
import CartsController from './Controllers/CartsController.js'

class App {
  //valuesController = new ValuesController();
  itemsController = new ItemsController()
  cartsController = new CartsController();
}

window["app"] = new App();
