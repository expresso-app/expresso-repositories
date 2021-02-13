/* eslint-disable prettier/prettier */
const { MenuItemOptionItem } = require("expresso-models");
const Repository = require("./repository");

class MenuItemOptionItemRepository extends Repository {
    constructor() {
      super(MenuItemOptionItem);
    }
}

module.exports = new MenuItemOptionItemRepository();    
