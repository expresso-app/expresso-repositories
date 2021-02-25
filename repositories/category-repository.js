const { Category } = require('expresso-models');
const Repository = require("./repository");

class CategoryRepository extends Repository {
    constructor() {
        super(Category);
    }
}

module.exports = new CategoryRepository();