/* eslint-disable prettier/prettier */
const { Menu } = require("expresso-models");
const Repository = require("./repository");

const restaurantRepository = require("./restaurant-repository");

class MenuRepository extends Repository {
  constructor() {
    super(Menu);

    this.restaurantRepository = restaurantRepository;
  }

  async getByRestaurantId(restaurantId) {
    const restaurant = await this.restaurantRepository.getById(restaurantId);

    const menu = await Menu.findOne({ "restaurant": restaurant._id }); 
    return menu;
  }

}

module.exports = new MenuRepository();    