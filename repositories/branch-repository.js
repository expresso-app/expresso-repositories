/* eslint-disable prettier/prettier */
const { Branch } = require("expresso-models");
const Repository = require("./repository");

class BranchRepository extends Repository{
  constructor() { 
    super(Branch); 
  }

  async getByRestaurantId(restaurantId) {
    try {
      const branches = await Branch.find({ "restaurant.id": restaurantId });
      return branches;
    }
    catch(err) {
      throw new Error(err);
    }
  }
  
  async getByIdWith(id, field) {
    try {
      const branch = await Branch.findOne({ id }).populate({
        path: field,
        select: "-__v"
      });
      return branch;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getBySlug(restaurantId ,slug) {
    try {
      const restaurantBranches = await this.getByRestaurantId(restaurantId);
      if(!restaurantBranches || !restaurantBranches.length === 0) return null;
      // console.log(restaurantBranches);

      const branch = restaurantBranches.find(b => b.slug === slug);
      return branch;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new BranchRepository();