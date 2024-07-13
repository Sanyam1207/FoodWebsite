const mongoose = require("mongoose");
const initdata =  require("./data.js");
const Listing = require("../models/listing.js");
const Mongoose_Url = "mongodb://localhost:27017/FoodCourt";


main().then(() => {
    console.log("Connection Made to database !!");
}).catch((err) => {
    console.log(err)
});

async function main(){
    await mongoose.connect(Mongoose_Url);
};

const initDB = async () => {
    await Listing.deleteMany({});

    initdata.data = initdata.data.map((obj) => ({...obj, owner : "6687e51692229e02879024ba"}))

    await Listing.insertMany(initdata.data);
    console.log("Data was initialized !!");
};

initDB();