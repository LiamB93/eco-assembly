import db from "../db/connection.js";
import product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
//import home_and_life from "../home_and_life"

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "rlmorrison",
    email: "rlmorrison.74@gmail.com",
    password_digest: await bcrypt.hash("thebestpassword", 11),
  });
  await user1.save();

    const products = [
      {
        name: 'Colored Pencils',
        imgURL: 'https://res.cloudinary.com/weatherman74/image/upload/v1633709771/ECOassembly/ybvxccioxjnmbeb4trzd.jpg',
        price: '7.99',
        description: 'These colored pencils are made entirely of materials repurposed from recycled paper.',
        category: 'zeroWaste'
      },
      {
        name: 'Baby Bamboo Forks and Spoons',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '6.99',
        description: 'High Quality Bamboo Disposable Forks, Spoons. 100% Compostable',
        category: 'homeLife'
      },
      {
        name: 'Bamboo Toothbrush',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '4.99',
        description: 'Bamboo toothbrushes are the perfect choice for families who enjoy the benefits of natural products that help to reduce landfill waste',
        category: 'homeLife'
      },
      {
        name: 'Bamboo Cooking Utensils',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '39.99',
        description: 'eco friendly kitchen tools, supplies',
        category: 'homeLife'
      },
      {
        name: 'Bamboo Toilet Paper',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '13.99',
        description: 'bamboo toilet paper is made with 100% unbleached, silky-strong bamboo fibers. BPA-free for bum wellness',
        category: 'homeLife'
      },
      {
        name: 'Compostable Wooden Spoon',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '31.99',
        description: 'Disposable Wooden Spoons | 100% All-Natural, Eco-Friendly, Biodegradable, and Compostable ',
        category: 'homeLife'
      },
      {
        name: 'Eco Friendly Laundr Basket',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '89.99',
        description: 'The clean solution to dirty laundry. Keep your clothing and linens out of sight until laundry day with this beautiful and timeless eco friendly basket. It has been thoughtfully handwoven from locally sourced grasses and recycled plastic and will last for years to come.',
        category: 'homeLife'
      },
      {
        name: 'Natural Baking Cups',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '10.99',
        description: 'If You Care Baking Cups are made from unbleached totally chlorine-free (TCF) greaseproof paper. They are perfect for sweet and savory baked goods.',
        category: 'homeLife'
      },
      {
        name: 'Natural Landry Powder',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '23.99',
        description: 'Made with highly concentrated, all natural ingredients like baking soda, pH boosting washing soda, and skin softening coconut oil, this laundry powder easily removes stains and stink to leave clothes soft and clean. It is compatible with both HE and Standard washing machines–and contains no additives',
        category: 'homeLife'
      },
      {
        name: 'Recycled Aluminum Foil ',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '9.99',
        description: 'If You Care Aluminum Foil is made with 100% recycled aluminum. While traditional foil manufacturing is a power-intensive process, ours uses 95% less energy to make',
        category: 'homeLife'
      },
      {
        name: 'Reusbale Paper Towels',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '14.99',
        description: 'Our paper towels are reusable. You can clean them in the washing machine after using and they will come out fresh and ready to use again.',
        category: 'homeLife'
      },
      {
        name: 'Soap dispenser',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '14.99',
        description: 'The innovative hand soap tablet & Forever Bottle that saves money and space without waste',
        category: 'homeLife'
      },
      {
        name: 'Eco Friendly Food Container',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '17.99',
        description: 'Impress your audience all while being eco-friendly. Our wide range of compostable dinnerware allows you to find the style that fits you best. Unique Dining Experience.',
        category: 'homeLife'
      },
      {
        name: 'Unwrapped Hand Soap',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '12.99',
        description: "Committed to eliminating single-use items and excessive packaging waste (hand soap really doesn't need to be wrapped, you'll see'",
        category: 'homeLife'
      },
      {
        name: 'Wool Pillow',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '78.99',
        description: 'Discover premium wool pillows. Organic, premium wool filling encased in crisp, ethically-sourced cotton. The perfect pillow for high-quality sleep. Buy now',
        category: 'homeLife'
      },
      {
        name: 'Eco Friendly Lint Removal',
        imgURL: '../home_and_life/babys-fork-and-spoons.jpeg',
        price: '14.99',
        description: 'Eco-Orbis lint remover is one of the best eco-friendly lint removers available in the market. It is manufactured with 100% sustainable materials.',
        category: 'homeLife'
      }
      
];

  await product.insertMany(products);
  console.log("Created users and products!");
  db.close();
};

insertData();
