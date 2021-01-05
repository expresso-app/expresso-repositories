/* eslint-disable prettier/prettier */
const { Country } = require("expresso-models");
const Repository = require("./repository");

class CountryRepository extends Repository {
  constructor() {
    super(Country);
  }

  async getBySlug(slug) {
    try {
      const country = await Country.findOne({ slug });
      return country;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new CountryRepository();