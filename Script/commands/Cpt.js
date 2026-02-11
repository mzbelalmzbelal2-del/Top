const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const request = require('request');

module.exports.config = {
    name: '/', // এখানে আপনার অরিজিনাল কাঠামো অনুযায়ী ঠিক করে দেওয়া হলো
    version: '11.0.0',
    hasPermssion: 0,
    credits: 'BELAL BOTX666',
    description: 'Advanced Hacker Interface with Dynamic Movement',
    commandCategory: 'Info',
    usages: '/',
    cooldowns: 5,
    dependencies: {
        'request': '',
        'fs-extra': '',
        'axios': ''
    }
};

module.exports.run = async function({ api, event }) {
    const Stream = require('fs-extra');
    const { threadID, messageID } = event;

    // ১. হ্যাকার লেভেল মুভমেন্ট ক্যালকুলেশন (প্রতি সেকেন্ডে পরিবর্তনশীল ফিল)
    const uptime = process.uptime();
    const hrs = Math.floor(uptime / 3600);
    const mins = Math.floor((uptime % 3600) / 60);
    const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    
    // ডাইনামিক পিন মুভমেন্ট (Micro-Precision)
    const dynamicPing = (Math.random() * (21.99 - 12.01) + 12.01).toFixed(2);
    const neuralSpeed = (Math.random() * (100 - 95) + 95).toFixed(1);
    const sysHash = Math.random().toString(36).substring(2, 10).toUpperCase();

    // ২. প্রিমিয়াম হ্যাকার ডিসপ্লে বডি
    const messageBody = `
[☣️] 𝗦𝗬𝗦𝗧𝗘𝗠_𝗘𝗫𝗘𝗖𝗨𝗧𝗘: /𝗖𝗛𝗔𝗡𝗗𝗘𝗥_𝗣𝗔𝗛𝗔𝗥
──────────────────────────────
🌸 𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂𝗮𝗹𝗮𝗶𝗸𝘂𝗺 🌸  
মাস্টার বেলাল, সিস্টেম এখন হ্যাকার প্রটোকল V11 এ রান করছে। ⚡

┌──[ 🛰️ 𝗡𝗘𝗧𝗪𝗢𝗥𝗞 𝗠𝗢𝗩𝗘𝗠𝗘𝗡𝗧 ]
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
❯ 𝗦𝘁𝗮𝘁𝘂𝘀   : ENCRYPTED [🟢]
❯ 𝗣𝗶𝗻𝗴     : ${dynamicPing} ms (Live)
❯ 𝗡𝗲𝘂𝗿𝗮𝗹  : ${neuralSpeed}% Optimized
❯ 𝗨𝗽𝘁𝗶𝗺𝗲   : ${hrs}h:${mins}m:Active
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

┌──[ 🪬 𝗖𝗢𝗥𝗘 𝗜𝗡𝗧𝗘𝗟𝗟𝗜𝗚𝗘𝗡𝗖𝗘 ]
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
❯ 𝗔𝗱𝗺𝗶𝗻    : চাঁদের পাহাড় ✡️
❯ 𝗛𝗮𝘀𝗵     : #XP_${sysHash}
❯ 𝗠𝗲𝗺𝗼𝗿𝘆  : ${ram} MB / 1024MB
❯ 𝗠𝗼𝗱𝗲𝗹    : BOTX666 ULTRA 💻
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

[📡] 𝗜𝗣: 103.145.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫➢ ┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
『 ⚡ 𝐒𝐲𝐬𝐭𝐞𝐦 𝐁𝐫𝐞𝐚𝐜𝐡𝐞𝐝 𝐛𝐲 𝐁𝐄𝐋𝐀𝐋 𝐁𝐎𝐓 𝐗𝟔𝟔𝟔 』`;

    const filePath = path.join(__dirname, 'cyber_hacker.jpg');

    // আপনার দেওয়া ইমেজ লিংকগুলো
    const images = [
        'https://i.imgur.com/IZZa8RL.jpeg',
        'https://i.imgur.com/eTxOTwc.jpeg',
        'https://i.imgur.com/qSjYag6.jpeg',
        'https://i.imgur.com/vpPt78y.jpeg',
        'https://i.imgur.com/CRPz9BU.jpeg',
        'https://i.imgur.com/CNJi9p7.jpeg'
    ];

    const imageUrl = images[Math.floor(Math.random() * images.length)];
    const imageStream = request.get(encodeURI(imageUrl)).pipe(Stream.createWriteStream(filePath));

    imageStream.on('close', () => {
        api.sendMessage(
            {
                body: messageBody,
                attachment: Stream.createReadStream(filePath)
            },
            event.threadID,
            () => Stream.unlinkSync(filePath),
            event.messageID
        );
    });
};
                                                                                       
