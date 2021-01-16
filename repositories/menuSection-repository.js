/* eslint-disable prettier/prettier */
const { MenuSection } = require("expresso-models");
const Repository = require("./repository");

class MenuSectionRepository extends Repository {
    constructor() {
      super(MenuSection);
    }
}

module.exports = new MenuSectionRepository();    
