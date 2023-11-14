require('dotenv').config();

const config = {
  token: process.env.REACT_APP_TOKEN,
  webAppUrl: 'https://chat.openai.com/',
};

module.exports = config;