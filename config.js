const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/zL8iMBv.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "> *SKS ALIVE*",
OWNER_NAME: process.env.OWNER_NAME || "SY4M",
BOT_NAME: process.env.BOT_NAME || "SKS ofc",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
