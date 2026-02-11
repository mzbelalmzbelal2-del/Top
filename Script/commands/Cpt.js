const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const request = require('request');

module.exports.config = {
    name: "/",
    version: "11.0.0",
    hasPermssion: 0,
    credits: "BELAL BOTX666",
    description: "আগের কাঠামো ঠিক রেখে হ্যাকার লেভেল মুভমেন্ট ইন্টারফেস",
    commandCategory: "System",
    usages: "/",
    cooldowns: 2
};

module.exports.run = async function({ api, event }) {
    const { threadID, messageID } = event;

    // ১. হ্যাকার লেভেল মুভমেন্ট ডেটা (প্রতিবার আলাদা হবে)
    const uptime = process.uptime();
    const hrs = Math.floor(uptime / 3600);
    const mins = Math.floor((uptime % 3600) / 60);
    
    const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    
    // ২. পিন ও ল্যাটেন্সি মুভমেন্ট (Micro-Precision)
    const dynamicPing = (Math.random() * (19.88 - 11.02) + 11.02).toFixed(2);
    const loadSpeed = (Math.random() * (0.009 - 0.001) + 0.001).toFixed(3);
    
    // ৩. হ্যাকার কোড সিকোয়েন্স মুভমেন্ট (Unique Process ID)
    const processID = Math.floor(Math.random() * 900000) + 100000;
    const hexCode = Math.random().toString(16).toUpperCase().substring(2, 10);

    const hackerBody = `
[💻] 𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗟 𝗘𝗫𝗘𝗖𝗨𝗧𝗜𝗢𝗡: /root/x666
─────────────────────────────
[⚡] 𝗗𝗔𝗧𝗔 𝗕𝗥𝗘𝗔𝗖𝗛: SUCCESSFUL ✅
[🔑] 𝗞𝗘𝗬_𝗦𝗘𝗤𝗨𝗘𝗡𝗖𝗘: ${hexCode}
─────────────────────────────
┌──[ 🛰️ 𝗡𝗘𝗧𝗪𝗢𝗥𝗞 𝗠𝗢𝗩𝗘𝗠𝗘𝗡𝗧 ]
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
❯ 𝗦𝘁𝗮𝘁𝘂𝘀   : ENCRYPTED [🟢]
❯ 𝗣𝗶𝗻𝗴     : ${dynamicPing} ms
❯ 𝗟𝗮𝘁𝗲𝗻𝗰𝘆 : ${loadSpeed} s
❯ 𝗨𝗽𝘁𝗶𝗺𝗲   : ${hrs}h:${mins}m:Active
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

┌──[ 🪬 𝗖𝗢𝗥𝗘 𝗜𝗡𝗧𝗘𝗟𝗟𝗜𝗚𝗘𝗡𝗖𝗘 ]
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
❯ 𝗔𝗱𝗺𝗶𝗻    : চাঁদের পাহাড় ✡️
❯ 𝗣𝗿𝗼𝗰𝗲𝘀𝘀  : PID_${processID}
❯ 𝗠𝗲𝗺𝗼𝗿𝘆  : ${ram} MB / 1024MB
❯ 𝗦𝗶𝗴𝗻𝗮𝗹   : ULTRA-NET (V11)
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

[📡] 𝗜𝗣: 103.145.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔱 𝐒𝐢𝐠 : ┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
『 ⚡ 𝐒𝐲𝐬𝐭𝐞𝐦 𝐁𝐫𝐞𝐚𝐜𝐡𝐞𝐝 𝐛𝐲 𝐁𝐄𝐋𝐀𝐋 𝐁𝐎𝐓 𝐗𝟔𝟔𝟔 』`;

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
    const filePath = path.join(cacheDir, `belal_${Date.now()}.jpg`);

    const callback = () => {
        api.sendMessage({
            body: hackerBody,
            attachment: fs.createReadStream(filePath)
        }, threadID, () => {
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        }, messageID);
    };

    request(encodeURI(imageUrl)).pipe(fs.createWriteStream(filePath)).on('close', callback);
};
