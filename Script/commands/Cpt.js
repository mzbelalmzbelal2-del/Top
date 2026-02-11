const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const request = require('request');

module.exports.config = {
    name: '\n',
    version: '16.0.0',
    hasPermssion: 0,
    credits: 'BELAL BOTX666',
    description: '10 Minutes Hyper-Speed Live Hacker Display',
    commandCategory: 'Info',
    usages: '/',
    cooldowns: 2,
    dependencies: { 'request': '', 'fs-extra': '', 'axios': '' }
};

module.exports.run = async function({ api, event }) {
    const Stream = require('fs-extra');
    const { threadID, messageID } = event;

    // ১. হাই-স্পিড হ্যাকার ডিসপ্লে জেনারেটর
    const getHackerBody = (step) => {
        const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const ping = (Math.random() * (20.00 - 10.00) + 10.00).toFixed(2);
        const hex = Math.random().toString(16).substring(2, 10).toUpperCase();
        const proc = Math.floor(Math.random() * 8999) + 1000;
        
        // ডাইনামিক লোডিং বার মুভমেন্ট
        const bars = ["▉▒▒▒▒▒▒▒▒▒", "▉▉▒▒▒▒▒▒▒▒", "▉▉▉▒▒▒▒▒▒▒", "▉▉▉▉▒▒▒▒▒▒", "▉▉▉▉▉▒▒▒▒▒", "▉▉▉▉▉▉▒▒▒▒", "▉▉▉▉▉▉▉▒▒▒", "▉▉▉▉▉▉▉▉▒▒", "▉▉▉▉▉▉▉▉▉▒", "▉▉▉▉▉▉▉▉▉▉"];
        const currentBar = bars[Math.floor(Math.random() * bars.length)];

        return `
⚡ 𝗨𝗟𝗧𝗥𝗔-𝗡𝗘𝗧 𝗛𝗬𝗣𝗘𝗥-𝗦𝗣𝗘𝗘𝗗 𝗩𝟭𝟲 ⚡
━━━━━━━━━━━━━━━━━━━━━━━━━━
[🌐] 𝗦𝘁𝗮𝘁𝘂𝘀  : RUNNING_SEQ_${step}
[🛰️] 𝗣𝗶𝗻𝗴    : ${ping} ms (🔵 ACTIVE)
[🧠] 𝗥𝗔𝗠     : ${ram} MB / 1024MB
[⛓️] 𝗠𝗮𝘁𝗿𝗶𝘅  : 0x${hex}
[⚙️] 𝗣𝗿𝗼𝗰𝗲𝘀𝘀 : PID_${proc} [LOCKED]
[📡] 𝗜𝗣_𝗔𝗗𝗗𝗥 : 103.145.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}
[🔋] 𝗦𝘁𝗿𝗲𝗮𝗺 : ${currentBar}
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 𝗔𝗱𝗺𝗶𝗻  : চাঁদের পাহাড় ✡️
🤖 𝗠𝗼𝗱𝗲𝗹  : X666-NEURAL-LINK
🛠️ 𝗦𝗶𝗴𝗻𝗮𝗹 : 100% SECURE ENCRYPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━
🔱 𝐒𝐢𝐠: ┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄
『 𝐒𝐲𝐬𝐭𝐞𝐦 𝐁𝐫𝐞𝐚𝐜𝐡𝐢𝐧𝐠: ${Math.floor(Math.random() * 100)}% COMPLETE 』`;
};

    const images = [
        'https://i.imgur.com/FQQq8WH.jpeg',
        'https://i.imgur.com/6b6DGcW.jpeg'
    ];
    
    const imageUrl = images[Math.floor(Math.random() * images.length)];
    const filePath = path.join(__dirname, 'hacker_speed.jpg');

    // ২. প্রথম মেসেজ এক্সিকিউশন
    request(encodeURI(imageUrl)).pipe(Stream.createWriteStream(filePath)).on('close', () => {
        api.sendMessage({
            body: getHackerBody("001"),
            attachment: Stream.createReadStream(filePath)
        }, threadID, (err, info) => {
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            
            if (!err) {
                let count = 0;
                const maxUpdates = 600; // ১০ মিনিট = ৬০০ সেকেন্ড

                const interval = setInterval(() => {
                    count++;
                    const stepCode = count.toString().padStart(3, '0');
                    
                    // ১ সেকেন্ড পর পর এডিট (১০০০ মিলিসেকেন্ড)
                    api.editMessage(getHackerBody(stepCode), info.messageID);
                    
                    if (count >= maxUpdates) {
                        clearInterval(interval);
                    }
                }, 1000); 
            }
        }, messageID);
    });
};
                                
