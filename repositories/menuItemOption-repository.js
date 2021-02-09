/* eslint-disable prettier/prettier */
const { MenuItemOption } = require("expresso-models");
const Repository = require("./repository");

class MenuItemOptionRepository extends Repository {
    constructor() {
      super(MenuItemOption);
    }
}

module.exports = new MenuItemOptionRepository();    
