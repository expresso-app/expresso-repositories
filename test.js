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
    const { tagRepository, userRepository, addressRepository,
            countryRepository, cityRepository, areaRepository, 
            categoryRepository, restaurantRepository, branchRepository,
            menuRepository, menuSectionRepository, menuItemRepository, menuItemOptionRepository, menuItemOptionItemRepository,
            orderRepository, orderItemRepository } = require('./index');

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
                      ObjectId(6003498da230660f8c246e9b)
        menuId: 
        menuSectionId: 
        menuItemId: 
    */

    // const menu = await menuRepository.create({
    //     restaurant: "6003498da230660f8c246e9b"
    // });
    // console.log(menu);

    // const menu = await menuRepository.getById("c51d37b9-0305-495d-a227-b07f88b3d911");
    // console.log(menu);

    // const menuSection = await menuSectionRepository.create({
    //     name: "Main Course",
    //     menu: "600451141e621e3288a0f5d2"
    // });
    // console.log(menuSection);

    // const menuItem = await menuItemRepository.create({
    //     name: "Item 1",
    //     price: 20,
    //     description: "this is item 1",
    //     menuSection: "600451577ff0973670d3c297"
    // });
    // console.log(menuItem);

    // const menuItem = await menuItemRepository.update("33d6f72f-c2f0-4442-8712-6027ad136700", { 
    //     price: 30,
    //     options: [
    //         {
    //             name: "Bread Type",
    //             type: "Required",
    //             optionItems: [
    //                 { name: "Regular", value: 0 },
    //                 { name: "Extra", value: 3 },
    //             ]
    //         }
    //     ]
    // });

    // console.log(menuItem);

    // const section = await menuSectionRepository.getById("6d31af3f-9b0e-4079-88ed-f3a2be10e0bb");
    // console.log(section);
    
    // const menuItem = await menuItemRepository.getById("931a3fea-3864-4153-a87e-c54d6cff8010");
    // console.log(menuItem);

    // const menuItemOption = await menuItemOptionRepository.create({
    //     name: "Bread Type",
    //     type: "Required",
    //     optionItems: [
    //         { name: "Thick", value: 10 },
    //         { name: "Slim", value: 5 },
    //     ],
    //     menuItem: menuItem._id
    // });

    // const menuItemOption = await menuItemOptionRepository.getById("14a7ec3a-c91d-490c-a558-5e501c4e1438");
    // console.log(menuItemOption);

    // const category = await categoryRepository.create({ name: "test categ" });

    const userId = "1f227f4b-0778-4e2a-b11b-8846c0d7dc8c";
    // const order = await orderRepository.create({
    //     user: userId
    // });
    // console.log(order);

    const orderId = "0546f8c0-749b-485e-b1e5-6facf9b4fd8d";
    const menuItemId = "1bc84e76-1aec-494a-a2ee-b77482b43a55";
    // const orderItem = await orderItemRepository.create({
    //     order: orderId,
    //     menuItem: menuItemId,
    //     quantity: 4
    // });
    // console.log(orderItem);
}

test();

