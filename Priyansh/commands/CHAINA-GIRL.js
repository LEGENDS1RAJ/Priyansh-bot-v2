module.exports.config = {
  name: "chainagirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "chaina girl",
  commandCategory: "Random-IMG",
  usages: "chaina girl dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/UuNKJik.jpg","https://i.imgur.com/QpvVjuq.jpg","https://i.imgur.com/LoAjgsy.jpeg","https://i.imgur.com/BOr5mrH.jpeg","https://i.imgur.com/YhTpdGn.jpeg","https://i.imgur.com/sJ9rhkG.jpeg","https://i.imgur.com/Miw8M3C.jpeg","https://i.imgur.com/FJ8h5o8.jpeg","https://i.imgur.com/kK6TOSm.jpeg","https://i.imgur.com/MF8i5yp.jpeg","https://i.imgur.com/nudkZ8n.jpeg","https://i.imgur.com/I32OLu8.jpeg","https://i.imgur.com/5uUNBEo.jpeg","https://i.imgur.com/HMzI7uU.jpeg","https://i.imgur.com/C9m13ku.jpeg","https://i.imgur.com/G0mSjTv.jpeg","https://i.imgur.com/jPyQCZL.jpeg","https://i.imgur.com/UNbjHnE.jpeg","https://i.imgur.com/AUWVEFP.jpeg","https://i.imgur.com/xtxFuOD.jpeg","https://i.imgur.com/26ljX7c.jpeg","https://i.imgur.com/bBHJvBn.jpeg","https://i.imgur.com/X5b0B9E.jpeg","https://i.imgur.com/q9oL1c2.jpeg","https://i.imgur.com/ibDbULg.jpeg","https://i.imgur.com/6knhzU4.jpeg","https://i.imgur.com/W0ogNBn.jpeg","https://i.imgur.com/TNuFjMx.jpeg","https://i.imgur.com/n7SceBk.jpeg","https://i.imgur.com/OOtNwxi.jpeg","https://i.imgur.com/TDVgvG5.jpeg","https://i.imgur.com/p1AsogO.jpeg","https://i.imgur.com/oSKW7ZB.jpeg","https://i.imgur.com/S6NvE6s.jpeg","https://i.imgur.com/UoDzNSq.jpeg","https://i.imgur.com/DQ2pbvU.jpeg","https://i.imgur.com/0cTeTXy.jpeg"
           ];
     var callback = () => api.sendMessage({body:`▶●────────●▶🕊𝆺𝅥⃝𝘾ύτε⋆Δηցεℓ𑱁𑱃▶●────────●▶`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
