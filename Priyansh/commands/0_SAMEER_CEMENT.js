const fs = require("fs");
module.exports.config = {
	name: "Cement",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "arif babu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("CM")==0 || event.body.indexOf("Cement")==0 || event.body.indexOf("cement")==0 || event.body.indexOf("CEMENT")==0) {
		var msg = {
				body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧\n< ────────────────── >\n\n⎯꯭֯🌸⃪ ꯭⃛֯𝐀𝐦𝐁𝐔𝐉𝐚 𝐂𝐞𝐌𝐞𝐍𝐓\n< ────────────────── >",
				attachment: fs.createReadStream(__dirname + `/noprefix/B1.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
