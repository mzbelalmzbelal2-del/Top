const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const request = require('request');

module.exports.config = {
    name: '\n',
    version: '22.0.0',
    hasPermssion: 0,
    credits: 'BELAL BOTX666',
    description: '300 Seconds Non-Stop Live Hack',
    commandCategory: 'Info',
    usages: '/',
    cooldowns: 2,
    dependencies: { 'request': '', 'fs-extra': '', 'axios': '' }
};

module.exports.run = async function({ api, event }) {
    const { threadID, messageID } = event;
    
    const getHackerBody = (step) => {
        const ping = (Math.random() * (15 - 5) + 5).toFixed(2);
        const bars = ["▉▒▒▒▒▒▒▒▒▒", "▉▉▒▒▒▒▒▒▒▒", "▉▉▉▒▒▒▒▒▒▒", "▉▉▉▉▒▒▒▒▒▒", "▉▉▉▉▉▒▒▒▒▒", "▉▉▉▉▉▉▒▒▒▒", "▉▉▉▉▉▉▉▒▒▒", "▉▉▉▉▉▉▉▉▒▒", "▉▉▉▉▉▉▉▉▉▒", "▉▉▉▉▉▉▉▉▉▉"];
        
        return `⚡ 𝗕𝗘𝗟𝗔𝗟_𝗕𝗢𝗧_𝗫𝟲𝟲𝟲 ⚡
━━━━━━━━━━━━━━━━━━━━
[📊] 𝗟𝗼𝗮𝗱𝗶𝗻𝗴 : ${bars[step % 10]}
[📡] 𝗣𝗶𝗻𝗴    : ${ping} ms (𝗟𝗶𝘃𝗲)
[⏱️] 𝗧𝗶𝗺𝗲    : ${300 - step}s 𝗥𝗲𝗺𝗮𝗶𝗻𝗶𝗻𝗴
━━━━━━━━━━━━━━━━━━━━
👤 𝗔𝗱𝗺𝗶𝗻 : চাঁদের পাহাড় ✡️
『 𝐒𝐭𝐚𝐭𝐮𝐬: 🟢 𝐑𝐮𝐧𝐧𝐢𝐧𝐠_${step} 』`;
    };

    const images = ['https://i.imgur.com/FQQq8WH.jpeg', 'https://i.imgur.com/6b6DGcW.jpeg'];
    const imageUrl = images[Math.floor(Math.random() * images.length)];
    const filePath = path.join(__dirname, `hacker_${Date.now()}.jpg`);

    request(encodeURI(imageUrl)).pipe(fs.createWriteStream(filePath)).on('close', () => {
        api.sendMessage({
            body: getHackerBody(0),
            attachment: fs.createReadStream(filePath)
        }, threadID, (err, info) => {
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
            if (err) return;

            let count = 0;
            const updateMessage = () => {
                if (count < 300) {
                    count++;
                    // ১.১ সেকেন্ড পর পর এডিট করছি যাতে ফেসবুক ব্লক না করে (১০০০ এর বদলে ১১০০)
                    setTimeout(() => {
                        api.editMessage(getHackerBody(count), info.messageID, (error) => {
                            if (!error) {
                                updateMessage(); // যদি সফল হয় তবেই পরের আপডেট হবে
                            } else {
                                // এরর হলে ৩ সেকেন্ড ওয়েট করে আবার ট্রাই করবে
                                setTimeout(updateMessage, 3000);
                            }
                        });
                    }, 1100); 
                } else {
                    api.editMessage("『 ⚡ 𝗦𝗘𝗦𝗦𝗜𝗢𝗡_𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗 』", info.messageID);
                }
            };
            updateMessage();
        }, messageID);
    });
};
                            
