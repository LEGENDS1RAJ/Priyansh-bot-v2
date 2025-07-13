const fs = require("fs");
module.exports.config = {
	name: "GANA SONG",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU", 
	description: "THIS BOT IS MR SAMEER KHAN",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("gana") ||
     react.includes("Song") || react.includes("SONG") || react.includes("song") ||
react.includes("Gana") ||
react.includes("GANA")) {
		var msg = {
				body: `🩷 𝐆𝐚𝐍𝐚 𝐒𝐮𝐧𝐧𝐀 𝐇𝐚𝐢 𝐓𝐨 【 _ music _ 】𝐓𝐲𝐏𝐞 𝐊𝐚𝐑𝐞 𝐀𝐮𝐑 𝐀𝐩𝐍𝐞 𝐆𝐚𝐍𝐞 𝐊𝐚 𝐍𝐚𝐚𝐌 𝐃𝐞 🩷`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎧", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
