
const config = require('./config');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(config.token, { polling: true });
const webAppUrl = config.webAppUrl;


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start'){
    await bot.sendMessage(chatId, 'Click on the button below', {
        reply_markup: {
            keyboard: [
                [{text: 'Fill the form', web_app: {url: webAppUrl}}]
            ],
            resize_keyboard: true
        }
    });

    await bot.sendMessage(chatId, 'Click on the button in the chat', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Make an order', web_app: {url: webAppUrl}}]
            ]
        }
    });
  }

});