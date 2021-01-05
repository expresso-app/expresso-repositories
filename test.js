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
            restaurantRepository, branchRepository } = require('./index');

    // const tags = await tagRepository.getAll();
    // console.log(tags);

    // const admin = await userRepository.getAdminByEmail("admin@expresso.com");
    // console.log(admin);

    // const branch = await branchRepository.getBySlug("b2165acd-4148-47b8-a60f-ab12e8296547", "heliopolis");
    // console.log(branch);
}

test();

