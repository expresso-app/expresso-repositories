/* eslint-disable prefer-destructuring */
/* eslint-disable one-var */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
const { OrderItem } = require('expresso-models');
const Repository = require("./repository");

class OrderItemRepository extends Repository {
    constructor() {
        super(OrderItem);
    }
}

module.exports = new OrderItemRepository();