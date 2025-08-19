module.exports.config = {
  name: "motka",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "John Lester", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("motka")>=0 || event.body.indexOf("Motka")>=0 || event.body.indexOf("MOTKA")>=0 || event.body.indexOf("MOTU")>=0 || event.body.indexOf("motu")>=0 || event.body.indexOf("Motu")>=0 || event.body.indexOf("मोटू")>=0 || event.body.indexOf("मोटका")>=0 || event.body.indexOf("matka")>=0 || event.body.indexOf("Mtka")>=0 ) { 
    var msg = {
        body: `  ${name} c̬̽ɧᴜ̽p᩶ 𝙺ɑ̽𝚛 ɱ๏̚𝚃𝙺ɪ̽ɪ̽ 😒😝👈 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
