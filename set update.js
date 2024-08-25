const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID ||eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUY5Q1pHb3ZtZm9EVmFqcHJONUZvOEJVR3NYY2xXZXhVdE5hZkRTcWhVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXlkeDUwZlEwUXZMTE9Vc2pHOStITDVvMi9wSVhPYkFZeXI0ZHZPZURSUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QzBXYkRsallMRmJPRThKeW9taEVHS0lqeE1XQUxmNkVnQWc5SDBvSVV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSMHFML2J2Z0lWMkVpOThFN0x6cmRuVGNiZTBmNDlvcWlZMk16R0gwN1I0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNMTBJOTg5S3pCbzNSTzFYcVVKaUY2TG5SV1lpeFpSbzU0b003eGtVMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo1Vmp5QjlpZVRSSG1uMGljdUFPeU91cmsvT0VMSFBUeDNRRnpVaEdYVzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtuMFAxUTZnQ1MwdXlialA0ODU1T3YzUkxLZHdRT1F5QjhFelAxUlBHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXFvMHBsYTBpcTJJRkVIWVp2UzlsYWxOanNjM29rOG1rVVZRemVRVmVBYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV1OGUvbWtmOW1VTUVZWG1sMmp1UnQveFBoYktMTWpTTnkvR0hraENocldpZFJ5S21RZUFkT1M4clVycWZvUzE0WCtBdVAwU3B6aW51Q3RVYVhuQUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJzN2h4eC84TG05WEgxMGVyMGVVQmZNZnh3RGF6QzA4dnFucW5MUGw5TXpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsd2pVb3U2eVJwLV82dkJUUEN0VW93IiwicGhvbmVJZCI6Ijg5OTJlOGQ4LTY4ZDUtNGMwMi05Mjc1LTczZTUwZTRhMjZlNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJscHFYcFE4SDZaYXhPV2hHd0VvTThoU0tkQTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXVQNVhtejVCV2J5MkFmeGZHcVlZNnlTQ3ZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJKOVlTNU1RIiwibWUiOnsiaWQiOiIyNTU2OTY0OTc3MDk6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQTEgUGhvdG9ncmFwaGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRFZnWndDRUsza3E3WUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOeDdhYm1jTVhqaTdNS0daQVFWdFBRc3RQaG95c0h2T3dXMnlWSkZCREg0PSIsImFjY291bnRTaWduYXR1cmUiOiI0RDV5WFhmY01BY0JkTG1ObXlqam5TU05NTncreFdBVC84Um94NVN4K1MyM2ZOVUlWQ2xaRUhrcmNRdDBBc0R3QVpHUW8vODg5VnEvZmtqL1Q4M3BEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWEE0bU5YYXRJaVFwNzFTN0UyYm4wV0tyazZHWmllRWpDZHNjbzRlNi80TjM2eWdCOU1KeXdmZ0gzOW9PTmZPYnRRUVdBc0Q4TG9kR3I5blRlQ0xPQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2OTY0OTc3MDk6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGNlMm01bkRGNDR1ekNobVFFRmJUMExMVDRhTXJCN3pzRnRzbFNSUVF4KyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDU3NjMxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLczMifQ== 'zokk',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "joel Tech",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255714595078",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BEST CODER MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/1774326c63cc0b0e87680.jpg,https://telegra.ph/file/2e5cb1ec0619781c9fa41.jpg,https://telegra.ph/file/91e4fd1e8ce0fe6bb2253.jpg,https://telegra.ph/file/19df783b5751341a78780.jpg,https://telegra.ph/file/56dfb94e0f8b32fab33a7.jpg,https://telegra.ph/file/fe8a25fb17af3926e6048.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
