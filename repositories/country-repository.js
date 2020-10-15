/* eslint-disable prettier/prettier */
const { Country } = require("expresso-models");
const Repository = require("./repository");

class CountryRepository extends Repository{
  constructor() { 
    super(Country); 
  }
}

module.exports = new CountryRepository();