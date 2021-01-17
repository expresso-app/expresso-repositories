/* eslint-disable prettier/prettier */
const { MenuSection } = require("expresso-models");
const Repository = require("./repository");

class MenuSectionRepository extends Repository {
    constructor() {
      super(MenuSection);
    }

    async addMenuItem(menuSectionId, menuItem) {
      return null;
    }
}

module.exports = new MenuSectionRepository();    
