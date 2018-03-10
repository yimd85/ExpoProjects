const twilio = require('twilio');

const accountSid = 'AC531817fa0c6a47333ad0931787c0d9de';
const authToken = 'cfec479185d31d2ccc1d7e1d9c305616';

module.exports = new twilio.Twilio(accountSid, authToken);
