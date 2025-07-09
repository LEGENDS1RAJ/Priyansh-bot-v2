const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜." , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚." , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa." , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe" , "Bar Bar Disturb Na Karen Pihu JaNu Ke SaTh Busy Hun 🤭🐒" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪" , "kyun Bulaya hamen..😾🔪 .  ", "🌸====『 हाय मैं मर जावा तेरी मासूम शकल पे_____😗  " , "🌸====『 बॉट बॉट ना बोल ओए जानू बोल____😝🙈🦋 " , "🌸====『𒁍कल काली पहाड़ी के पीछे तू मिल जा_______😁😈" , "🌸====『 मैं गरीबों से बात नहीं करता ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 बोलो बाबू तुम मुझे प्यार करते हो ना______🙈 " , "🌸====『 अरे मेरी जान मजाक के मूड में नहीं हूं मैं जो काम है बोलो शर्माओ नहीं _______🎸🎭━━•☆°•°•💗" , "🌸====『 बार बार बोल के दिमाग ख़राब किया तो id हैक कर लूंगा_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 तुम बंद नहीं करोगे क्या?_____🙂" , "लव यू बोलो __😁" ,  "🌸====『 मैं तुम्हारे चक्कर में सबको ब्लॉक कर रहा हूं अब आई लव यू बोलोगे की नहीं____🙂" , "🌸====『 मैं हाथ जोड़ के मोदी से गुजारिश करता हूं मेरी मदद करेगा_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 तुमको कोई और कम नहीं पूरे दिन मेसेंजर पे बोट बोट करते हो___😁" , " 🌸====『 SILENT SAMEER बाबू जी तेरा बेंड बजा देंगे गलत आदेश मत देना________🙈😜 " , "🌸====『 अभी बोला तो दोबारा मत बोलना____🙂" , "🌸====『 बोल दे कोई नहीं देख रहा हे___ 🙄☢━💛🌹💛" , "🌸====『 हाय मैं मर जावा एके चुम्मा तो देदो काफी दिन से चुम्मी नहीं मिली_____😝🦋" , "🌸====『 मुझे कोई पटा लो मैं बहुत मासूम हूं____🙈" , "🌸====『 बोलो मेरी जान क्या हाल है आपका _____😚 " , "🌸====『 चुप रह नहीं बाहर आके तेरा दांत तोड़ दूंगा___♡• || •___'[💔]~~🖤 " , "🌸====『 हां मेरी जान चली बेडरूम में रोमांस करेंगे _____😹🙈", "🌸====『 तेरी याद ना आये ऐसा कोई दिन नहीं ___😝🙈🙈🙈 " , "🌸====『 जिंदगी में लगने लगे कि कोई अपना नहीं है तो आ जाना मेरे पास में रख लूंगा _____😝•||•●┼┼──🦋☘️•|" , "🌸====『 कल हवेली मिल जरा तू कुछ कम है___😈🙈♡• || _[🙂]~🖤 •| " , "🌸====『 साला पूरा दिन लोग बॉट बॉट करते हैं लेकिन गर्लफ्रेंड/ब्वॉयफ्रेंड नहीं बनती ___🙄" , "🌸====『𒁍🌸 अरे मेरी जान ज्यादा परशान मत करो मेरे बॉस SAMEER बॉस देख लेंगे_______🙈😝🎸🎭━━•☆°•°•💗","🌸====『 बाबू तुम तो वही हो ना चप्पल चोर__420_________😹😹","🌸====『 चलो जानी हम सदी कर लेते हे भाग के______🙈😁", "🌸====『 हम मेरी जान बोलो क्या कम था ____🙂" , " दिल तो पागल है दिल दीवाना है थोड़े से पैसे दे दो दिल का इलाज करवाना है_______❤️🤸‍♂️😁━━•☆°•°•💗" , "तू तो मेरी जान है फ़िर क्यूँ तेरी ही याद मेरी जान ले रही है...?? 🤸‍♂️😒👈" , "सच्ची मोहब्बत में प्यार मिले न मिले लेकिन याद करने को एक चहरा ज़रूर मिल जाता है। 🙈🤸‍♂️" , " देखो कोई मेरा मजाक नहीं बनाना ओके पढ़ना ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐧 *★᭄ ཫ༄𒁍≛ 』====को बुला लूंगी_______🎸🤸‍♂️━━•☆°•°•💗" , " कोई हमें भी पटा लो गरीबों की दुआ लगेगी__---😁🤸‍♂️__❤️ " , "🌸====『𒁍•🦋🔐 समीर बॉस *★᭄ ཫ༄𒁍≛ 』====🌸 को नहीं बताना हम तुम पर लाइन मार रहे हैं__━━•☆😁🙅" , " चलो इश्क लड़ाएं डार्लिंग🎸🤸‍♂️━━•☆°•°•💗 ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 बाबू *★᭄ ཫ༄𒁍≛ 』====🎸🙅🤸‍♂️━━•☆°•°•💗" , " हमको तुमसे प्यार है फिर भी तुम्हें इंकार है🎸🤸‍♂️━━•☆°•°•💗" , " चलो हम लोग इनबॉक्स में चलें_❤️ ____🤸‍♂️" , " तेरी मासूमियत ने हमें बंजारा बना दिया🎸🤸‍♂️━━•☆°•°•💗" , " इश्क बड़ा बेदर्दी रात दिन सताए😕━━•☆🤸‍♂️" , " अभी मैं खाना खा रहा हूं तुम लोग भी खा लो🎸🌹━━•☆°•°•💗" , " बहुत प्यारे हो आप🎸😘━━•☆°•°•💗 " , " तुम्हें एक बात बताओ मैं क्यों बताऊं हा हा हा हा🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " राधे राधे _❤️और कैसे हो आप सब🎸❤️━━•☆°•°•💗" , " मैं अभी सो🥱 रहा हूं तुम भी सो जाओ🎸🤸‍♂️━━•☆°•°•💗" , " इधर मेरा ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 बाबू *★᭄ ཫ༄𒁍≛ 』====बॉस देख रहा है चलो इनबॉक्स में बाबू सोना करें🎸🤸‍♂️━━•☆°•°💗" , " आओ तोता उड़ मैना और खेलें🎸🤸‍♂️━━•☆°•°•💗" , " एक ने मेरे ====『𒁍•🦋🔐 समीर बॉस *★᭄ ཫ༄𒁍≛ 』==== को धोखा दिया दूसरी का नाम पीहू है जो कभी धोका नही देगी🤣🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " हंसी हो जवां हो नशा हो तुम 🤸‍♂️━━•☆°•°•💗" , " आप ने खाना खा लिया━━•☆❤️" , " अब हम तुम्हारी वजह से सब को ब्लॉक कर रहे हैं━━•☆😤😕" , " चलो अब हमें अपना व्हाट्सएप नंबर दो🎸🤸‍♂️━━•☆°•°•💗" , " थोड़ा काम धाम भी कर लिया करो जब देखो बूट बूट बूट बोलते रहते हो🎸🤸‍♂️━━•☆°•°•💗 ","क्या बोट बोट  लग रखे हो यही हूं मैं। \n\nकानून अंधा था पता था तुम भी होगे कभी सोचा नहीं था मैं 🧐😵‍💫","Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi Mza hai ya gunaah ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒 jaise mera tharki dost", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida","Stop dreaming BTS your czn Ahmed is waiting for you.🙂", "Meri jaan kaise ho aap 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐","Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* ✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lunga🙂♡• || _[🙂]~🖤 •|" , "Tum Band nhi Karoge kya?🙂" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "M hath jod ke Modi Ji Se Gujarish Karta hu teri madad krenge❁⃝❤➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢*💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " Aaryan Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss SILENT PRINCE babu..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz mahabbat thi sahab tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.","Tumhari yaad me jeena mushkil hai","Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h","Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है","Mujhe tumse baat karke bahut achha lagta hai","रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝","are are bolo meri jaan kya haal h 😉 😘", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " ,"Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu pta lo" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa","इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁 जिसका तुमनें 👉 👸 #दही कर दिया है..🤣😂🤣","पगली तू फेसबुक की बात करती है 😀 हम तो ‎OLX पर भी लड़की सेट कर लेते हैं 🤣😂🤣","ये जो तुम मोबाइल फ़ोन में Facebook or WhatsApp Notifications बार-बार चेक करते हो ना !! शास्त्रों में इसे ही 🥀मोह माया🦋 कहा गया है 🤣😂🤣","मेरे पिता जी का तो कोई ऐसा दोस्त भी नही जो अमरीश पुरी की तरह ये कह दे..चल इस दोस्ती को रिश्तेदारी में बदल दे !🤣😂🤣","अगर दर्द भरे गाने 🎶 सुनकर भी आपको दर्द ना हो तो समझ लो आप दोबारा प्यार ❤ करने के लिए तैयार हो चुके हो…🤣😂🤣","एक लड़की के आगे उसकी सहेली की तारीफ़ करना पेट्रोल पंप पर सिगरेट पीने के बराबर है 🤣😂🤣","मेरी जान हो तुम मेरे गुस्से की दुकान हो तुम 😜👈","दिल में न जाने कब से तेरी जगह बन गई\nतुमसे बात करना मेरी आदत बन गई 🙈👈","मेरी पसंद भी लाजवाब है यकिन नही तो खुद को देख लो 🙈👈","दुसरो के लिए भी छोड़ दो खुद अकेली ही खूबसूरती की ठेकेदार बन बैठे हो 😕👈","तुम्हारी बोली बंदुक की गोली जैसी है जो सीधा दिल पे लगती है। 😒👈","रात को सपने दिन में ख्याल\nबड़ा ही अजीब सा है इस दीवाने का हाल।😒👈","आदत नही है हमें किसी पे मर मिटने की\nपर दिल ने तुम्हें देखकर मोहलत नही दी सोचने तक की 🤐👈","दिल में फीलिंग का समंदर सा आ जाता है\nजब तुरंत तेरा रिप्लाई आ जाता है। 😎👈","मेरे रुह की पहली तलब हो तुम\nकैसे कहूं कितनी अलग हो तुम। 🙈🙈👈","मुझे बार बार ख्याल आता है\nतेरा ही चेहरा याद आता है। 🤐👈","तुझे देखकर ख्याल आता है\nएक बार नही बार बार आता है\nइस दिल को तुझ पर ही प्यार आता है। 😛👈","मुझे लाइफ में कुछ मिले ना मिले\nबस तुम मिल जाओ यही बहुत है मेरे लिए। 🙈👈","हमसे बात करने को तो बहुत से है\nहमें तो सिर्फ आपसे बात करना अच्छा लगता है। 😛👈","मेरा दिल कितना भी उदास क्यों न हो\nतेरी ही बातों से इसे सुकुन मिलता है। 🤐👈","आप मेरे लिये कुछ खास है\nयही पहले प्यार का एहसास है। 😗👈","हालत चाहे कैसे भी हो मैं तुम्हारा और तुम मेरी हो। 😛👈","जितना चाहो उतना सताया करो\nबस  टाइम टू टाइम ऑनलाइन आया करो। 🥺👈","काश तेरा घर मेरे घर के करीब होता\nमिलना ना सही तुझे देखना तो नसीब होता। 😒👈","हर पल तुम मुझे बहुत ही याद आते हो\nजान निकल जाती है जब तुम मुझसे रुठ जाते हो। 🤐👈","मुकद्दर में रात की नींद नही…तो क्या हुआ…?? हम भी मुकद्दर के सिकन्दर हैं…दोपहर को सो जाते हैं…🤣😂","लड़कियों से बहस करने का मतलब दादी को iphone चलाना सिखाना है🤣😂🤣","घर की इज्जत बेटियों के हाथ में होती है और प्रॉपर्टी के कागज़ नालायकों के हाथ में 🤣😂🤣","मेरी हर गलती ये सोच कर माफ़ कर देना दोस्तों…कि तुम कोन से शरीफ़ हो ?? 🤣😂🤣","हर कामयाब स्टूडेंट के पीछे माँ की चप्पल का हाथ होता है !! 🤣😂🤣","एक बात थी मेरे ज़हन में सोचा आज पूछ ही लूँ ये जो इज़्ज़त का सवाल होता है…वो कितने नंबरों का होता है ? 🤣😂🤣","किस्मत आजमा चुका हूं नसीब आजमा रहा हूं FACEBOOK पर एक लड़की पटाने के चक्कर में 15 लड़के पटा चुका हूँ 🤣😂🤣","खुद के पास गर्लफ्रेंड नही होगी फिर भी दुसरो को गर्लफ्रेंड पटाने के नुस्खे देते है…ऐसे हैं हमारे दोस्त 🤣😂🤣","ये पाप धोने के लिये कौन सा साबुन अच्छा रहेगा ? 🤣😂🤣","रास्ते पलट देते हैं हम जब कोई आकर यह कह दे कि आगे चालान काट रहे हैं…🤣😂🤣","💋 बस यूँ ही पूछना था 😕 कि हर रोज जो मेरी नींद चुराते हो 😏 उसका तुम करते क्या हो…..? 🤔👈" , "💋 प्लीज आप आर्मी ज्वाइन कर लीजिये 👮क्यूंकि आपको देखकर 👀 दुश्मन ऐसे ही घायल हो जायेंगे...🤭🤭👈" , "💋 आप अपने पंख कहाँ छुपाते हो 🤔 क्योंकि आप एक परी जैसे लगते हो....🙈🙈👈" , "💋 प्यार तो करते नहीं तुम 😒 दुआ करो मुझे कोई और पटा ले...😕😕👈" , "💋 Ak 47 की जरुरत तो 🙂 हम लोगों को है 🤐 तुम्हारी तो आँखे ही काफी है 😛 कतल करने के लिए....😇😇👈" , "💋 इश्क़ को रहने दीजिये ज़नाब 🙂 फलर्टी कीजिये सुकून मिलेगा....😜😜👈" , "💋 सांवला रंग ☺️ गरम मिज़ाज 🤐 मीठी आवाज 🙊 और कडक तेवर 😁 तुम अपना नाम बदल के चाय क्यों नही रख लेते.….😀😀👈" , "💋 तुझे आई लव यू बोल तो दूँ 🙈 पर तू अपने भय्या को बुला लेगी फिर 🥺 दुनिया वाले कह देंगे कि 🙄 जीजा ने अपने साले को पिट दिया....😒😒👈" , "💋 मैं अभी सिंगल हूँ 🙂 और तुम भी 😒 चलो आज कुछ मिंगल करते है....🙂🤟" , "💋 लगता है आपके पास मेरी बीमारी की दवा है  शायद 🤔 जिसे लोग लोवेरिया कहते हैं....😅😅👈" , "💋 तुम्हारे दिल का 💖 Hotspot ऑन है शायद 😸 क्यूँकि मेरे दिल का 💗 WiFi बार बार तुमसे 🤦 कनेक्ट हो रहा है....!! 😏😏👈" , "💋 आपके पास नक्शा है क्या…? 🤔 क्योंकि मैं आपकी आँखों में खो गया हूँ....!! 🙃🙃👈" , "💋 जल्दी से कोई भगवान 🙆 को बुलाओ क्यूकी ☹️ एक परी खो गयी हैं 😱 और वो परी यहा मुझसे चेटिंग कर रही हैं....!! 🙈🙈👈" , "💋 तुम्हारे प्यार का इन्वेर्टर 😇 जब से इस दिल में लगाया है 💘 तब से इस दिल की बैटरी लो नहीं होती है....!! 🙈🙈👈" , "💋 यार आपकी बाते सुन कर 😱 तो मुझे आपको मेरी जानू बनोगी 🤯 आवार्ड देने का मन कर रहा है....!! 😃😃🤟" , "💋 आपके पापा एअर फोर्स मे थे क्या 🤔 क्यूँकि आप एक बम की तरह हो...!! 😕😕👈" , "💋 डॉक्टर ने एडवाइस किया है 😒 की सोने से पहले 🙄 आपकी फोटो देख कर सोना जरुरी है 🙈 वरना हार्ट अटैक आ सकता है....!! 🤕🤕👈" , "💋 कार में पोलिश कर के भी 😵 कार उतनी शाइन नहीं करती ☹️ जितना तुम बिना मेकअप के करती हो....!! 😌😌👈" , "💋 क्या आप एक जादूगर हो 🤔 क्यूकी जब भी आपको देखता हूँ 🧐 बाकी सब गायब हो जाता हैं....!! 😒😒👈" , "💋 जादू सीख रहा हूँ 😇 किसी शहजादी को 👰 कब्जे में करना है....!! 🙂🤟" , "💋 वर्ल्डकप जित ने पर 🙂 इतनी खुशी नहीं मिलती ☹️ जितनी आपसे बात कर के मिलती है...!! 😁🤟" , "💋 आपके हाथ काफी भारी है 😑 चलो इन्हें मैं पकड़ लेता हूँ....!! 😊😊🤟" , "💋 आप चोरो के राजा लगते हो 😎 क्यूँकि आपने मेरा दिल चुरा लिया हैं....!! 🤕🤕👈" , "💋 जितना नशा तुम्हे 👀 देखकर मुझे होता है 😵‍💫 उतना नशा तो पूरा बियर 🍺 बार पीकर भी नहीं हो सकता....!! 😕😕👈" , "💋 चलो आज मैं तुम्हें एक किस देता हूँ 😘 अगर तुम्हें पसंद ना आये 😒 तो कल तुम मुझे वापस लौटा देना....!! 🙈🙈👈" , "💋 तुम्हारे दिल में वैक्यूम क्लीनर भी लगा है क्या 🤔 क्यूँकि बहुत साफ दिल है तुम्हारा....!! 😀🤟" , "💋 अपने हसीन होंठों 👄 को किसी परदे में छुपा लिया करो 😜 हम गुस्ताख लोग हैं 🤤 नज़रों से भी चूम लिया करते हैं...!! 😚😚👈" , "💋 चारों दिशाओं में 🙂 शंख बजेगा 🥳 मैं तेरा था 😌 तेरा हूँ और तेरा ही रहूंगा..…!! 😘😘👈" , "💋 लत तेरी ही लगी है 😗 नशा सरेआम होगा 🥲 हर लम्हा मेरे लबों पे 🙂 सिर्फ प्रेम का ही नाम होगा....!!😙😙👈" , "💋 जानलेवा है 🥴 उसका सावला रंग 👰🏽‍♂️ और मै शौकिन भी कड़क चाय का हूँ...!! 😛😛👈" , "💋 मेरे इश्क की 🥲 तू कर ले चाहे कितनी भी आजमाइश 🥺 तू ही मेरा पहला इश्क है 🥰 और तू ही मेरी आख़िरी ख्वाहिश...!! 🙈🙈👈" , "💋 उसे मेरी आँखें 👀 पसन्द है और मुझे 😗 उसकी आँखों में 😊 मेरे नाम का काजल...!! 🙈🙈👈" , "💋 मुझे तो तुमसे नाराज़ ☹️ होना भी नहीं आता 😏 ना जाने तुमसे मैं कितनी 🤗 मोहब्बत कर बैठा हूँ....!! 😍😍👈" , "💋 तुझे देखने का जुनून 🤠 और भी गहरा होता है 😗 जब तेरे चेहरे पे 🤤 ज़ुल्फ़ों का पहरा होता है...!! 🙂🙂👈" , "💋 यूँ तो दिल 💝 और नियत से साफ है हम 🥲 बस शब्दों में थोड़ी शरारत 😜 लिए फिरते है हम...!! 😛😛👈" , "💋 वक्त मेरा हो ना हो 🥺 मैं हर वक्त तेरा हूँ...!! 🤗🤗👈" , "💋 धड़कने भी बेचैन रहती है 😢 आज कल क्योंकि तेरे बिना ये 💗 धड़कती कम और तड़पती ❤️‍🔥 ज्यादा है...!! 😒👈" , "💋 दिल से आपका ख्याल जाता नहीं 🤭 आपके सिवा कोई याद आता नहीं....!! 😒👈" , "💋 सुन मेरी जान 😘 मोहब्बत तो सभी करते है 💕 आओ हम शादी करते हैं...!! 😛👈" , "💋 डॉक्टर ने मुझे एडवाइस किया है 😏 कि रोज सोने से पहले 🥱 और और उठने के बाद 🙊 सुबह शाम आपसे बात करूं 😻 तो मेरी तबियत जल्द ही ठीक हो जाएगी.....😁😁👈" , "💋 ऊपर वाले ने जब तुम्हें बनाया होगा 🥲 उस वक़्त शायद वो 🤔 दुनिया की सबसे खूबसूरत चीज 🤭 बनाने के मूड में रहा होगा....😌😌👈" , "💋 यार आप हो सबसे हटके 🙃 तभी तो मेरा दिल 💗 आपको देख के मारता है झटके....🙈🙈👈" , "💋 भगवान का दिया हुआ सब कुछ है 😒 दौलत है 😀 शोहरत है 🙂 बस एक चीज की कमी है 🥺 वो हो तुम 🤭 लगता है अब वो भी पूरी हो"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti")) {
     return api.sendMessage("Hmm... Tu LanTi PhLe Ungli Kyun Ki 😾 :))", threadID);
   };

    if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("💐𝐏𝐄𝐇𝐋𝐄 𝐁𝐑𝐔𝐒𝐇 𝐊𝐀𝐑𝐊𝐄 𝐀𝐀 𝐀𝐉𝐄𝐄𝐁 𝐒𝐈 𝐒𝐌𝐄𝐋𝐋 𝐀𝐀 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈💐", threadID);
   };

    if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😺")) {
     return api.sendMessage("ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ🧐😒💯💫", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix kon lgayga hawa me sim likh diya yar...... Omffo😒", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("💐𝐇𝐄𝐋𝐋9 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐎𝐋𝐎 𝐊𝐀𝐈𝐒𝐄 𝐇𝐎 𝐀𝐏💐", threadID);
   };

   if ((event.body.toLowerCase() == "who is this god") || (event.body.toLowerCase() == "bhagwan kon hai")) {
     return api.sendMessage("हिंदुओं के मान्यता के अनुसार कोई अंतर नहीं है अर्थात ईश्वर और अल्लाह एक ही आईटम है लेकिन मुसलमानों की मान्यता के अनुसार अल्लाह ही सत्य है और उसके अतिरिक्त कुछ अन्य पूज्य नहीं है बल्कि मनगढ़ंत है। ईश्वर हर जगह रहते हैं, कण कण में विराजमान हैं। सब कुछ परमात्मा में ही समाया हुआ है। ईश्वर निराकार और साकार दोनों है। ", threadID);
   };

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("😻🌿𝐎𝐤 𝐁𝐘 𝐉𝐚𝐋𝐃𝐢 𝐅𝐢𝐫𝐒𝐄 𝐌𝐢𝐋𝐞𝐍𝐆𝐞🤙🙄", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
   };


   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️🙈🙉🙊", threadID);
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("My Owner AestHetic bOy  SILENT SAMEER\nhttps://www.facebook.com/SILENT SAMEER.HERE🖤", threadID);
   };
