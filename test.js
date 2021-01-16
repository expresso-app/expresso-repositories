console.log("expresso repositories");

const dotenv = require("dotenv");
const mongoose = require("mongoose");


const connectionString = "mongodb://127.0.0.1:27017/expresso";
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(conn => {
        // console.log(conn.connections); 
        console.log("DB Connection Successful.")
    })
    .catch(err => {
        console.error(err);
        console.log("Unable to connect to DB.");

        process.exit(1);
    });


async function test() {
    const { tagRepository, userRepository, 
            countryRepository, cityRepository, areaRepository, 
            restaurantRepository, branchRepository,
            menuRepository, menuSectionRepository, menuItemRepository } = require('./index');

    // const tags = await tagRepository.getAll();
    // console.log(tags);

    // const admin = await userRepository.getAdminByEmail("admin@expresso.com");
    // console.log(admin);

    // const branch = await branchRepository.getBySlug("b2165acd-4148-47b8-a60f-ab12e8296547", "heliopolis");
    // console.log(branch);

    // const admin = await userRepository.getByFieldValue({ id: "5423777d-2fa8-43a8-b6cb-6f5e067ac451" });
    // console.log(admin);

    // const restaurantBranches = await branchRepository.getByRestaurantId("b2165acd-4148-47b8-a60f-ab12e8296547");
    // console.log(restaurantBranches);

    // ------------------------------------------------------

    /* 
        restaurantId: 18dcf16f-1ea1-4c75-858a-dca79a801fed 
        menuId: c51d37b9-0305-495d-a227-b07f88b3d911
        menuSectionId: 10f235c2-b250-408c-ba5b-8109fe15b2cc
        menuItemId: 33d6f72f-c2f0-4442-8712-6027ad136700
    */

    // const menu = await menuRepository.create({
    //     restaurant: "18dcf16f-1ea1-4c75-858a-dca79a801fed"
    // });
    // console.log(menu);

    // const menu = await menuRepository.getById("c51d37b9-0305-495d-a227-b07f88b3d911");
    // console.log(menu);

    // const menuSection = await menuSectionRepository.create({
    //     name: "Main Course",
    //     menu: "c51d37b9-0305-495d-a227-b07f88b3d911"
    // });
    // console.log(menuSection);

    const menuItem = await menuItemRepository.create({
        name: "Item 1",
        price: 20,
        description: "this is item 1",
        menuSection: "10f235c2-b250-408c-ba5b-8109fe15b2cc"
    });
    console.log(menuItem);
}

test();

