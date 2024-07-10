let menu1 = `
    Welcome to our Foody Fresh Restaurant! Please select a category to view our offerings:

    1. Breakfast
    2. Lunch
    3. Dinner

To place an order, please type the number of the category
For example: "Type /1 for Breakfast".

If you have any special requests or dietary restrictions, please let us know!
`;

let Breakfast = `
1.1 = Idli - Steamed rice cakes served with sambar and coconut chutney.
1.2 = Aloo Paratha - Whole wheat flatbread stuffed with spiced mashed potatoes, served with yogurt and pickle.
1.3 = Chole Bhature - Spicy chickpeas served with deep-fried bread.
1.4 = Puri Sabzi - Deep-fried bread served with a side of spiced potato curry.
1.5 = Dosa - Crispy fermented rice and lentil crepe, served with sambar.
`;

let Lunch = `
2.1 = Veg Thali - Preapred a de;icious veg thali.
2.2 = Butter Chicken - Tender chicken cooked in a rich buttery tomato gravy.
2.3 = Biryani - Fragrant rice dish cooked with spices and your choice of vegetables, chicken, or lamb.
2.4 = Jeera Rice - Basmati rice flavored with cumin seeds.
`;

let Dinner = `
3.1 = Paneer Butter Masala - Cottage cheese cooked in a rich tomato and butter gravy.
3.2 = Chana Masala - Spicy chickpea curry cooked with onions and tomatoes.
3.3 = Naan - Soft, leavened flatbread.
3.4 = Roti - Whole wheat flatbread.
3.5 = Gulab Jamun - Soft, deep-fried dumplings soaked in sugar syrup.
3.6 = Rasgulla - Spongy cottage cheese balls soaked in sugar syrup.
`;

const orderItems = {
    '1.1': 'Idli',
    '1.2': 'Aloo Paratha',
    '1.3': 'Chole Bhature',
    '1.4': 'Puri Sabzi',
    '1.5': 'Dosa',
    '2.1': 'Veg Thali',
    '2.2': 'Butter Chicken',
    '2.3': 'Biryani',
    '2.4': 'Jeera Rice',
    '3.1': 'Paneer Butter Masala',
    '3.2': 'Chana Masala',
    '3.3': 'Naan',
    '3.4': 'Roti',
    '3.5': 'Gulab Jamun',
    '3.6': 'Rasgulla',
};

const { Telegraf } = require('telegraf');

// t.me/coder_dsa_cpp_bot

const bot = new Telegraf('5827765598:AAEPzeahs79vILarf7azj9ozRb3jEKNtv48');

bot.start((ctx) => ctx.reply('Namaste!! Welcome to our Foody Fresh Restaurant Service. We are delighted you are here. explore our menu, or have any questions, feel free to ask. Our goal is to ensure you have a fantastic dinning experience with us.'));
bot.command('menu' , (ctx) => ctx.reply(menu1));
bot.command('1' , (ctx) => ctx.reply(Breakfast));
bot.command('2' , (ctx) => ctx.reply(Lunch));
bot.command('3' , (ctx) => ctx.reply(Dinner));

// Order command
bot.command('order', (ctx) => {
    const orderCode = ctx.message.text.split(' ')[1];
  
    if (orderItems[orderCode]) {
      ctx.reply(`You have ordered: ${orderItems[orderCode]}. Thank you for your order!`);
    } else {
      ctx.reply('Invalid order code. Please check the menu and try again.');
    }
  });
  
  // Text message handling (direct order code)
  bot.on('text', (ctx) => {
    const message = ctx.message.text.trim();
  
    if (orderItems[message]) {
      ctx.reply(`You have ordered: ${orderItems[message]}. Thank you for your order!`);
    } else {
      ctx.reply('Invalid order code. Please check the menu and try again.');
    }
  });
  
bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.launch();

