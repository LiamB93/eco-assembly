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
      },
      {
        name: 'Hydro Flask Outdoor Water Jug',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067386/Hydro-Flask-Oasis-Water-Jug-128oz-1_su0rwt.jpg',
        price: '48.99',
        description: "Drink in the adventure with the Hydro Flask Oasis Water Jug 128oz. Made from 18/8 pro-grade stainless steel to ensure pure taste and no flavor transfer, this eco-friendly reusable water jug has a proprietary powder coat for an easy grip that won't chip",
        category: 'outdoor'
      },
      {
        name: 'Recycled Toddler Bike',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067386/2-in-1-recycled-toddler-bike-raw-1_wwz1ju.jpg',
        price: '124.99',
        description: "Made from sustainably harvested birch wood, this innovative tricycle is easy to assemble and repair and is incredibly lightweight. It encourages balance and mobility for little ones and features durable tires for outdoor adventuring! An adjustable seat means it's ready to grow with your child for years of fun and play. For 12 months to 5 years",
        category: 'outdoor'
      },
      {
        name: 'Stainless Mountain Steel Bottle',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067386/United-By-Blue-To-the-Mountains-Stainless-Steel-Bottle-32oz-1_gfllvm.jpg',
        price: '38.99',
        description: "Ditch single-use plastic bottles with the To the Mountains Stainless Steel Bottle from United by Blue! Made from double-wall insulated stainless steel, this 32oz water bottle keeps drinks hot or cold for up to 12 hours",
        category: 'outdoor'
      },
      {
        name: 'Natural Anti Bug Spray',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067386/anti-bug-spray_wokyts.jpg',
        price: '12.99',
        description: "Good for your skin, but bad for the bugs, Badger's Anti-Bug Spray is the all natural DEET-free bug repellent you need for warm summer nights. Non-toxic essential oils like citronella, rosemary and wintergreen pairs with a base of organic soybean and castor oil to soothe itchy skin while naturally warding off mosquitos",
        category: 'outdoor'
      },
      {
        name: 'Recycled Leather Bike Bag',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067387/recycled-leather-bike-bag-aqua-1_ilrwww.jpg',
        price: '44.99',
        description: "Made from 100% repurposed nylon that was headed to the landfill by other factories, this bag features a unique colorway, unlike any others",
        category: 'outdoor'
      },
      {
        name: 'All Terrain Outdoor Stroller',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067387/03-bumbletide-all-terrain-stroller-clay-1-1_b4q9tv.jpg',
        price: '295.99',
        description: "Take on any adventure with the Indie All Terrain Stroller,The lightweight, compact frame is made from eco-friendly materials with innovative designs that work for your lifestyle. It has durable air-filled tires and all-wheel suspension for a comfortable ride, plus safety features like a 5-point breakaway harness with shoulder pads",
        category: 'outdoor'
      },
      {
        name: 'Eco Stainless Steel Kids Lunchbox',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067387/EcoLunchbox-Stainless-Steel-Kids-Camping-Plate-1_doylex.jpg',
        price: '16.99',
        description: "No more disposable plates at mealtime with your kids! Plastic-free, lead-free, BPA-free, phthalate-free & waste-free, the Kid's Tray by ECOlunchbox is a perfect camping tray, high-chair tray, divided plate, or cafeteria tray",
        category: 'outdoor'
      },
      {
        name: 'Eco Friendly Travel Backpack',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067387/Travel_Pack_svdael.jpg',
        price: '57.99',
        description: "The Travel Pack is the perfect backpack to take with you on any adventure. Made from lightweight recycled materials, this bag is both earth-friendly and versatile! It conveniently stuffs into a built-in pocket for travel",
        category: 'outdoor'
      },
      {
        name: 'Natural Bamboo Band-Aids',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067387/patch-large-square-and-rectangles-10pk-charcoal-1-1_qsty1f.jpg',
        price: '8.99',
        description: "Heal cuts and scratches naturally with the Large Natural Compostable Bamboo Bandages,Made from 100% organic and natural bamboo fiber with a mineral-based pressure-sensitive adhesive (PSA), this bandage is compostable and biodegradable at the end of its life",
        category: 'outdoor'
      },
      {
        name: 'Ready to Grow Seed Starter Pack',
        imgURL: 'https://res.cloudinary.com/desk8znsq/image/upload/v1634067387/Ready-To-Grow-Seed-Starter_pkqb1e.jpg',
        price: '2.99',
        description: "Get growing with the Ready-to-Grow Seed Starter Kit,Featuring seeds, a coco grow medium, and a biodegradable upcycled cow manure container, this kit comes with everything you need — simply drop your new plants into the soil and watch them grow!",
        category: 'outdoor'
      },
      {
        name: "Recycled Socks",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068949/Solmate-Socks-Mirage-Solmate-Crew-Socks-1-768x768_vuzndb.jpg",
        price: "15.99",
        description: "Maggie's Organics makes their Beekeeper Dress Socks from GOTS Certified organic cotton–a breathable, yet durable fabric that is perfect for everyday wear and washing.",
        category: "clothing"
      },
      {
        name: "Cork Backpack",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/cork-pocket-backpack-eco-friendly_a3dele.jpg",
        price: "149.99",
        description: "A fashionable and functional pocket backpack made from smooth natural cork!",
        category: "clothing"
      },
      {
        name: "Bamboo Earings",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/chic-circle-eco-friendly-bamboo-earrings_uccmxc.jpg",
        price: "18.99",
        description: "Bamboo earings with an elegant, minimalistic design that show off the natural bamboo look and feel. Earrings also double as essential oil diffusers.",
        category: "clothing"
      },
      {
        name: "Pine Trees Eco T-Shirt",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/Copy-of-cinder-salt-pine-trees-mens-tee-ORG-low-res_cyf3gz.jpg",
        price: "30.00",
        description: "Cut from a heavyweight 60% organic cotton % 40% recycled RPET poly jersey knit. Made with zero dye, zero water, and printed in the Cinder + Salt zero waste print shop.",
        category: "clothing"
      },
      {
        name: "Women's Dorado Half-Zip Fleece Jacket",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/Cotopaxi-Womens-Dorado-Half-Zip-Fleece-Jacket-1_cxugfy.jpg",
        price: "99.99",
        description: "Made from 100% eco-friendly recycled polyester, this fleece jacket has front hand pockets and a stretchy, zippered chest pocket.",
        category: "clothing"
      },
      {
        name: "Organic Cotton Reusable Face Mask",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068949/Organic-Cotton-Face-Mask-1_h9gip1.jpg",
        price: "19.99",
        description: "Super soft and ultra-minimal, this mask is made with 100% organic cotton and features cozy over the ear straps (also cotton!).",
        category: "clothing"
      },
      {
        name: "Women’s Mindo Vegan Sneakers",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068949/Saola_Womens_Mindo_Sand_1_vpg5ge.jpg",
        price: "109.99",
        description: "For ultra comfort and a lighter step on the planet, check out the Women's Mindo Vegan Sneakers by SAOLA. Named after Ecuador's breathtaking landscape and biodiversity, the Mindo is the go-to for outdoor exploration or the daily commute.",
        category: "clothing"
      },
      {
        name: "Pacific Crest Trail Thru-Hiker Trucker Hat",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/11-seek-dry-goods-pacific-crest-trail-thru-hiker-trucker-hat-jungle-1-1_wlbay4.jpg",
        price: "29.00",
        description: "The blend of organic cotton and recycled polyester, made from post-consumer plastic, gives the cap a super soft feel for all day comfort. Whether you're having a bad hair day or off for a sunny hike, this hat is the perfect accessory.",
        category: "clothing"
      },
      {
        name: "Basic Hemp Tank",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/hemptique-basic-hemp-tank-front-gray_wtxxh7.jpg",
        price: "$24.99",
        description: "You'll rock any athletic outfit with this organic cotton and hemp knit fabric. It's not only eco-friendly, but antimicrobial too, so it stays fresh throughout the entire day's activities.",
        category: "clothing"
      },
      {
        name: "Tortuga Kids Recycled Sunglasses",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/04-parafina-tortuga-red-1-1_tbc7hf.jpg",
        price: "$45.00",
        description: "Protect your little one's eyes while keeping them looking stylish with the Tortuga Kids Recycled Sunglasses by Parafina! These ultra-light and flexible glasses are made with 100% recycled rubber",
        category: "clothing"
      },
      {
        name: "Hemp Panama Hat",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/conner-hats-hemp-sun-shade-panama-hat-camel-1_vk1si0.jpg",
        price: "$49.00",
        description: "Conner Hats created this perfect breathable and durable hat made out of hemp. This hat will protect you from the sun and be your favorite travel accessory!",
        category: "clothing"
      },
      {
        name: "Plant Based Tank",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/Copy-of-cinder-salt-plant-based-ladies-tank-low-res_u2wrjs.jpg",
        price: "32.00",
        description: "The Plant Based Racerback Tank is hand-printed in a zero waste printshop using reclaim inks. Woot woot!",
        category: "clothing"
      },
      {
        name: "Unisex Pacific Crest Trail Thru-Hiker Graphic Tee",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068949/06-seek-dry-goods-pacific-crest-trail-thru-hiker-heather-snow-1-1_rfpddr.jpg",
        price: "27.99",
        description: "This USA-made tee features an athletic-fit and a hand-drawn image that is screen-printed with low-impact, non-toxic dyes. The blend of organic cotton and recycled polyester, made from post-consumer plastic, gives the shirt a super soft feel for all day comfort.",
        category: "clothing"
      },
      {
        name: "Live Local Boatneck Sweatshirt",
        imgURL: "https://res.cloudinary.com/desk8znsq/image/upload/v1634068950/Copy-of-cinder-salt-live-local-ladies-boatneck-v2-low-res_pvilro.jpg",
        price: "61.99",
        description: "This ultra-soft pullover is made with a unique blend of organic cotton, recycled polyester, and rayon. The Live Local Boatneck Sweatshirt features a tapered fit, kangaroo pocket and raw-edge neckline.",
        category: "clothing"
      }
      
      
];

  await product.insertMany(products);
  console.log("Created users and products!");
  db.close();
};

insertData();
