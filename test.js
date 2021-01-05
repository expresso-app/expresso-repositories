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
    const { tagRepository, userRepository } = require('./index');

    // const tags = await tagRepository.getAll();
    // console.log(tags);

    const admin = await userRepository.getAdminByEmail("admin@expresso.com");
    console.log(admin);
}

test();

