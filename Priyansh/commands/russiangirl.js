module.exports.config = {
  name: "Russian",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Russian girl",
  commandCategory: "Random-IMG",
  usages: "Russian girl dp",
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
    var link = [ "https://i.imgur.com/z7776DI.jpeg","https://i.imgur.com/ExBt9eu.jpeg","https://i.imgur.com/SSX4oC7.jpeg","https://i.imgur.com/lE5cg74.jpeg","https://i.imgur.com/fj0OiJm.jpeg","https://i.imgur.com/2p6xLpW.jpeg","https://i.imgur.com/hXXBqXC.jpeg","https://i.imgur.com/OZKQxK2.jpeg","https://i.imgur.com/4AD2IlD.jpeg","https://i.imgur.com/wSudMNG.jpeg","https://i.imgur.com/yhfZEE9.jpeg","https://i.imgur.com/AueSVBc.jpeg","https://i.imgur.com/4FHBquM.jpeg","https://i.imgur.com/u229918.jpeg","https://i.imgur.com/yzQ0q1A.jpeg","https://i.imgur.com/g2lhUD9.jpeg","https://i.imgur.com/BDWJh75.jpeg","https://i.imgur.com/WPetD9q.jpeg","https://i.imgur.com/YZdIH7N.jpeg","https://i.imgur.com/ehhzYpT.jpeg","https://i.imgur.com/xLHeGPL.jpeg"
        ];
     var callback = () => api.sendMessage({body:`💝💝💝`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
