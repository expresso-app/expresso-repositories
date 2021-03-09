/* eslint-disable prefer-destructuring */
/* eslint-disable one-var */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
const { Order } = require('expresso-models');
const Repository = require("./repository");

class OrderRepository extends Repository {
    constructor() {
        super(Order);
    }
}

module.exports = new OrderRepository();