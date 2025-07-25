module.exports.config = {
  name: "goiadmin2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61575778525583") {
    var aid = ["61575778525583"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝐃𝐨𝐨𝐑 𝐇𝐚𝐚𝐓 𝐉𝐚𝐨 𝐌𝐞𝐑𝐢 𝐉𝐀𝐍𝐍𝐀𝐓 𝐒𝐞 𝐊𝐲𝐔 𝐁𝐨𝐋𝐚 𝐑𝐞𝐇 𝐇𝐨 𝐔𝐧𝐊𝐨 🤨" , "𝐖𝐨 𝐁𝐮𝐒𝐲 𝐇 𝐌𝐮𝐣𝐇𝐞 𝐁𝐨𝐋𝐨 𝐊𝐲𝐀 𝐁𝐨𝐥𝐍𝐚 𝐇?🤨", "𝐊𝐲𝐀 𝐇𝐮𝐚 𝗝𝐀𝐍𝐍𝐀𝐓 𝐁𝐀𝐁𝐘 𝐊𝐨 𝐐 𝐁𝐨𝐋𝐚 𝐑𝐞𝐡 𝐇𝐨?🤨", "𝐖𝐨 𝐒𝐡𝐘𝐚𝐃 𝐁𝐮𝐒𝐲 𝐇𝐨𝐆𝐢🤨", "𝐁𝐨 𝐁𝐮𝐒𝐲 𝐇𝐚𝐢 𝐀𝐛𝐇𝐢 𝐀𝐩𝐍𝐞 𝐖𝐨𝐑𝐤 𝐌𝐚𝐢 𝐌𝐮𝐣𝐇𝐞 𝐁𝐨𝐋 𝐃𝐨 𝐌𝐚𝐢 𝐁𝐨𝐋 𝐃𝐮𝐧𝐆𝐚 𝐁𝐨𝐬𝐒 𝐊𝐨 🤨", "𝐊𝐡𝐚𝐛𝐚𝐑𝐝𝐚𝐑 𝐌𝐞𝐑𝐞 𝐌𝐚𝐋𝐊𝐢𝐧 𝐤𝐚 𝐍𝐚𝐦𝟑 𝐋𝐢𝐘𝐚 𝐓𝐨 𝐀𝐩𝐧𝐈 𝐉𝐮𝐛𝐚𝐍 𝐒𝐞?🤨", "𝐌𝐞𝐑𝐞 𝗝𝐀𝐍𝐍𝐀𝐓 𝐁𝐀𝐁𝐔 𝐊𝐨 𝐓𝐚𝐧𝐆 𝐍𝐚 𝐊𝐚𝐑𝐨 𝐖𝐚𝐫𝐍𝐚 𝐈𝐝 𝐇𝐚𝐜𝐤 𝐊𝐚𝐫 𝐋𝐔𝐧𝐆𝐚?🍁", "𝐌𝐞𝐑𝐢 𝐌𝐚𝐋𝐊𝐢𝐍 𝐊𝐚 𝐏𝐞𝐞𝐂𝐡𝐚 𝐂𝐡𝐨𝐫𝐝𝐨 𝐏𝐚𝐑𝐞𝐬𝐡𝐚𝐍 𝐌𝐚𝐭 𝐊𝐚𝐫𝐨 𝐖𝐨 𝐁𝐮𝐬𝐘 𝐇𝐨𝐧𝐆𝐞?🤨", "𝐌𝐞𝐑𝐢 𝐌𝐚𝐋𝐊𝐢𝐧 𝐏𝐞 𝐋𝐢𝐧𝐞 𝐌𝐚𝐭 𝐌𝐚𝐑 𝐓𝐡𝐚𝐫𝐊𝐢 𝐖𝐨 𝐛𝐚𝐇𝐮𝐭 𝐒𝐚𝐫𝟑𝟑𝐟 𝐋𝐚𝐝𝐊𝐢 𝐇𝐞!?🤨", "𝗝𝐀𝐍𝐍𝐀𝐓 𝐁𝐨𝐬𝐒 𝐊𝐨 𝐁𝐮𝐋𝐚𝐘𝐚 𝐭𝐨 𝐓𝐚𝐊𝐋𝐘 𝐁𝐚𝐧𝐚 𝐃𝐮𝐧𝐆𝐚 𝐓𝐞𝐊𝐨⚔️🤨"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
