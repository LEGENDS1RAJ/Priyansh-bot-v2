 const fs = require("fs");
module.exports.config = {
	name: "Sameer",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Sameer", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Sameer") ||
     react.includes("Owner") || 
react.includes("Sameer khan")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗛𝗲𝗿𝗲★\n\n✦𝗦𝗔𝗺𝗲𝗲𝗿 𝗦𝗵𝗮𝗿𝗮𝗯𝗶 𝗕𝗮𝗱𝗺𝗮𝘀𝗵✦\n\n https://www.facebook.com/SAMEER.SHARABI.HERE \n\n☞★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  𝐌𝐫..𝐒𝐀𝐦𝐞𝐞𝐫🩷🪽✦`🥀🦋",
				attachment: fs.createReadStream(__dirname + `/noprefix/GridArt_20250626_012839084.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🦋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