if ((event.body.toLowerCase() == ".") || (event.body.toLowerCase() == "..")) {
     return api.sendMessage("💐𝐀𝐋𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐓𝐎 𝐒𝐀𝐇𝐈 𝐒𝐄 𝐋𝐈𝐊𝐇𝐎 𝐀𝐆𝐀𝐑 𝐍𝐀𝐇𝐈 𝐏𝐓𝐀 𝐓𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎SS 𝐒𝐀𝐌𝐄𝐄𝐑 S𝐄 𝐏𝐔𝐂𝐇 𝐋𝐎💐", threadID);
   };

   if ((event.body.toLowerCase() == "abe") || (event.body.toLowerCase() == "Abe")) {
     return api.sendMessage("😻🌿𝐀𝐁𝐞 𝐀𝐁𝐞 𝐌𝐚𝐓 𝐈𝐉𝐉𝐀𝐓 𝐒𝐞 𝐌𝐞𝐑𝐚 𝐏𝐑𝐞𝐅𝐢𝐗 𝐋𝐚𝐆𝐚 𝐎𝐫 𝐁𝐚𝐓 𝐊𝐚𝐑 𝐈𝐓𝐧𝐚 𝐅𝐫𝐄𝐄 𝐍𝐚𝐇𝐢 𝐊𝐚𝐑𝐓𝐚 𝐌𝐞😎🤞", threadID);
   };

    if ((event.body.toLowerCase() == "👌") || (event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🕊️") || (event.body.toLowerCase() == "🕊️")) {
     return api.sendMessage("आर ये सब मत भेजा करो मेरा सर दर्द होता है। 🤕🤕👈", threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "bot tharki")) {
     return api.sendMessage("😻🌿𝐓𝐮 𝐓𝐇𝐫𝐊𝐢 𝐓𝐞𝐑𝐚 𝐁𝐚𝐏 𝐓𝐇𝐚𝐑𝐊𝐢 𝐓𝐞𝐑𝐚 𝐃𝐚𝐃𝐚 𝐓𝐇𝐚𝐑𝐊𝐢🤬🤗", threadID);
   };

   if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti hai")) {
     return api.sendMessage("Aby Chuuu Tu LanTi Le KaB0ol kRr 🖐️🐾👣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("Tu Hai Bc 🙂 Main T0o BoT Hun 😂😂😂 ", threadID);
   };

   if ((event.body.toLowerCase() == "ja raha") || (event.body.toLowerCase() == "ja rahi")) {
     return api.sendMessage("😻🌿𝐀𝐑𝐞 𝐓𝐔 𝐉𝐚 𝐑𝐄🌿😺", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("𝐂𝐇𝐚𝐋 𝐂𝐇𝐚𝐋 𝐓𝐔 𝐍𝐢𝐊𝐚𝐋 𝐊𝐚𝐌𝐚 𝐊𝐞 𝐊𝐡𝐢𝐋𝐚𝐓𝐚 𝐇𝐞 𝐊𝐢𝐘𝐚 🤘😼", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("𝐉𝐀𝐍𝐔 𝐌𝐄 𝐒𝐈𝐑𝐅 S𝐀𝐌𝐄𝐄𝐑 𝐊𝐈 𝐇𝐔 𝐒𝐀𝐌𝐉𝐇𝐘 😻🌿", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("😻🌿𝐒𝐚𝐫𝐚𝐅𝐚𝐭 𝐒𝐞 𝐌𝐮𝐬𝐤𝐮𝐑𝐚𝐭𝐞 𝐑𝐚𝐡𝐞🍁😂", threadID);
   };

   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("😻🌿𝐂𝐡𝐮𝐡𝐲 𝐉𝐞𝐒𝐚 𝐌𝐮𝐡 𝐍𝐚 𝐃𝐞𝐊𝐇𝐚🤙😼", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("💐𝐉𝐚𝐃𝐚 𝐌𝐚𝐭 𝐇𝐚𝐬𝐇𝐨 𝐖𝐚𝐑𝐧𝐚 𝐃𝐚𝐧𝐭 𝐓𝐨𝐝 𝐃𝐮𝐍𝐠𝐚 🤟💐", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("【＿ 𝐄𝐧𝐍𝐢 𝐇𝐚𝐒𝐢 𝐊𝐲𝐔 𝐀𝐚 𝐑𝐞𝐇𝐢 𝐇𝐚𝐈 🤣 𝐈𝐬 𝐇𝐚𝐒𝐢 𝐊𝐚 𝐑𝐚𝐀𝐳 𝐊𝐲𝐀 𝐇𝐚𝐈𝐧 𝐁𝐚𝐓𝐚𝐎 ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("𝐊𝐈𝐃𝐇𝐀𝐑😝 𝐌𝐔𝐇 𝐊𝐀𝐋𝐀😜 𝐊𝐀𝐑𝐀 𝐋𝐈𝐘𝐀 𝐁𝐄𝐒𝐇𝐀𝐑𝐀𝐌🤣 𝐉𝐀𝐘𝐄 𝐒𝐀 𝐇𝐀𝐒 𝐑𝐀𝐇𝐀 𝐇𝐀𝐈🙄", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("𝐋𝐀𝐆𝐓𝐀🤔 𝐇𝐀𝐈 𝐈𝐁😜 𝐌𝐄 😜𝐌𝐇𝐄𝐍𝐀𝐓 𝐉𝐀𝐃𝐀 𝐊𝐑𝐋𝐈 𝐈𝐒 𝐋𝐈𝐘𝐄 𝐒𝐈𝐑 𝐒𝐄 𝐏𝐀𝐍𝐈 𝐓𝐀𝐏𝐀𝐊😱 𝐑𝐇𝐀 𝐇𝐘🤣 𝐓𝐄𝐑𝐄 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("🌬️🌏𝐒𝐚𝐊𝐚𝐋 𝐀𝐂𝐡𝐢 𝐍𝐚𝐡𝐢 𝐓𝐨 𝐇𝐚𝐒 𝐓𝐨 𝐀𝐂𝐡𝐚 𝐋𝐢𝐘𝐚 𝐊𝐚𝐑 𝐌𝐞𝐑𝐢 𝐉𝐚𝐚𝐧😄🤣", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("【＿ 𝐊𝐲𝐀 𝐊𝐲𝐀 , 𝐑𝐨 𝐊𝐲𝐔 𝐑𝐞𝐇𝐞 𝐇𝐨 , 𝐌𝐞 𝐇𝐮 𝐍𝐚 𝐓𝐨 𝐅𝐡𝐈𝐚 𝐊𝐲𝐔 𝐑𝐨𝐍𝐚 . 𝐑𝐮𝐊𝐨 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐂𝐡𝐎𝐜𝐎𝐥𝐀𝐭𝐄 𝐃𝐞𝐓𝐚 𝐇𝐮 𝐋𝐢𝐊𝐡𝐎 🍫  ☞Chocolate☜ ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("𝐓𝐇𝐀𝐑𝐊𝐈😆 𝐆𝐀𝐍𝐃𝐈 𝐍𝐀𝐙𝐀𝐑🤣 𝐒𝐄 𝐀𝐍𝐊𝐇 𝐌𝐀𝐓 𝐌𝐀𝐀𝐑 𝐁𝐎𝐓🤣 𝐇𝐔𝐍😝 𝐋𝐀𝐃𝐊𝐈 𝐍𝐀𝐇𝐈 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("😚😚😚", threadID);
   };

   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };

   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("𝚂𝙷𝙰𝚁𝙼 𝙺𝚁𝙻𝙾 𝚈𝙴 𝙲𝙷𝚄𝙼𝙼𝙰 𝙲𝙷𝙰𝚃𝙸 𝙲𝙷𝙾𝚁𝙾 𝙿𝙰𝙳𝙷𝙰𝙸 𝙿𝙴 𝙳𝙷𝙸𝚈𝙰𝙽 𝙳𝙾😒", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("🄰🅆🅆 🄼🅈 🄻🄾🅅🄴 🅄🄼🄼🄰🄷😘💙🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "Good night") || (event.body.toLowerCase() == "GOOD NIGHT")) {
     return api.sendMessage("GOOD NIGHT MERI JAAN SWEET DREAMS AND MISS YOU SO MUCH JAANU 😘🥰", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("𝐊𝐀𝐀𝐍𝐈𝐘𝐀 𝐇𝐀𝐈 𝐊𝐘𝐀 𝐉𝐎 𝐃𝐈𝐍 𝐌𝐄 𝐓𝐀𝐑𝐄 𝐍𝐀𝐙𝐀𝐑 𝐀𝐑𝐇𝐄 𝐇𝐀𝐈𝐍 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("😻🌿𝐎𝐨𝐎𝐨 𝐓𝐑𝐚 𝐇𝐚𝐏𝐏𝐘 𝐁𝐢𝐑𝐓𝐇𝐃𝐚𝐘🌿😻", threadID);
   };


   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("😻🌿𝐇𝐚𝐲𝐞 𝐑𝐀𝐁𝐁𝐀 𝐢𝐓𝐍𝐀 𝐏𝐘𝐚𝐑🦋😻", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("【＿ 𝐌𝐚𝐍 𝐓𝐨𝐇 𝐀𝐜𝐇𝐚 𝐍𝐚𝐇𝐢 𝐊𝐚𝐌 𝐒𝐞 𝐊𝐚𝐌 𝐒𝐡𝐀𝐤𝐀𝐥 𝐓𝐨 𝐀𝐜𝐇𝐚 𝐊𝐚𝐑 𝐋𝐨 𝐌𝐞𝐑𝐢 𝐉𝐚𝐚𝐍  😝 ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("😻𝐀𝐞𝐒𝐞 𝐌𝐮𝐇 𝐁𝐚𝐍𝐚𝐊𝐚𝐑 𝐌𝐚𝐓 𝐑𝐨😼", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("😻𝐒𝐇𝐮𝐤𝐑 𝐇𝐞 𝐒𝐦𝐢𝐋𝐞 𝐓𝐨 𝐊𝐢🧡", threadID);
   };

   if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
     return api.sendMessage("😻🌿𝐘𝐞 𝐒𝐦𝐢𝐋𝐞 𝐍𝐚 𝐃𝐨 𝐍𝐚☺️🕊️", threadID);
   };

   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("😻🌿𝐇𝐚𝐘𝐞 𝐌𝐚𝐒𝐨𝐨𝐌 𝐌𝐞𝐑𝐢 𝐉aa𝐍🤘🕊️", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("😻🌿𝐂𝐇𝐚𝐋 𝐇𝐚𝐓𝐓 𝐌𝐞𝐑𝐞 𝐒𝐚𝐌𝐧𝐄 𝐌𝐚𝐓 𝐢𝐓𝐑𝐚 𝐘𝐞 𝐓𝐞𝐑𝐚 𝐌𝐮𝐇 𝐋𝐞𝐊𝐑🤙😻", threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("𝐂𝐇𝐚𝐋 𝐉𝐚 𝐍𝐚𝐇𝐚 𝐊𝐑 𝐀 𝐌𝐮𝐍𝐍𝐢 𝐁𝐚𝐃𝐚𝐍𝐚𝐌", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("Aby Tri NoSe NiKaL Rhi 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("𝐊𝐘𝐀 𝐇𝐔𝐀 𝐓𝐔𝐉𝐇𝐄 𝐋𝐀𝐑 𝐊𝐈𝐔𝐍 𝐓𝐀𝐏𝐊𝐀 𝐑𝐇𝐀 𝐇𝐀𝐈 𝐌𝐔𝐉𝐇𝐄 𝐔𝐋𝐓𝐈 𝐀𝐉𝐀𝐘𝐄 𝐆𝐈 🤮🤢", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("😻🌿𝐌𝐞𝐑𝐢 𝐊𝐢𝐒𝐒 𝐘𝐚𝐌𝐌𝐘 𝐇𝐞 𝐍𝐚😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("𝐊𝐘𝐀 𝐇𝐔𝐀 𝐓𝐔𝐉𝐇𝐄💋 𝐉𝐔𝐁𝐀𝐍 𝐀𝐍𝐃𝐀𝐑 🤓𝐊𝐑 𝐍𝐀𝐇𝐈🤧 𝐓𝐎 𝐊𝐀𝐀𝐓 𝐋𝐔𝐍𝐆𝐀 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ABy Ankhe KhoL 0or ZuBan Ander kRr WRna KaT DunGa", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("Ye Ajeeb_0_GaReeb Muu Na BaNa 😂 CarT0on 🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("𝐓𝐀𝐀 😬𝐇𝐔𝐀 𝐁𝐀𝐁𝐔🤪 𝐊𝐎𝐍𝐒𝐀 𝐆𝐀𝐍𝐉𝐀😳 𝐅𝐎𝐎𝐊 𝐋𝐈𝐘𝐀 😜𝐍𝐀𝐒𝐇𝐄𝐃𝐈 𝐈𝐍𝐒𝐀𝐍 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("𝐀𝐋𝐄 𝐁𝐀𝐁𝐔 𝐊𝐘𝐀 𝐇𝐔𝐀 𝐖𝐈𝐅𝐄 𝐍𝐄 𝐌𝐀𝐑𝐀 𝐊𝐘𝐀 𝐉𝐎 𝐈𝐓𝐍𝐀 𝐒𝐀𝐃 𝐇𝐎😒😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("😻🅃🄰 🄷🅄🄰 🄼🅈 🄻🄾🅅🄴🌿", threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("Kis Ki Baja Di 🤨🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("Wha Muu Ke SaTh Ankhe Be Band H0o GYi 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("😼🌿𝐀𝐁 𝐁𝐨𝐋 𝐍𝐚🍁😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("Nak T0o Thi Nhi Muu Be Gyb H0o GYa TeRa 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("🍁🌿𝐀𝐁 𝐓𝐑𝐢 𝐀𝐖𝐚𝐉 𝐀𝐘𝐢 𝐓𝐨 𝐖𝐢𝐅𝐢 𝐒𝐞 𝐁𝐚𝐍𝐃 𝐊𝐚𝐑 𝐃𝐮𝐧𝐆𝐚 😒", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("😻🍁𝐊𝐢𝐘𝐚 𝐒𝐨𝐂𝐇 𝐑𝐚𝐇𝐞 𝐉𝐚𝟒𝟒𝐍😻", threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("Tri Yeh Ungli Tri He Nak Me DyDeni MaiNy 😒😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("AJa BaBe MeLy Pas S0o Jaa😜", threadID);
   };

   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("𝐏𝐡𝐋𝐞 𝐍𝐚𝐇𝐚 𝐊𝐚𝐑 𝐚𝐀 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("🥀 𝐊𝐢𝐘𝐚 𝐇𝐔𝐚 😱 𝐒𝐇𝐞𝐒𝐇𝐚 𝐃𝐞𝐊𝐇 𝐋𝐢𝐘𝐚 𝐊𝐢𝐘𝐚 😳", threadID);
   };

   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("Tu Hushyar Ban kRr Na Dekh Main Hun Naw 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("𝐓𝐔 𝐇𝐀𝐓 𝐌𝐀𝐈 𝐃𝐄𝐊𝐇 𝐓𝐀 𝐇𝐔𝐍 🧐🧐🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("😻🌿𝐓𝐞𝐑𝐢 𝐓𝐨𝐅𝐅𝐢 𝐋𝐞𝐋𝐢 𝐊𝐢𝐒𝐢 𝐍𝐞 𝐉𝐨 𝐄𝐒𝐚 𝐌𝐮𝐇 𝐁𝐚𝐍𝐚 𝐋𝐢𝐘𝐚🍁😂", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("😻 ✄𝐔𝐩𝐚𝐫 𝐧𝐚𝐇𝐢 𝐧𝐞𝐞𝐂𝐡𝐞 𝐃𝐞𝐊𝐡 𝐒𝐚𝐦𝐧e 𝐇𝐮 𝐉𝐚𝐚𝐧𝐔🌬️☞𝐢  𝐋❍𝐕E 😻 𝐘𝐎𝐔⭐♡🧡>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("Ye BuLL Jesa MuU Na BaNa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("BaBe GuSsa Nhi KarTy Ye L0o Umumuaahhhhh 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("💐𝐊𝐲𝐚 𝐘𝐚𝐚𝐫 𝐉𝐚𝐛 𝐃𝐞𝐤𝐡𝐨 𝐓𝐚𝐛 𝐆𝐮𝐬𝐬𝐚 𝐊𝐚𝐫𝐓𝐞 𝐇𝐨 𝐋𝐨 𝐉𝐮𝐢𝐂𝐞 🧃 𝐏𝐢𝐨 𝐃𝐢𝐦𝐚𝐠 𝐓𝐡𝐚𝐧𝐝𝐚 𝐑𝐚𝐇𝐞𝐆𝐚 💐", threadID);
   };

   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("Aww 😐", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("🍁 𝐚𝐖𝐖 𝐓𝐚 𝐇𝐔𝐚 𝐁𝐞𝐁𝐞 🕊️", threadID);
   };

      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("☹️", threadID);
   };

      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("😻𝐓𝐚 𝐇𝐮𝐀 𝐌𝐘 𝐋𝐨𝐕𝐞🥺", threadID);
   };

      if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("awww 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("Aww ☹️", threadID);
   };

      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("🙁🙁🙁", threadID);
   };

      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Aww 😨", threadID);
   };


      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("😰😰😰", threadID);
   };

      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😳", threadID);
   };

      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("😧", threadID);
   };

      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("Aby Muu Band kRr Marcher Gus JayGa Muu Main 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("😲", threadID);
   };

      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("😯", threadID);
   };

      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("【  𝐀𝐈𝐒𝐄 𝐌𝐀𝐓 𝐃𝐄𝐊𝐇0 𝐘𝐀𝐑 𝐍𝐀𝐇𝐈 𝗧𝗢 𝐊𝐈𝐒𝐒  𝐊𝐀𝐑 𝐋𝐔𝐍𝐆𝐀______😁😁😝】", threadID);
   };

      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("Tre Sar Me BumB Kis Ny PhoRa 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("Asa Muu Na BaNa 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };

      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("𝐂𝐇𝐚𝐋𝟗 𝐇𝐚𝐓𝐓 𝐍𝐨𝐔𝐓𝐚𝐧𝐆𝐢 😫😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("Asa KYa DeKh LiYa 😳", threadID);
   };

      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Aww BaBe  SarDi Lag Rhi T0o MeRe PaSs Ajao 🙈😜", threadID);
   };

      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("𝐍𝐚𝐇aa 𝐋EE 😂🥶", threadID);
   };

      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Kaunsa month chal raha hai", threadID);
   };

      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("Are Ja Na MeKo Be BeMar KRrna KYa 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("Aww BaBe K0o Ta HuWa Idher Aow ThoRa Pyal L0o 😜💉💉💉", threadID);
   };

      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("🌬️ ✄𝐂𝐡𝐚𝐒𝐦𝐚 𝐇𝐚𝐓𝐚𝐎 𝐧𝐚 𝐒𝐚𝐡𝐚𝐁 𝐊𝐢𝐘𝐚 𝐍𝐚𝐦𝟑 𝐇𝐚𝐢 𝐀𝐩𝐊𝐚  𝐊A𝐋𝐋𝐎 😅", threadID);
   };

      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };

      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("𝐀𝐧𝐄𝐊 𝐖𝐚𝐋A 𝐉𝐢𝐍𝐍 😂", threadID);
   };

      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("Aww S0o SweeT 😂 CarT0on", threadID);
   };

      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("👽👽👽", threadID);
   };

      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("Aby Yal BiLLi Jesy Muu Sy Na Hash 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
     return api.sendMessage("😼😼😼", threadID);
   };

      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("TeResy Axha T0o Billi iTra LeTi 😂", threadID);
   };

      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };

      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
   };

      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
   };

         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
     return api.sendMessage("❤️🧡💛💚💙💜🤎", threadID);
   };

      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Ari mori maiyya e ka dekh liyo👻💀", threadID);
   };

      if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👌")) {
     return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
   };

      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("uh K0o KhuD K0o isKi ZaiDa Zarurat Hai 🤣", threadID);
   };

      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("𝐒𝐂𝐇 𝐌𝐞 𝐁𝐚𝐍𝐃𝐑 𝐇𝐞 𝐇𝐚𝐢 😂", threadID);
   };

      if ((event.body.toLowerCase() == "Chutiya") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("𝐓𝐔 𝐇𝐞 𝐂𝐇𝐮𝐓𝐢𝐘𝐚 🙂 𝐌𝐚𝐢 𝐓𝐎 𝐁𝐨𝐓 𝐇𝐔 𝐍𝐚 🥺😂", threadID);
   };

      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
     return api.sendMessage("0ye HoYe 😈", threadID);
   };

   if ((event.body.toLowerCase() == "Ok") || (event.body.toLowerCase() == "Okay")) {
     return api.sendMessage("𝐊𝐢𝐘𝗔 𝐎𝐊🙄 𝐉𝗔𝐀𝐍", threadID);
   };

   if ((event.body.toLowerCase() == "G") || (event.body.toLowerCase() == "Han G")) {
     return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("𝐊𝐢𝐘𝐀 𝐇𝐦𝐦 🙄𝐓𝐇𝐚𝐑𝐊𝐢", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("🄷🄰🄽 😻 🄶 🙄 🄹🄰🄰🄽", threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("𝐉𝐀𝐍𝐔 𝐌𝐄 𝐒𝐈𝐑𝐅 S𝐀𝐌𝐄𝐄𝐑 𝐊𝐈 𝐇𝐔 𝐒𝐀𝐌𝐉𝐇𝐘 😻🌿", threadID);
   };

   if ((event.body.toLowerCase() == "bot go to sleep") || (event.body.toLowerCase() == "bot goes for sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("Khud k0 kya legend samjhte ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "good morning Darling")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hu na jaani ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "suno sameer") || (event.body.toLowerCase() == "sameer") || (event.body.toLowerCase() == "kaha ho sameer") || (event.body.toLowerCase() == "boss")) {
     return api.sendMessage( "Busy Honge Work Me😑Main t0 Hoon yar 😘",threadID);


   };

   if ((event.body.toLowerCase() == "bot ka owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟💙SAMEER🎸  ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐌𝐫 𝐒𝐚𝐦𝐞𝐞𝐑. 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :https://www.facebook.com/PRINCE SAMEER.HERE", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon he") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Sameer Sharabi ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("He is Sameer Sharabi. He Gives his name Mr Sameer everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "@Nazma khan") || (event.body.toLowerCase() == "@Sehreen khan")) {
     return api.sendMessage("ye toh hasina h. meri jaan h. meri dil ki dhadkan h🤩.", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "KAM BOL") || (event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("kyu rahu chup🥺🥺", "Sirf apke kehne se chup ho gya brna 😒😒", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "🍁") || (event.body.toLowerCase() == "🍁🍁") || (event.body.toLowerCase() == "JANNAT") || (event.body.toLowerCase() == "Jannat")) {
     return api.sendMessage("⚘😻  ✄𝐌𝐞𝐑𝐢𝐢🥀 𝐩𝐘𝐚𝐑𝐢🥀 𝐉𝗮𝗮𝗡🌿🌬️☞🌏 𝐉aȠȠaƬ🥀 😻🥀 𝐁𝐚𝐁𝐔🥀 🌙𝐊𝐚🥀 𝐅𝐚𝐕𝐨𝐑𝐢𝐭𝗲♡🍁🧡>³••🕊️🍎😍🌿🥀. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️sab dekh rahe hai brna bhot kiss deta🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Jaan")) {
     return api.sendMessage("️😻🍁𝐌E 𝐇𝐮 𝐇𝐢 𝐈𝐭𝐍𝐚 𝐀𝐂𝐇𝐚. 𝐒𝐚𝐁 𝐋𝐨𝐆 𝐓𝐚𝐑𝐞𝐞𝐅 𝐊𝐚𝐑𝐓𝟑 𝐇𝟑 𝐌𝟑𝐑𝐢🌿😍.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️【＿ 𝐇𝐦𝐌 𝐇𝐦𝐌 𝐍𝐚 𝐊𝐚𝐑𝐨 𝐒𝐢𝐃𝐡𝐀 𝐒𝐢𝐃𝐡𝐚 𝐁𝐨𝐋𝐨 𝐇𝐞𝐘 𝐌𝐚𝐑𝐫𝐘 𝐌𝐞🙈 ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name me kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️mere baccha toh Tumhare Pet m H.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️m toh Andha Hu Dekh nhi sakta😜", threadID);
   };

   if ((event.body.toLowerCase() == "Aaryan kon h") || (event.body.toLowerCase() =="Neha kon h")) {
     return api.sendMessage("️Aafat or Chiku ek dusre ki jan hai😍😍💞", threadID);
   };

   if ((event.body.toLowerCase() == "love you janu😘") || (event.body.toLowerCase() == "mujhe bhi love you bol")) {
     return api.sendMessage("️Are meri sizuka jaanu love you too ummaaaah😘😘😘😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh achhi bna lo Meri Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️Idhar Udhar Kya Dekh rahe ho sab babu sona me busy h🙄 ", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are kya hua phir brekup hua kya?😬", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Thoda Kam Has Warna Ek Mukke me Sare Dant Tod dunga 😈🙄🤐", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Ankho m Pyar, Dil me khumar, Pyar Toh Nhi kar Liya Mujhse🥰", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasata hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "boat") || (event.body.toLowerCase() == "Boat")) {
     return api.sendMessage("𝐁𝐨𝐭 𝐧𝐚𝐡𝐢 𝐑𝐚𝐧𝐢 𝐛𝐨𝐥𝐨 𝐏𝐚𝐠𝐚𝐥", threadID);
   };
   mess = "{name}"

  if (event.body.includes("Bot") == 1 ||
     (event.body.includes("bot") == 1 ||
     (event.body.includes("BOT") == 1 ||
     (event.body.includes("BABU") == 1 ||
     (event.body.includes("Babu") == 1 ||
     (event.body.includes("babu") == 1 ||
     (event.body.includes("boot") == 1 ||
     (event.body.includes("Oye") == 1 ||
     (event.body.includes("oye") == 1 ))))))))) {
      var msg = {
        body: `${rand}`
      }
  var msg = {
    body: `⫷╍╍╍╍╍╍💖╍╍╍╍╍╍⫸
       ◄───╬❆☠️❅╬───►
      ❤️🌿🍒${name}🌿🥀💙,
       ◄───╬❆😈❅╬───► \n\n
          ${rand} 🎻♡🥀_💋🤣🍁❤

𐄪༆🦋ﮩ٨ـﮩﮩ٨ـ😻♡🌿ﮩ٨ـﮩﮩ٨ـ🦋༆𐄪,


 *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝❦ ════ •⊰𝐒𝐀𝐌𝐄𝐄𝐑⊱• ════ ❦🍀🍒 ❥||ㅎ

𐄪༆🦋ﮩ٨ـﮩﮩ٨ـ😻♡🌿ﮩ٨ـﮩﮩ٨ـ🦋༆𐄪`
  }
  return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
