const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const request = require('request');

module.exports.config = {
    name: '\n', // আপনার অরিজিনাল কাঠামোর সেই সিক্রেট নাম
    version: '12.0.0',
    hasPermssion: 0,
    credits: 'BELAL BOTX666',
    description: 'Hacker Interface with Dynamic Movement - Fixed Version',
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

    // ১. হ্যাকার লেভেল ডাইনামিক মুভমেন্ট (প্রতি মিলিসেকেন্ডে পরিবর্তন হবে)
    const uptime = process.uptime();
    const hrs = Math.floor(uptime / 3600);
    const mins = Math.floor((uptime % 3600) / 60);
    const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    
    // পিন ও মেমোরি হ্যাস মুভমেন্ট
    const dynamicPing = (Math.random() * (18.55 - 10.12) + 10.12).toFixed(2);
    const sysHash = Math.random().toString(16).substring(2, 8).toUpperCase();
    const networkLoad = (Math.random() * (0.05 - 0.01) + 0.01).toFixed(3);

    // ২. প্রিমিয়াম হ্যাকার বডি (আপনার অরিজিনাল কাঠামোর তথ্যের সাথে হ্যাকার ফিল)
    const messageBody = `
[☣️] 𝗧𝗘𝗥𝗠𝗜𝗡𝗔𝗟: 𝗕𝗘𝗟𝗔𝗟_𝗕𝗢𝗧_𝗫𝟲𝟲𝟲
──────────────────────────────
🌸 𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂𝗮𝗹𝗮𝗶𝗸𝘂𝗺 🌸  
মাস্টার বেলাল, সিস্টেম এক্সেস গ্রান্টেড! 🛡️

┌──[ 🛰️ 𝗡𝗘𝗧𝗪𝗢𝗥𝗞 𝗠𝗢𝗩𝗘𝗠𝗘𝗡𝗧 ]
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
❯ 𝗦𝘁𝗮𝘁𝘂𝘀   : ENCRYPTED [🟢]
❯ 𝗣𝗶𝗻𝗴     : ${dynamicPing} ms (Live)
❯ 𝗟𝗮𝘁𝗲𝗻𝗰𝘆 : ${networkLoad}s (Ultra Fast)
❯ 𝗨𝗽𝘁𝗶𝗺𝗲   : ${hrs}h:${mins}m:Active
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

┌──[ 🪬 𝗖𝗢𝗥𝗘 𝗜𝗡𝗧𝗘𝗟𝗟𝗜𝗚𝗘𝗡𝗖𝗘 ]
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
❯ 𝗔𝗱𝗺𝗶𝗻    : চাঁদের পাহাড় ✡️
❯ 𝗢𝘄𝗻𝗲𝗿    : Belal YT [🛡️]
❯ 𝗛𝗮𝘀𝗵     : #SYS_${sysHash}
❯ 𝗠𝗲𝗺𝗼𝗿𝘆  : ${ram} MB / 1024MB
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

[📡] 𝗜𝗣: 103.145.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔱 𝐒𝐢𝐠 : ┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
『 ⚡ 𝐒𝐲𝐬𝐭𝐞𝐦 𝐁𝐫𝐞𝐚𝐜𝐡𝐞𝐝 𝐛𝐲 𝐁𝐄𝐋𝐀𝐋 𝐁𝐎𝐓 𝐗𝟔𝟔𝟔 』`;

    const filePath = path.join(__dirname, 'hacker_v12.jpg');

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
            threadID,
            () => {
                if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            },
            messageID
        );
    });
};
        
