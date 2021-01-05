/* eslint-disable prettier/prettier */
const { Area } = require('expresso-models');
const Repository = require("./repository");

class AreaRepository extends Repository {
  constructor() { 
    super(Area); 
  }

  async getByCityId(cityId) {
    try {
      const cities = await Area.find({ "city.id": cityId });
      return cities;
    }
    catch(err) {
      throw new Error(err);
    }
  }

  async getBySlug(slug) {
    try {
      const area = await Area.findOne({ slug });
      return area;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new AreaRepository();