/* eslint-disable prettier/prettier */
const { MenuItem } = require("expresso-models");
const Repository = require("./repository");

class MenuItemRepository extends Repository {
    constructor() {
      super(MenuItem);
    }
}

module.exports = new MenuItemRepository();    
