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
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974301/babys-fork-and-spoon_fs4zax.jpg',
        price: '6.99',
        description: 'High Quality Bamboo Disposable Forks, Spoons. 100% Compostable',
        category: 'homeLife'
      },
      {
        name: 'Bamboo Toothbrush',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/bamboo_toothbrush_imz9kg.jpg',
        price: '4.99',
        description: 'Bamboo toothbrushes are the perfect choice for families who enjoy the benefits of natural products that help to reduce landfill waste',
        category: 'homeLife'
      },
      {
        name: 'Bamboo Cooking Utensils',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974301/bamboo-cooking-utensils_u3yaxy.jpg',
        price: '39.99',
        description: 'eco friendly kitchen tools, supplies',
        category: 'homeLife'
      },
      {
        name: 'Bamboo Toilet Paper',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/bamboo-toilet-paper_r0omzh.jpg',
        price: '13.99',
        description: 'bamboo toilet paper is made with 100% unbleached, silky-strong bamboo fibers. BPA-free for bum wellness',
        category: 'homeLife'
      },
      {
        name: 'Compostable Wooden Spoon',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974301/Bamboo_Spoons_ayrzdo.jpg',
        price: '31.99',
        description: 'Disposable Wooden Spoons | 100% All-Natural, Eco-Friendly, Biodegradable, and Compostable ',
        category: 'homeLife'
      },
      {
        name: 'Eco Friendly Laundry Basket',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/eco-friendly-landry-basket_va1sf1.jpg',
        price: '89.99',
        description: 'The clean solution to dirty laundry. Keep your clothing and linens out of sight until laundry day with this beautiful and timeless eco friendly basket. It has been thoughtfully handwoven from locally sourced grasses and recycled plastic and will last for years to come.',
        category: 'homeLife'
      },
      {
        name: 'Natural Baking Cups',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/natural-baking-cups_b121b2.png',
        price: '10.99',
        description: 'If You Care Baking Cups are made from unbleached totally chlorine-free (TCF) greaseproof paper. They are perfect for sweet and savory baked goods.',
        category: 'homeLife'
      },
      {
        name: 'Natural Landry Powder',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/natural-laundry-powder_cepnj2.jpg',
        price: '23.99',
        description: 'Made with highly concentrated, all natural ingredients like baking soda, pH boosting washing soda, and skin softening coconut oil, this laundry powder easily removes stains and stink to leave clothes soft and clean. It is compatible with both HE and Standard washing machines–and contains no additives',
        category: 'homeLife'
      },
      {
        name: 'Recycled Aluminum Foil ',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/recycled-aluminum-foil_ah0xrs.jpg',
        price: '9.99',
        description: 'If You Care Aluminum Foil is made with 100% recycled aluminum. While traditional foil manufacturing is a power-intensive process, ours uses 95% less energy to make',
        category: 'homeLife'
      },
      {
        name: 'Reusbale Paper Towels',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974301/reusable-papertowels_piblxt.jpg',
        price: '14.99',
        description: 'Our paper towels are reusable. You can clean them in the washing machine after using and they will come out fresh and ready to use again.',
        category: 'homeLife'
      },
      {
        name: 'Soap dispenser',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/soap_dispenser_bc8g4f.jpg',
        price: '14.99',
        description: 'The innovative hand soap tablet & Forever Bottle that saves money and space without waste',
        category: 'homeLife'
      },
      {
        name: 'Eco Friendly Food Container',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/togo_container_mikaxe.jpg',
        price: '17.99',
        description: 'Impress your audience all while being eco-friendly. Our wide range of compostable dinnerware allows you to find the style that fits you best. Unique Dining Experience.',
        category: 'homeLife'
      },
      {
        name: 'Unwrapped Hand Soap',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974303/unwrapped_handsoap_lo1q1e.jpg',
        price: '12.99',
        description: "Committed to eliminating single-use items and excessive packaging waste (hand soap really doesn't need to be wrapped, you'll see'",
        category: 'homeLife'
      },
      {
        name: 'Wool Pillow',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/Wool_pillow_hwin75.jpg',
        price: '78.99',
        description: 'Discover premium wool pillows. Organic, premium wool filling encased in crisp, ethically-sourced cotton. The perfect pillow for high-quality sleep. Buy now',
        category: 'homeLife'
      },
      {
        name: 'Eco Friendly Lint Removal',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1633974302/zero-waste-lint-removal_iscpug.jpg',
        price: '14.99',
        description: 'Eco-Orbis lint remover is one of the best eco-friendly lint removers available in the market. It is manufactured with 100% sustainable materials.',
        category: 'homeLife'
      },
      {
        name: '101 Ways to go Zero Waste',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061880/101-ways-to-go-zero-waste_phfx27.jpg',
        price: '10.99',
        description: 'From saying no to straws and plastic grocery bags to using compostable dish scrubbers and reusable water bottles, this guide will help you on your journey to plastic-free living. Full of tips, tricks, DIY recipes, and more, 101 Ways to Go Zero Waste dives into responsible consumption and how you can make a difference on the daily.',
        category: 'zeroWaste'
      },
      {
        name: 'Reusable Glass Cleaning Spray',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061911/refillable-glass-cleaining-spary_zetns3.png',
        price: '24.99',
        description: 'Stop wasting money and materials with single-use spray bottles, and switch to a reusable alternative with the Refillable Glass Cleaning Spray Bottle from Meliora. Unlike spray bottles that are made from plastic and cannot usually be recycled at the end of their life, this refillable glass bottle can be used again and again with all sorts of cleaning sprays or DIY recipes.',
        category: 'zeroWaste'
      },
      {
        name: 'Zero Waste Bamboo Straws',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061911/bamboo-straws_o9suvz.jpg',
        price: '7.99',
        description: "Every day, Americans use more than 500 million plastic straws. Replace the waste with bambu's Short Bamboo Straws, the only straws that are certified organic.",
        category: 'zeroWaste'
      },
      {
        name: 'Zero Waste Glass Straws',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061911/Zero-waste-glass-straw_xm1eeh.jpg',
        price: '12.99',
        description: "Did you know that Americans use over 500 million plastic straws per day? We know sipping from a straw is better for your teeth, and great for messy kids, seniors, and anyone in between– but single-use plastic straws are creating a huge waste problem.",
        category: 'zeroWaste'
      },
      {
        name: 'Bamboo Straws Travel Set',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061911/bamboo-straw-travel-kit_sxyger.jpg',
        price: '8.99',
        description: 'Did you know that Americans use over 500 million plastic straws per day? We know sipping from a straw is better for your teeth, and great for messy kids, seniors, and anyone in between– but single-use plastic straws are creating a huge waste problem.',
        category: 'zeroWaste'
      },
      {
        name: 'Zero Waste Glass Water Bottle',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061911/zero-waste-glass-water-bottle_x1cajk.jpg',
        price: '12.99',
        description: "We're On A Mission To Make The World Less Trashy. 100% Sustainable Goods All In One Place. Make A Positive Environmental Impact By Joining The Zero Waste Movement",
        category: 'zeroWaste'
      },
      {
        name: 'Reusable Wet Wipes',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061911/reusable-wet-wipes_ubp41h.jpg',
        price: '3.99',
        description: 'Avoid wasting money on normal wipes for your daily cleaning. Switch to resuable wipes to save your pocket and the environment',
        category: 'zeroWaste'
      },
      {
        name: 'Recycling Kitchen Bags',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061911/recycling-kitchen-bags_v5msut.jpg',
        price: '24.99',
        description: "Be prepared to say no to paper and plastic the next time you're at the store. This produce bag set of 4 contains two mesh bags, and two solid bags to handle all your shopping needs",
        category: 'zeroWaste'
      },
      {
        name: 'Hydro Flask Coffee Mug',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061912/hydro-flask-coffee-mug_sk0mqw.jpg',
        price: '54.99',
        description: "Reduce your waste from the coffee shop with the Hydro Flask Flex Sip Coffee Mug 16oz! Made from 18/8 pro-grade stainless steel to ensure pure taste and no flavor transfer, this eco-friendly reusable coffee mug fits under most coffee brewing systems and has a leak-proof lid with a smooth flow opening",
        category: 'zeroWaste'
      },
      {
        name: 'Reusable Grocey Bag',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061912/reusable-grocey-bag_ajtguf.jpg',
        price: '24.99',
        description: "Be prepared to say no to paper and plastic the next time you're at the store. This produce bag set of 4 contains two mesh bags, and two solid bags to handle all your shopping needs",
        category: 'zeroWaste'
      },
      {
        name: 'Zero Waste Insulated Water Bottle',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061912/zero-waste-insulated-water-bottle_rbfbuq.jpg',
        price: '49.99',
        description: "A better bottle. The Stainless Steel Reusable Water Bottle from A Good Company makes it easy to ditch the single-use plastic bottle! Made from double-walled vacuum insulated stainless steel, this bottle keeps cold drinks cold for 48 hours, and hot drinks hot for 20 hours",
        category: 'zeroWaste'
      },
      {
        name: 'Reusbale Produce Bag',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061912/reusable-produce-bag_vrwajd.jpg',
        price: '28.99',
        description: "Be prepared to say no to paper and plastic the next time you're at the store. This produce bag set of 4 contains two mesh bags, and two solid bags to handle all your shopping needs",
        category: 'zeroWaste'
      },
      {
        name: 'Eco Friendly Grocery Bag',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634061912/Eco-friendly-grocery-bag-set_bwjgxy.jpg',
        price: '27.99',
        description: "Be prepared to say no to paper and plastic the next time you're at the store. This produce bag set of 4 contains two mesh bags, and two solid bags to handle all your shopping needs",
        category: 'zeroWaste'
      }
      
      
];

  await product.insertMany(products);
  console.log("Created users and products!");
  db.close();
};

insertData();
