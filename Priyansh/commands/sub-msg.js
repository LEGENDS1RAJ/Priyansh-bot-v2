const fs = require("fs");
module.exports.config = {
	name: "sub",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sameer khan")==0 || event.body.indexOf("sameer")==0 || event.body.indexOf("Owner")==0 || event.body.indexOf("Sameer")==0) {
		var msg = {
				body: "👋For Any Kind Of Help Contact On Telegram  Username 👉 @Sameerkhan😇",
				attachment: fs.createReadStream(__dirname + `/noprefix/3cce159b-1ef5-4bbe-bf5e-7a9b8f20e1d4.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
