/* eslint-disable prettier/prettier */
const { Menu } = require("expresso-models");
const Repository = require("./repository");

class MenuRepository extends Repository {
  constructor() {
    super(Menu);
  }

  // async getStats() {
  //   return await Menu.aggregate([
  //     // { 
  //     //   $match: { specialOffers: { $eq: true } }
  //     // },
  //     {
  //       $group: {
  //         _id: "$restaurant.rating",
  //         num: { $sum: 1 },
  //         maxRating: { $max: "$restaurant.rating" },
  //         minRating: { $min: "$restaurant.rating" },
  //         avgRating: { $avg: "$restaurant.rating" }
  //       }
  //     },
  //     {
  //       $sort: { maxRating: -1 }
  //     }
  //   ]);
  // }

  // async getCount() {
  //   return await Menu.countDocuments();
  // }

  async addMenuSection(menuId, menuSection) {

    // 1. get menu object

    

    return null;
  }

}

module.exports = new MenuRepository();    