import db from "../db/connection.js";
import product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "rlmorrison",
    email: "rlmorrison.74@gmail.com",
    password_digest: await bcrypt.hash("thebestpassword", 11),
  });
  await user1.save();

    const products = [{
        name: 'Colored Pencils',
        imgURL: 'https://res.cloudinary.com/weatherman74/image/upload/v1633709771/ECOassembly/ybvxccioxjnmbeb4trzd.jpg',
        price: '7.99',
        description: 'These colored pencils are made entirely of materials repurposed from recycled paper.',
        category: 'zeroWaste'
  }];

  await product.insertMany(products);
  console.log("Created users and products!");
  db.close();
};

insertData();
