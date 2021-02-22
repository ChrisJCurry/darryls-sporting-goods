import {generateId} from '../Utils/GenerateId.js'

export default class Item {
    constructor({name = "", price = 0, amountInStock = 0, description = "", id = generateId(), orderId = generateId()}) {
        this.name = name;
        this.price = price
        this.amountInStock = amountInStock;
        this.description = description;
        this.id = id;
        this.orderId = orderId;
    }

    get Template() {
        return /* html */`
        <div class="col-2 card mx-auto">
                <div class="card-body">
                    <h2>Name: ${this.name}</h2>
                    <h2>Price: $${this.price}</h2>
                    <h2>Description:</h2>
                    <p>${this.description}</p>
                    <h4>Stock: ${this.amountInStock} left!</h4>
                    <div class="d-flex justify-content-end mt-4">
                        <button type="button" class="btn btn-danger btn-lg font-weight-bold" onclick="app.cartsController.addToCart('${this.id}')">Add to Cart</button>
                    </div>
                </div>
            </div>
        `
    }

    get CartTemplate() {
        return /* html */`
        <div class="col-12 card">
                <div class="card-body">
                    <h4>Name: ${this.name}</h4>
                    <h5>Price: $${this.price}</h5>
                    <h5>Stock: ${this.amountInStock}</h5>
                    <div class="d-flex">
                        <h5>Description: </h5>
                        <h5 class="pl-2">${this.description}</h5>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-danger font-weight-bold" onclick="app.cartsController.deleteFromCart('${this.orderId}')">&#10008;</button>
                    </div>
                </div>
            </div>
        `
    }
}