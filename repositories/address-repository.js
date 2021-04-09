const { Address } = require('expresso-models');
const Repository = require("./repository");

const userRepository = require("./user-repository");

class AddressRepository extends Repository {
    constructor() {
        super(Address);

        this.userRepository = userRepository;
    }

    async getByUserId(userId) {
        const user = await this.userRepository.getById(userId);

        const addresses = await Address.find({ "user": user._id });
        return addresses;
    }

}

module.exports = new AddressRepository();