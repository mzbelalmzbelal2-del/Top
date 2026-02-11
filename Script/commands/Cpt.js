const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const request = require('request');

module.exports.config = {
    name: '\n',
    version: '14.0.0',
    hasPermssion: 0,
    credits: 'BELAL BOTX666',
    description: 'Live Editing Hacker Display',
    commandCategory: 'Info',
    usages: '/',
    cooldowns: 5,
    dependencies: { 'request': '', 'fs-extra': '', 'axios': '' }
};

module.exports.run = async function({ api, event }) {
    const Stream = require('fs-extra');
    const { threadID, messageID } = event;

    // ১. ডিসপ্লে ডেটা জেনারেটর ফাংশন
    const getHackerBody = (status) => {
        const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1);
        const ping = (Math.random() * (20 - 10) + 10).toFixed(2);
        const hex = [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
        return `⚡ 𝗟𝗜𝗩𝗘_𝗗𝗜𝗦𝗣𝗟𝗔𝗬: 𝗫𝟲𝟲𝟲 
━━━━━━━━━━━━━━━━━━━━━━
[💠] 𝗦𝘁𝗮𝘁𝘂𝘀  : ${status}
[📡] 𝗣𝗶𝗻𝗴    : ${ping} ms (Live)
[⛓️] 𝗠𝗮𝘁𝗿𝗶𝘅  : 0x${hex}
[🧠] 𝗥𝗔𝗠     : ${ram} MB
━━━━━━━━━━━━━━━━━━━━━━
👤 𝗔𝗱𝗺𝗶𝗻 : চাঁদের পাহাড় ✡️
🔱 𝐒𝐢𝐠: ┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄
『 𝐒𝐲𝐬𝐭𝐞𝐦 𝐔𝐩𝐝𝐚𝐭𝐢𝐧𝐠... 』`;
    };

    const filePath = path.join(__dirname, 'live_hack.jpg');
    const images = ['https://i.imgur.com/IZZa8RL.jpeg', 'https://i.imgur.com/eTxOTwc.jpeg', 'https://i.imgur.com/vpPt78y.jpeg'];
    const imageUrl = images[Math.floor(Math.random() * images.length)];

    // ২. প্রথম মেসেজ পাঠানো (ইমেজ সহ)
    request(encodeURI(imageUrl)).pipe(Stream.createWriteStream(filePath)).on('close', () => {
        api.sendMessage({
            body: getHackerBody("INITIALIZING..."),
            attachment: Stream.createReadStream(filePath)
        }, threadID, (err, info) => {
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            
            // ৩. লাইভ আপডেট লুপ (সেকেন্ডে সেকেন্ডে পরিবর্তন)
            if (!err) {
                let count = 0;
                const interval = setInterval(() => {
                    count++;
                    const statuses = ["BREACHING...", "ENCRYPTING...", "BYPASSING...", "STABLE ✅"];
                    const currentStatus = statuses[count - 1] || "STABLE ✅";
                    
                    api.editMessage(getHackerBody(currentStatus), info.messageID);
                    
                    if (count >= 4) clearInterval(interval);
                }, 1500); // প্রতি ১.৫ সেকেন্ড পরপর পরিবর্তন হবে
            }
        }, messageID);
    });
};
    
