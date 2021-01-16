const Repository = require('./repositories/repository');
const QueryBuilder = require('./repositories/query-builder');

const areaRepository = require('./repositories/area-repository');
const branchRepository = require('./repositories/branch-repository');
const cityRepository = require('./repositories/city-repository');
const countryRepository = require('./repositories/country-repository');
const restaurantRepository = require('./repositories/restaurant-repository');
const tagRepository = require('./repositories/tag-repository');
const userRepository = require('./repositories/user-repository');
const menuRepository = require('./repositories/menu-repository');
const menuSectionRepository = require('./repositories/menuSection-repository');
const menuItemRepository = require('./repositories/menuItem-repository');

module.exports = {
    Repository, QueryBuilder,
    areaRepository,
    branchRepository,
    cityRepository,
    countryRepository,
    restaurantRepository,
    tagRepository,
    userRepository,
    menuRepository,
    menuSectionRepository,
    menuItemRepository
};