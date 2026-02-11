const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const request = require('request');

module.exports.config = {
    name: "slash-hacker",
    version: "9.0.0",
    hasPermssion: 0,
    credits: "BELAL BOTX666",
    description: "শুধু / লিখলেই হ্যাকার ইন্টারফেস ওপেন হবে",
    commandCategory: "NoPrefix",
    usages: "/",
    cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, body } = event;
    if (!body) return;

    // এটি চেক করবে যদি মেসেজটি শুধুমাত্র "/" হয়
    if (body == "/") {
        const uptime = process.uptime();
        const days = Math.floor(uptime / (24 * 60 * 60));
        const hours = Math.floor((uptime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((uptime % (60 * 60)) / 60);
        const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        
        // ডাইনামিক হ্যাকার পিন (সেকেন্ডে সেকেন্ডে পরিবর্তন হবে)
        const dynamicPing = (Math.random() * (25.99 - 14.11) + 14.11).toFixed(2);

        const hackerBody = `
bash_v9.0: system_check --force
─────────────────────────────
[⚡] 𝗗𝗔𝗧𝗔 𝗕𝗥𝗘𝗔𝗖𝗛 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟...
─────────────────────────────
┌──[ 🛰️ 𝗡𝗘𝗧𝗪𝗢𝗥𝗞 𝗜𝗡𝗧𝗘𝗥𝗙𝗔𝗖𝗘 ]
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
❯ 𝗦𝘁𝗮𝘁𝘂𝘀   : ENCRYPTED [🟢]
❯ 𝗣𝗶𝗻𝗴     : ${dynamicPing} ms
❯ 𝗟𝗮𝘁𝗲𝗻𝗰𝘆 : STABLE (0.002s)
❯ 𝗨𝗽𝘁𝗶𝗺𝗲   : ${days}d:${hours}h:${minutes}m
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

┌──[ 🪬 𝗖𝗢𝗥𝗘 𝗣𝗥𝗢𝗖𝗘𝗦𝗦𝗢𝗥 ]
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
❯ 𝗔𝗱𝗺𝗶𝗻    : চাঁদের পাহাড় ✡️
❯ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻  : X666-HYPER_V9
❯ 𝗠𝗲𝗺𝗼𝗿𝘆  : ${ram} MB / 1024MB
❯ 𝗦𝗶𝗴𝗻𝗮𝗹   : 100% (High Speed)
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

[📡] 𝗜𝗣: 192.168.1.666 | 𝗣𝗢𝗥𝗧: 8080
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔱 𝐒𝐢𝐠 : ┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[⚠] 𝐒𝐲𝐬𝐭𝐞𝐦 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 𝐔𝐧𝐝𝐞𝐫: 𝐁𝐄𝐋𝐀𝐋 𝐁𝐎𝐓 𝐗𝟔𝟔𝟔`;

        const images = [
            'https://i.imgur.com/IZZa8RL.jpeg', 
            'https://i.imgur.com/eTxOTwc.jpeg',
            'https://i.imgur.com/qSjYag6.jpeg', 
            'https://i.imgur.com/vpPt78y.jpeg',
            'https://i.imgur.com/CRPz9BU.jpeg', 
            'https://i.imgur.com/CNJi9p7.jpeg'
        ];
        const imageUrl = images[Math.floor(Math.random() * images.length)];
        const cacheDir = path.join(__dirname, 'cache');
        if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);
        const filePath = path.join(cacheDir, 'belal_hacker_v9.jpg');

        const callback = () => {
            api.sendMessage({
                body: hackerBody,
                attachment: fs.createReadStream(filePath)
            }, threadID, () => {
                if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            }, messageID);
        };

        request(encodeURI(imageUrl)).pipe(fs.createWriteStream(filePath)).on('close', () => callback());
    }
};

module.exports.run = async function ({ api, event }) {
    // run ফাংশনটি খালি রাখা হয়েছে কারণ handleEvent দিয়েই কাজ হবে
};
