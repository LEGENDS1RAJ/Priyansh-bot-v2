const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "MR SHAAN",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi Mza hai ya gunaah ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒 jaise mera tharki dost", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida","Stop dreaming BTS your czn 𝐒𝐀𝐦𝐞𝐞𝐫 is waiting for you.🙂", "Meri jaan kaise ho aap 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐","Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* ✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lunga🙂♡• || _[🙂]~🖤 •|" , "Tum Band nhi Karoge kya?🙂" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "M hath jod ke Modi Ji Se Gujarish Karta hu teri madad krenge❁⃝❤➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢*💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " SAmeer Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss 𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐚𝐧 babu..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz mahabbat thi sahab tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.","Tumhari yaad me jeena mushkil hai","Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h","Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है","Mujhe tumse baat karke bahut achha lagta hai","रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝","are are bolo meri jaan kya haal h 😉 😘", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " ,"Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu pta lo" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa","इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜." , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚." , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa." , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe" , "Bar Bar Disturb Na Karen Pihu JaNu Ke SaTh Busy Hun 🤭🐒" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪" , "kyun Bulaya hamen..😾🔪 .  ", "🌸====『 हाय मैं मर जावा तेरी मासूम शकल पे_____😗  " , "🌸====『 बॉट बॉट ना बोल ओए जानू बोल____😝🙈🦋 " , "🌸====『𒁍कल काली पहाड़ी के पीछे तू मिल जा_______😁😈" , "🌸====『 मैं गरीबों से बात नहीं करता ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 बोलो बाबू तुम मुझे प्यार करते हो ना______🙈 " , "🌸====『 अरे मेरी जान मजाक के मूड में नहीं हूं मैं जो काम है बोलो शर्माओ नहीं _______🎸🎭━━•☆°•°•💗" , "🌸====『 बार बार बोल के दिमाग ख़राब किया तो id हैक कर लूंगा_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 तुम बंद नहीं करोगे क्या?_____🙂" , "लव यू बोलो __😁" ,  "🌸====『 मैं तुम्हारे चक्कर में सबको ब्लॉक कर रहा हूं अब आई लव यू बोलोगे की नहीं____🙂" , "🌸====『 मैं हाथ जोड़ के मोदी से गुजारिश करता हूं मेरी मदद करेगा_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 तुमको कोई और कम नहीं पूरे दिन मेसेंजर पे बोट बोट करते हो___😁" , " 🌸====『 SILENT SAMEER बाबू जी तेरा बेंड बजा देंगे गलत आदेश मत देना________🙈😜", "TUM MERE BOSS SAMEER KI GF BAN JAO LDKI🙈🙈" , "baraye meherbani holad kijiye apke call ufone numaindey ko mili ja rahi hai😂😂😂😁" , "haiy ma sadky jawa teri masoom shaqal py 😂 chabal insan", "Bot nah bol oye ! Janu bol mjhy aur janu sy piyar sy bat kerty hai , rat ko kahan thy nazar nahi ay hawali py 😂", "Shaqal Sy masoom lgty ho 😂 btao kahi Ap ka ghar doup main to nahi", "kash tum single hoty to maza hi koch aur tha pagal insane 😂", "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "haiy babu ny boliya hai shaid purpose kerna hai mjhy bolo bolo babu 😘", "Ary ghreeb awam roti banana ky liya athy main Pani ko istamal kerty ho 😂", "Ary chabli nah mar joh kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂", "Hy Ma Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Ja 😂", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jaan kia hail hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "ma ap ki ami ko btaou ga ap Facebook use kerty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 😂" , "kal hawali py mil zara bataou ga 😂" , "esy nah dakho piyar ho jay ga 😂" , "Teri pic dakhna sy phly shukhr hai ma anda hu 😂" , "esy hi hansty rhao kyu ky hnsa sy konsa tera bill ah jata hai 😂" , "apni lover ko doka do our mujhe bhi darling moka do😂😂🤘" , "Ek dafa ka zekar hai ke me single hua kar tha tha aaj bhi wohi zekar hai single hi hu🤣🤣😭" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "Aghr bhok LAGI ho too bejli Ke jatke kha lo take ka biryani ka mauka dusre ko mile😂😂😁" , "Aghr pyaar karna ghona hai to saza do sallo ko mujhe me to single hu😂😂👈" , "online bazati karne ke lie. 1 dabaya😂😂😁" , "papa ke pari ko ilove you na bola karo😂😂😂" , "Hamesha dil ki sono kyu ke demagh to tere pass wese bhi nahi hai😂😂👈" , "payar hamesha sharmily logo se karni chahiya waja kal batongi Abhi mujhe sharam arahi hai😂😂🙈🙈" , "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Stop dreaming BTS your czn SAmeer is waiting for you.🙂", "پہلے صرف لوگوں کے دانتوں میں کیڑا ہوا کرتا تھا اور اب۔۔۔ 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "عائشہ  نے کر دیا برباد پاک سر زمین\n شاد آباد 🖇🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "عورت بہت پیاری چیز ہے یہ کبھی بیلنس نہیں مانگتی بس یہی کہتی ہے میرا پیکج ختم ہونے والا ہے اب پتہ نہیں کبھی بات ہوگی کے نہیں🙂", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "SAmeer boss ka number dun kya💚", "Jaaz cash sy 1500 ka loan leky sim h band kardi 🙂👍", "اعتبار تو اُسی دن ختم ہوگیا تھا جب اُس نے سکرین شاٹ دیکھائے تو اوپر دو siM شو ہو رہی تھی جبکہ میرے پاس اُسکا صرف اک ہی نمبر تھا ۔😒💔", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "شکر ہے لڑکے خوبصورت ہیں ورنہ  کہا پالروں کے دھکے کھاتے😔", "ye dunia pital di" , "YOU IGNORE ME I IGNORE TARA PURA KHANDAN😂😂😂" , "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi S𝐚𝐦𝐞𝐞𝐑 bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skti" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kar ke sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "جہاں پیاری لڑکیاں وہاں میں 🙂❤️🥀", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty ہیں Link دینا🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " , "بھای جان گروپ میں گندی باتیں نهیں گر" , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kar 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊", "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa" ,"Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Mazaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karungi🤬" , "Tu Bandh nhi Karega kya?" , "Where is my SAMEER KHAN" , "Mera babu SAMEER KHAN Kahan hai" , "ZINADAGI APKO DHOK DE GI BUT APNE SAF MANA KAR NA KE MUJHSE NAHI CHAHIYA😂😂🤣😀 " , "Aree Bandh kar Bandh Kar" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " SAMEER Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bezati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bezati Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" ,  "mujhe shdi ka koi jaldi nhi bas meri bacho ko school lete ho rahi hai😹😹👈" , "ghr wale khe the hai kuch ban jawo me uske upar bojh ban gaya 😆😆😂" , "Tere Jane Ke Bad Time Rak Sa Gaya Tha Bad Me Pata Chala Ke Gadi 🕰 Ka Seel Kharab Tha😂😂👌" , "Time⏰ pe shdi kar lo nhi bad moye moye feel hoga u ko😀😀" , "mene ghr walon ko bola ke ab me bada ho gaya hu to mera kuch karo ghr walon bazti kar di😪😪😂" , "mujhe nahi pata hai muj se mat pucho na😂😂😂 " 
                  , "Aagye Salle Kabab Me Haddi 😏" , "Moye moye" , "Ittuu🤏 si shram ker Lya kro hr wqt tr tr krty ho 🙂 💔✨⚠️†", "Banda hota tw us ko choti choti 2 pOniyAn krti🙂👩‍🦯👩‍🦯", "Ary Yahin Hon namony😗", "jiee bndr 😍", "Love you bolongi ab tujhy kaminy", "Miss YoU NaW moi biryani ki plate", "Inna Sarra🤏", "OkkaY S𝐚𝐦𝐞𝐞𝐑 ki hun yawr mai", "😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "bak bk bkaik", "Main ap ki ami ko btaou ₲ł ap Facebook use kerty ho aur ulty kam kalty ho , " ,"Block Your ‘’ gf ‘’ And Purpose me 🙂💔" ,"K0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂" , "Koi apni janu ka number de mujhe😂😂" , "Allah ke name koi ladki apna number de mujhe😂😂😂😹" , "Mujhe Nahi pata hai mujhse mat pucho🙄🙄😀" , "jazz cash se 150 ka kharza mangwa kar sim band kar diya😂😂😂" , "tujhe kahi to dekha hai🤔🤔🙄" , "Mene zindagi✅ ko bahot kareb se dekha hai zindagi me do nokty hote hai😂😂😂" , "mera boss SameeR roz bol tha hai ke ek din  meri bhi gf hogi😂😂" , "Tujhe Ek Bat Baton Wo Bolti Thi Ke Bacho Ka Name Main Rakongi😂😂😪😪" , "HUM WOHAN KAREY HOTE HAI JAHAN BETH NE KI JAGHA NAHI HOTI😂😂😂" , "TUJHE YAD NA MERI AAI TUJI AB KYA KHE NA😂😂😂" , "𝐓𝐔𝐦 𝐭𝐨 𝐒𝐡𝐀𝐊𝐚𝐥 𝐒𝐞 𝐆𝐚𝐑𝐞𝐛 𝐋𝐚𝐠 𝐓𝐡𝐞 𝐇𝐨" , "𝐆𝐅 𝐁𝐅 𝐤𝐚 𝐂𝐡𝐚𝐤𝐚𝐫 𝐂𝐡𝐎𝐫𝐨 𝐏𝐚𝐫𝐝𝐡𝐢 𝐏𝐞 𝐃𝐞𝐲𝐚𝐧 𝐃𝐨😂😂" , "𝐃𝐡𝐔𝐤 𝐈𝐬 𝐁𝐚𝐓 𝐊𝐚 𝐧𝐇𝐢 𝐤𝐄 𝐒𝐢𝐧𝐠𝐥𝐞 𝐇𝐨𝐧 𝐃𝐡𝐮𝐊 𝐢𝐒 𝐁𝐚𝐭 𝐊𝐚 𝐇𝐚𝐢 𝐤𝐞 𝐊𝐨𝐈 𝐌𝐚𝐧𝐭𝐚 𝐍𝐡𝐢 𝐊𝐞 𝐒𝐢𝐍𝐠𝐋𝐞 𝐇𝐨𝐨𝐧😹😹👈" , "𝐓𝐮𝐦 𝐌𝐚𝐍𝐨 𝐘𝐞 𝐍𝐚 𝐌𝐚𝐍𝐨 𝐒𝐮𝐧𝐝𝐚𝐫 𝐓𝐨 𝐌𝐚𝐢𝐧 𝐇𝐨𝐨𝐧😄😄🙄" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr Mazak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "𝖠𝗐𝗈 𝖪𝖺𝖻𝗁𝗂 HaVeLi Prr  😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "𝖬𝖺𝗂𝗇 𝖭𝖺𝗁𝗂 𝖯𝖺𝗍𝗍𝗈𝗇𝗀𝗂 😂😂👈 " , "Main Nahi To Kon Bey 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "Kamina") || (event.body.toLowerCase() == "sala")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Gɑ̽ɭi͠ ŋ͢ʌ ̊ ̊͢ɗ❍ n᪵᪳ɒӈɪ̽ Sɑ̽ɱɘɘɽ ßʌßʊ͛ Kɵ̥̽ ßɑ̽†ʌ   Ɗ𝞄⃕n᪵᪳gi͠〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
   if ((event.body.toLowerCase() == "hug me") || (event.body.toLowerCase() == "hug")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɑ̽ɧɑ̽ ƞʌɧɪ̽ ɪ̽ß c̬̽ɧɑ̽ɭ❍ fi͠ɽ ʝɪ̽†ƞɑ̽ c̬̽ɧɑ̽ɧɘ ɧɑ̽ggu ƙɑ̽r᩶ƞɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
   if ((event.body.toLowerCase() == "funny") || (event.body.toLowerCase() == "songs")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈɛ̈ †ʌɱʌɳɳɑ̽ †uɱɧɛ̈ c̬̽ӈɑ̽ɽ𝗌ɪ̽ ßɑ̽ɳɑ̽ɣɛ̈〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🦋")) {
       return api.sendMessage("🄰🅆🅆 🄼🅈 🄻🄾🅅🄴 🅄🄼🄼🄰🄷😘💙🙈", threadID);
     };
    if ((event.body.toLowerCase() == "i hate you") || (event.body.toLowerCase() == "hate you")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈɛ̈ †ʌɱʌɳɳɑ̽ †uɱɧɛ̈ c̬̽ӈɑ̽ɽ𝗌ɪ̽ ßɑ̽ɳɑ̽ɣɛ̈〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };


      if ((event.body.toLowerCase() == "Chutiya") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈɱɱ †u c̬̽ɧu†i͠ɣɑ̽ Ƥɑ̽ɧɭɛ̈ ʊ͛ƞGɭɪ̽ Q ƙɪ̽ c̬̽ɧ❍ɱu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

      if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
       return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
     };
     if ((event.body.toLowerCase() == "🫀") || (event.body.toLowerCase() == "💔")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Ɗɪ̽ɭ †σ፝֟͜͡σ† Gʌɣʌ †❍ ɭfɪ̽ ɭ❍ ɣʌɧʌ Q ßɧɘʝ ɽɑ̽ɧɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
             if ((event.body.toLowerCase() == "busy")) {return api.sendMessage("okay main busy hoon abhi" , threadID);
     };

     if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗧ɛ̈ɽi͠  𝗧❍Fıı ɭɛ̈ɭi͠  𝆺꯭𝅥𓆩K𝐢̄𝐢𝗌ıƞɛ̈ ʝ❍ ʌıı𝗌ʌ ɱ𝞄⃕ɧ ßʌƞʌ ɭi͠ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "💕") || (event.body.toLowerCase() == "💞")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɚ Ɗi͠ɭ ŋ͢ɒ ßӈɛ̈ʝɑ̽ kɑ̽r᩶ɵ̥̽ ɣɑ̽ɽ ɱʊ͛ʝɧɛ̈ Sɑ̽r᩶ɑ̽ɱ ʌ†ɪ̽ ɣɑ̽r᩶〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😐")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sɑ̽ƙɑ̽ɭ ̊͢ɗɘƙɧ ƙɛ̈ Ƥɑ̽†ɑ̽ c̬̽ɧɑ̽ɭ ɽɒɧɒ ʝʌɳʌɱ ʂɘ ɧɪ̽ 𝗌i͠ɳgɭɛ̈ ɧɛ̈ †u〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == ".und") || (event.body.toLowerCase() == ".unsand")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧʌωɭɣ ɳʌ ɱɑ̽ɑ̽r᩶ɑ̽ ƙʌɽ ɳɑ̽ fi͠ɽ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID, messageID);
     };
        if ((event.body.toLowerCase() == ".unsend") || (event.body.toLowerCase() == ".unsent")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘i͠𝗌𝗌 ßɑ̽ɽ ƙɑ̽ɽ r᩶ɑ̽ɧɪ̽ ʌGɭɪ̽ ßʌɽ ƞʌɧɪ̽ ƙɑ̽r᩶uƞGɪ̽ ̊͢ɗɘɭɛ̈†ɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID, messageID);
     };





      if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "😌")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†u ʝɣʌƊɑ̽ ɧ❍sɧɪ̽ɣɑ̽ɽ ɱʌ† ßʌƞ ɱɘ ɧʊ͛ ɳʌʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "Sameer") || (event.body.toLowerCase() == "sameer")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßσss ß𝞄⃕𝗌ɣ ӈ❍ɳge ɱ𝞄⃕ʝɧ𝗌ɘ ßʌʌ𝗧 ƙɑ̽r᩶σ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɑ̽ɑ̽ŋ͢ʊ͛ ɱɛ̈ ʂɪ̽r᩶Ғ Sɑ̽ɱɘɘɽ kīī ɧʊ͛ ʂʌɱʝɧɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
   if ((event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😁😁😁")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɣʌ̊͢ɗɑ̽ ɱʌ𝗧 ɧɑ̽n᪵᪳𝗌σ Ꮗɑ̽r᩶ɳʌ ɛ̈ƙ ɱ𝞄⃕ƙƙɛ̈ ɱɛ̈ Ɗʌɳʈ 𝗧❍Ɗ ̊͢ɗʊ͛ɳGʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
   if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "🙏🙏")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝʌ❍ ɱɑ̽f ƙi͠ɣʌ ƴɑ̽ɗ r᩶ɑ̽ƙɧ❍Gɘ †𝞄⃕ɱ ßɧɪ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßʌss ßɑ̽𝗌𝗌 ƙɪ̽†ɳʌ 𝗧ʌr᩶ɛ፝֟͜͡ɛҒ ƙɑ̽ɽσGɘ ɱɘɽɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "🦋") || (event.body.toLowerCase() == "🦋🦋")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†i͠†ɭi͠ 𝞄⃕ƊʌᏇ ƞʌ 𝗌ʌɧɑ̽ß 𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌ ƞʌɱƏ ɧƏ ʌƤƙʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
       return api.sendMessage("💐𝐇𝐄𝐋𝐋9 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐎𝐋𝐎 𝐊𝐀𝐈𝐒𝐄 𝐇𝐎 𝐀𝐏💐", threadID);
     };
     if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ʊ͛ Gʌƞ̊͢ɗʌ †ɘr᩶ɑ̽ Ƥ𝞄⃕ɽɑ̽ ƙɧʌɳɗɑ̽ƞ Gʌɳɗɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "🍁") || (event.body.toLowerCase() == "🍁🍁")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣƏ ɱƏɽi͠ p᩶ɣʌɽi͠ ʝʌʌƞ ʝʌƞƞʌ𝗧 ßʌß𝞄⃕𝆺꯭𝅥𓆩K𝐢̄𝐢 Ғʌv❍ɽi͠𝗧Ə〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
       if ((event.body.toLowerCase() == "sameer Kon ho ap") || (event.body.toLowerCase() == "🤖")) {
       return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
     };
     if ((event.body.toLowerCase() == "moto") || (event.body.toLowerCase() == "🥸")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣƏ Ɗɘƙɧσ ʌɳɛ̈ƙ Ꮗɑ̽ɭɑ̽ 𝆺꯭𝅥𓆩ʝ𝐢̄𝐢n᪵᪳n᪵᪳n᪵᪳〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };






     if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar ja bot") ||(event.body.toLowerCase() == "kill you") || (event.body.toLowerCase() == "mar")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ʊ͛ ɱʌr᩶ʝɑ̽ ʝʌƙɛ̈ ƙɑ̽ɧıı ̊͢ɗɧɑ̽ɽ†ɪ̽ ƙɘ ß❍ʝɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "ib aa")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝ❍ ßσɭɳʌ 𝗌ʌßƙɘ Sɑ̽ɱɳɛ̈ ß❍ɭ †ɧʌɽƙɪ̽ɪ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "inbox aa")) {return api.sendMessage("kab Sai Hoga ye system Har koi inbox 📥 Jana chata 😀🙄🙄 ", threadID);
     };
      if ((event.body.toLowerCase() == "😽")) {return api.sendMessage("💐𝐏𝐄𝐇𝐋𝐄 𝐁𝐑𝐔𝐒𝐇 𝐊𝐀𝐑𝐊𝐄 𝐀𝐀 𝐀𝐉𝐄𝐄𝐁 𝐒𝐈 𝐒𝐌𝐄𝐋𝐋 𝐀𝐀 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈💐", threadID);
     };
              if ((event.body.toLowerCase() == "wow")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ɧʌƞƙ ɣ❍ʊ͛ ʌƤƙσ ßӈıı ß❍†  c̬̽ɧɑ̽ɧi͠ɣɘ †❍ Sʌɱɘɘr᩶ ʂɘ ɱi͠ɭ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂" , threadID);
     };
         if ((event.body.toLowerCase() == "👻")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɛ̈ ̊͢ɗɘkɧ❍ Gɑ̽r᩶ɛ፝֟͜͡ɛßØ ƙʌ ßσ፝֟͜͡†ӈ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
        if ((event.body.toLowerCase() == "😿")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßi͠ɭɭɪ̽ɣʌ ƙɑ̽ßSɘ r᩶❍ɳɛ̈ ɭɑ̽gɪ̽ ʜɑ̽ƊƊ ɧɛ̈ ɣʌʌɽ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
      if ((event.body.toLowerCase() == "😊")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌɽʌFʌ† 𝗌ɛ̈ ɱʊ͛𝗌K𝞄⃕ɽʌ ɽʌɧɛ̈  ɧ❍ ɱɛ̈ɽ𝐢̄𝐢 ʝʌʌƞ 𝞄⃕ɱɱʌɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
                if ((event.body.toLowerCase() == "😯")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱʊ͛ӈ ɱɘ ɱʌƙƙɧi͠  Gӈʊ͛𝗌𝗌 ʝʌɣɘGıı ßʌɳƊ ƙʌɽ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
               };
      if ((event.body.toLowerCase() == "delete")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßɧɘʝʌ Q ʝ❍ ɗɛ̈ɭɛ̈†ɛ̈ ƙʌr᩶ƞɘ ƙ❍ ß❍ɭ ɽɑ̽ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
       if ((event.body.toLowerCase() == "🤫")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɳʌɧıı r᩶ɑ̽ɧʊ͛ɳGıı c̬̽ӈup᩶ ƙʌɱʌ ƙɛ̈ ƙɧııɭɑ̽𝗧ʌ ӈɘ ƙııɣɑ̽ c̬̽ɧσɱu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "🥱")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɳɛ፝֟͜͡ɛn᪵᪳Ɗ ʌr᩶ɑ̽ɧıı ӈɛ̈ †σ 𝗌❍ ʝʌʌ❍ ɳɑ̽ɑ̽ ßɑ̽ßɣ ƙıı𝗌ƙʌ Ꮗɑ̽i͠ʈ ƙʌɽ ɽʌɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
  if ((event.body.toLowerCase() == "👌")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†𝞄⃕ʂʂɪ̽ ʌωɘ𝗌❍ɱɘ ɧ❍ ɱɘɽɪ̽ ʝɑ̽ɑ̽ŋ͢  ʊ͛ɱɱʌɧ ʝʌɳʊ͛〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };




     if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ɑ̽ɽɑ̽ɱ ƙʌɽσ ƙ𝞄⃕c̬̽ɧ ɘʂıı ßʌ𝗧ɛ̈ n᪵᪳ʌ ƙɑ̽ɽσ ɱɘɽıı ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "kis kar")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sʌß ɗɘƙɧ r᩶ʌɧɘ ωʌɽƞʌ ßʌɧ❍† ƙıı𝗌𝗌 ɗɘ†ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "🤭")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘e𝗌ʌ ƙʌʌɱ ɳɑ̽ ƙɑ̽ɽ❍ ʝi͠ıı𝗌 sƏ ɱ𝞄⃕ɧ c̬̽ɧ𝞄⃕pɑ̽ɳʌ Ƥɑ̽̊̊͢ɗƏ ßɑ̽ßɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
       if ((event.body.toLowerCase() == "👊")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝐄𝐤 𝐌𝐮𝐊𝐊𝟑 𝐌𝐞 𝐒𝐚𝐑𝐞 𝐃𝐚𝐍𝐭 𝐭𝐎𝐃 𝐃𝐮𝐧𝐆𝐚〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
        };
    if ((event.body.toLowerCase() == "🤤")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙııɣɑ̽ ɧuʌʌ ʈ𝞄⃕ʝɧɛ̈ ʈɧʌɽƙıı ɣɑ̽ɧɑ̽ ɭʌɽ ɳɑ̽ ʈɑ̽pƙɑ̽ Ƥɑ̽gɑ̽ɭ ɪ̽ɳ𝗌ɑ̽n᪵᪳ɛ̈〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };



     if ((event.body.toLowerCase() == "logos") || (event.body.toLowerCase() == "logo")) {
       return api.sendMessage("Logos ! 🥀 GALAXY, CAKE, CRACK, GLITCH, CLOUD, DRAGON, FROZEN, BUSINESS, ANIMATE, LOGODIAMOND, LOGOCAPTAIN, LOGOFISH, LOGOCOLORBLUR, LOGOBLOODTEXT, LOGOWOOD, LOGOCUP          🥀for example -> +crack Sameer Khan", threadID);
     };

     if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘G❍❍Ɗ ƞııG† ƊʌɽɭııɳG Sωɘɘ† Ɗɽɘʌɱ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID, messageID);
     };
     if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "tharki")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†𝞄⃕ɱ ʈɧrƙɪ̽ ɱɛ̈ ʈ❍ ɱʌ𝗌uɱ 𝗌ɑ̽ ßσ† ӈu ɳʌʌ ßɑ̽ßuu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "السلام عليكم ورحمة الله وبركاته") || (event.body.toLowerCase() == "السلام عليكم")) {
       return api.sendMessage("وعلیکم السلام ورحمۃ اللہ وبرکاتہ ", threadID);
     };

     if
  ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘G❍❍Ɗ ɱ❍ɽƞııɳG G❍Ɗ ßɭɘ𝗌𝗌 ɣ❍ʊ͛ ʝʌʌɳʊ͛〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "Koi he") || (event.body.toLowerCase() == "Koi he kiya")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘ ӈʊ͛ ƞʌʌ ʝʌɳɘɱʌɳɳ ß❍ɭ❍ †ʌʌ ɧ𝞄⃕ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "meri setting kahan hai") || (event.body.toLowerCase() == "meri gf kaha hai")) {     return api.sendMessage("️️️mujhy nahi pata me Sameer ki setting hu", threadID);
     };

     if ((event.body.toLowerCase() == "💫") || (event.body.toLowerCase() == "👺") || (event.body.toLowerCase() == "👽") || (event.body.toLowerCase() == "🌚")) {
       return api.sendMessage( "꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɘ ƙi͠ɣʌ †ʌɱʌ𝗌ɧʌ ßɧɘʝ ɽʌɧʌ ƤʌʌGɑ̽ɭ i͠ɳ𝗌ʌɳɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂",threadID);


     };

     if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "bot ka malik")) {
       return api.sendMessage("༻𝐎𝐖𝐍𝐄𝐑:- ⇥♡☞ ༻☞[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐡𝐚𝐧🎸  ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐒𝐚𝐦𝐢. ☜ ༺༒ ༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- https://www.facebook.com/𝐌𝐑.𝐒𝐀𝐌𝐢 𝟒𝟐𝟎☞    his insta id @SAMEER𝟒𝟐𝟎 ☜ ༺༒ ༒", threadID);
     };

     if ((event.body.toLowerCase() == "tera Malik kon hai") || (event.body.toLowerCase() == "is bot ka malik kon hai")) {
       return api.sendMessage("Sameer Khan 𝐔𝐫𝐟 Sam   ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
     };

    if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🖤🖤")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɘ𝗌e †u Ꮗɘ𝗌ɘ ɣɘ †ɘɽʌ Ɗi͠ɭ ƙʌɭʌ c̬̽ɧʌɭʌ ʝʌ ƙɑ̽ɭi͠ɣɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈʌƞ G ɱɘɽɪ̽ ɳʌʂ❍ ɱɘ ßɘɧ†ʌ ɧ𝞄⃕ʌ ƙɧ𝞄⃕ɳ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
     if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɛ፝֟͜͡ɛ ʌɭɛ፝֟͜͡ɛ ʌc̬̽ɧɛ̈ ßɒc̬̽ӈɛ̈ r᩶❍†ɛ̈ n᪵ɑ̽ɧɪ̽ Kɪ̽ɣʌ c̬̽ɧɑ̽ɧi͠ɣɘ ɭ❍ɭɪ̽Ƥɵ̥̽p᩶〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };


    if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {;
      return api.sendMessage("️️️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßɣɛ̈ ßɣɛ̈ ʈɑ̽ƙɛ̈ c̬̽ʌɽɛ̈ 𝗌ɛ̈ɛ̈ ɣσu 𝗌σ፝֟͜͡oƞ  ɱıı𝗌𝗌 ɣØu ßɑ̽ßu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge")) {
       return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur he to bato me tayar hu🙊🙊🙈", threadID);
     };

     if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɳʌɧıı r᩶ɑ̽ɧuɳGıı c̬̽ӈup᩶ ƙʌɱʌ ƙɛ̈ ƙɧııɭɑ̽𝗧ʌ ӈɘ ƙııɣɑ̽ c̬̽ɧσɱu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ʊ͛ ɧɘ ß†S c̬̽ɧʌɭɑ̽ ʝʌ ßɧ❍𝗌Ɗi͠ƙɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };


     if ((event.body.toLowerCase() == "kuttiya") || (event.body.toLowerCase() == "kutta")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sʌɱɘ †❍ ɣ❍u Ɗ𝞄⃕ɽr fʌ††ɣ ɱ𝞄⃕ɧ †ɘɽɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
       return api.sendMessage("sorry malik maaf kr do ab nhi krugi S𝐀𝐌𝐄𝐄𝐑 please maaf karo na🥺🙏", threadID);
     };

     if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɣʌƊʌ ƙɧ𝞄⃕ʝɭɪ̽ ɧɘ †❍ ɱɘɽʌ ƙɘɭʌ ʌƞƊʌɽ ɭɘɭ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "bot kiss me") || (event.body.toLowerCase() == "kiss me")) {
       return api.sendMessage("️Kis khushi me, Me sirf Apne Boss 𝐒𝐀𝐌𝐄𝐄𝐑 ko kiss karna chahti hu", threadID);
     };

     if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "Very nice") || (event.body.toLowerCase() == "So cute") || (event.body.toLowerCase() == "Beautiful")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘ ӈu ɧıı ɪ̽†n᪵᪳ʌ ʌc̬̽ɧɑ̽ 𝗌ɑ̽ß ɭσg †ɑ̽ɽɛ̈ɛ̈Ғ ƙʌɽ†ɘ ӈɘ ɱɘɽɪ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "😈")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌʌ ɣɑ̽ɽ ʝɑ̽ß Ɗɘƙɧ❍ Guʂʂɑ̽ ƙʌr᩶†ɘ ɧo ɛ̈ƙ ƙıı𝗌𝗌ıı ɭσ σr᩶ 𝗌ɧɑ̽ɳ† ɽʌɧ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😿") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɘ ʌɭɘ ʌc̬̽ɧɘ ßɑ̽c̬̽ɧɘ ɽ❍†ɘ ƞʌɧi͠ ƙi͠ɣʌ c̬̽ɧʌɧi͠ɣɘ Ɗ𝞄⃕Ɗɧu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
       return api.sendMessage("️️️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈɱɱ ӈɱɱ ɳʌ ƙɒɽ❍ 𝗌ɛ̈ɛ̈ɗɧɑ̽ ßσɭσ ӈɘɣ ɱɑ̽r᩶r᩶ɣ ɱɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == ".") || (event.body.toLowerCase() == "..")) {     return api.sendMessage("️️️💐𝐀𝐋𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐓𝐎 𝐒𝐀𝐇𝐈 𝐒𝐄 𝐋𝐈𝐊𝐇𝐎 𝐀𝐆𝐀𝐑 𝐍𝐀𝐇𝐈 𝐏𝐓𝐀 𝐓𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎SS 𝐒𝐀𝐌𝐄𝐄𝐑 S𝐄 𝐏𝐔𝐂𝐇 𝐋𝐎💐", threadID);
     };

    if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "love you")) {     return api.sendMessage("️️️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɪ̽ ɭ❍vɛ̈ ɣσu †σ ɱɣ ɭØvɘ uɱɱɑ̽ɧ ɱɛ̈ɽɪ̽ ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "i miss you") || (event.body.toLowerCase() == "miss you")) {     return api.sendMessage("️️️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ıı ɱɪ̽ɪ̽ʂʂ ɣσ፝֟͜͡ʊ͛ †σ ɱɣ ɭσvɛ̈ ʊ͛ɱɱʌʌɧ ßɑ̽ßɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "i miss you bot") || (event.body.toLowerCase() == "miss u")) {     return api.sendMessage("️️️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ıı ɱɪ̽ɪ̽ʂʂ ɣσ፝֟͜͡ʊ͛ †σ ɱɣ ɭσvɛ̈ ʊ͛ɱɱʌʌɧ ßɑ̽ßɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "💚")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar_🌿_liya___🌿___mujhse____🌿🌹❣️__________________?🥰🥰😍 ", threadID);
     };

    if ((event.body.toLowerCase() == "🙄")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʊ͛p᩶ɑ̽ɽ ɳɑ̽ɧi͠ ɳɘɘc̬̽ɧɘ ̊͢ɗɘƙɧ 𝗌ʌɱɳɘ ɧu ɱɘɽi͠ ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "🥳")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘❍σ †ɘɽɪ̽ ƙɪ̽𝗌ƙʌ ßɪ̽ɽ†ɧƊʌɣ ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };


    if ((event.body.toLowerCase() == "😏")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧʌɭɭ ɧʌʈʈ ɱɛ̈r᩶ɛ̈ ɱʌ†† i͠†ɽɑ̽ ɣɘ †ɘ̊͢ɗɧʌʌ ɱʊ͛ӈ ɭɛ̈ƙʌr᩶〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😤")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɘ ß𝞄⃕ɭɭ ʝɘ𝗌ʌ ɱ𝞄⃕ɧ ƞʌ ßʌɳʌ c̬̽ɧ❍ɱʊ͛〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "☺️")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌɽʌFʌ† 𝗌ɛ̈ ɱʊ͛𝗌K𝞄⃕ɽʌ ɽʌɧɛ̈  ɧ❍ ɱɛ̈ɽ𝐢̄𝐢 ʝʌʌƞ 𝞄⃕ɱɱʌɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😂")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɣʌ̊͢ɗɑ̽ ɱʌ† ɧɑ̽n᪵᪳𝗌σ Ꮗɑ̽r᩶ɳʌ ɛ̈ƙ ɱ𝞄⃕ƙƙɛ̈ ɱɛ̈ Ɗʌɳʈ 𝗧❍Ɗ ̊͢ɗuɳGʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😂😂")) {return api.sendMessage("【＿ 𝐉𝐲𝐀𝐝𝐀 𝐌𝐚𝐓 𝐇𝐚𝐍𝐬𝐎 𝐕𝐚𝐑𝐧𝐀 𝐃𝐚𝐍𝐭 𝐓𝐨𝐃 𝐃𝐮𝐍𝐠𝐀 ＿】", threadID);
     };
    if ((event.body.toLowerCase() == "😉")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɳƙɧ n᪵᪳ɑ̽ ɱɑ̽r᩶ ɱɛ̈ ɳɑ̽n᪵᪳ɧɑ̽ 𝗌ɑ̽ Ƥɣɑ̽r᩶ɑ̽ 𝗌ɑ̽ ßσ𝗧 ӈu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😎😎😎")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧɑ̽𝗌ɱɑ̽ ɧɑ̽ʈɑ̽σ n᪵᪳ɑ̽ 𝗌ɑ̽ɧɑ̽ß ƙɪ̽ɣɑ̽ n᪵᪳ɑ̽ɱɛ̈ ɧɛ̈ ɑ̽p᩶ƙɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😜😜")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Gʌɳ̊͢ɗɣ ɪ̽𝗌ɧɑ̽ɽɘ ɳɑ̽ ƙʌr᩶o 𝗌ʌɱɘɘɽ ßɑ̽ßu ƙσ ßʌʈ̊ɑ̽ Ɗ𝞄⃕ɳGɪ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "❤️❤️")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɚ Ɗi͠ɭ ŋ͢ɒ ßӈɛ̈ʝɑ̽ kɑ̽r᩶ɵ̥̽ ɣɑ̽ɽ ɱʊ͛ʝɧɛ̈ Sɑ̽r᩶ɑ̽ɱ ʌ†ɪ̽ ɣɑ̽r᩶〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🙄🙄🙄")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʊ͛p᩶ɑ̽ɽ ɳɑ̽ɧi͠ ɳɘɘc̬̽ɧɘ ̊͢ɗɘƙɧ 𝗌ʌɱɳɘ ɧu ɱɘɽi͠ ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "💙")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar_🌿_liya___🌿___mujhse____🌿🌹❣️__________________?🥰🥰😍 ", threadID);
     };

  if ((event.body.toLowerCase() == "😍😍😍")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌn᪵᪳Kɧ❍ ɱƏ p᩶ɣʌr᩶ ̊͢ɗııɭ ɱƏ Kʜ𝞄⃕ɱʌr᩶ p᩶ɣɑɑr᩶ †๏ ŋ͢ɑ̽ӈɪ̽ Kɑ̽r᩶ ɭi͠ɣɑ̽ ɱ𝞄⃕ʝɧ𝗌Ə〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "❤️")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘƙ❍ ƙʌɭʌ Ɗi͠ɭ c̬̽ɧʌɧi͠ɣɘ ɭʌɭ Ɗi͠ɭ †❍❍† ʝʌ†ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "🥰🥰🥰🥰")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝐄𝐒𝟑 𝐌𝐚𝐓 𝐃𝐞𝐤𝐡𝐎 𝐘𝐚𝐑 𝐧𝐀𝐡𝐢 𝐓𝐨 𝐊𝐢𝐒𝐬 𝐊𝐚𝐑 𝐋𝐔𝐧𝐆𝐀〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "😍😍")) {return api.sendMessage("i͠𝗌𝗌 ɳʌʝʌr᩶ 𝗌Ə ɱɛ̈ɽɛ̈ σ፝֟͜͡Ꮗɳɘɽ 𝗌ʌɱɛ፝֟͜͡ɛr᩶ ƙ❍ ƊƏƙɧσ ɱʌʝʌ ʌɣƏGʌ", threadID);
     };

  if ((event.body.toLowerCase() == "😎😎")) {return api.sendMessage("c̬̽ɧɑ̽𝗌ɱɑ̽ ɧɑ̽ʈɑ̽σ n᪵᪳ɑ̽ 𝗌ɑ̽ɧɑ̽ß ƙɪ̽ɣɑ̽ n᪵᪳ɑ̽ɱɛ̈ ɧɛ̈ ɑ̽p᩶ƙɑ̽", threadID);
     };

  if ((event.body.toLowerCase() == "😇")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Gɧʌɽ Ꮗɑ̽ɭɵ̥̽ ɳɛ̈ r᩶❍†ɪ̽ ɳɒӈi͠ ̊͢ɗʌɭi͠ ʈʊ͛ʝӈɘ ɑ̽ɑ̽ʝ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🧐🧐")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙııɣʌʌ Ɗɘƙɧ ɽɑ̽ɧɑ̽ ӈɘ p᩶ɑ̽p᩶ɑ̽ ƙɪ̽ ßɑ̽r᩶ɑ̽† ʌr᩶ɑ̽ɧıı ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🥰🥰🥰")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌn᪵᪳Kɧ❍ ɱƏ p᩶ɣʌr᩶ ̊͢ɗııɭ ɱƏ Kʜ𝞄⃕ɱʌr᩶ p᩶ɣɑɑr᩶ †๏ ŋ͢ɑ̽ӈɪ̽ Kɑ̽r᩶ ɭi͠ɣɑ̽ ɱ𝞄⃕ʝɧ𝗌Ə〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "🥵")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙ𝞄⃕††ɘ Ƥɘɘc̬̽ɧɘ ƤʌƊ Gʌɣɘ ƙııɣʌ ɱɘɽɪ̽ ʝʌʌɳ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "😍")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌn᪵᪳Kɧ❍ ɱƏ p᩶ɣʌr᩶ ̊͢ɗııɭ ɱƏ Kʜ𝞄⃕ɱʌr᩶ p᩶ɣɑɑr᩶ †๏ ŋ͢ɑ̽ӈɪ̽ Kɑ̽r᩶ ɭi͠ɣɑ̽ ɱ𝞄⃕ʝɧ𝗌Ə〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "😎")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧʌ𝗌ɱʌ ɧɑ̽ʈɑ̽σ n᪵᪳ɑ̽ 𝗌ʌɧʌß ƙi͠ɣʌ n᪵᪳ʌɱɛ̈ ɧɛ̈ ʌp᩶ƙɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "😋")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱƏɽɪ̽ ƙi͠𝗌𝗌 ɣuɱɱɣ ɧƏ ɳɑ̽ ɱ𝞄⃕ɳɳıı ßʌƊn᪵᪳ɑ̽ɱ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🧐")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ʊ͛ ӈɑ̽†† ɱƏ Ɗɘƙɧ†ʌ ɧu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🥰🥰")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌn᪵᪳Kɧ❍ ɱƏ p᩶ɣʌr᩶ ̊͢ɗııɭ ɱƏ Kʜ𝞄⃕ɱʌr᩶ p᩶ɣɑɑr᩶ †๏ ŋ͢ɑ̽ӈɪ̽ Kɑ̽r᩶ ɭi͠ɣɑ̽ ɱ𝞄⃕ʝɧ𝗌Ə〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😁")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɪ̽ƞƞɪ̽ ɧʌ𝗌𝗌ɪ̽ Q ʌr᩶ʌɧɪ ӈɘ ɪ̽𝗌𝗌 ɧʌ𝗌ɪ̽ ƙɘ Ƥɘɘc̬̽ɧɘ ɽʌʌʝ ƙi͠ɣʌ ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "🫣")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌr᩶ɱʌʌσ ɱɑ̽† ɑ̽p᩶ɳɑ̽ ɧıı Gɧɑ̽ɽ 𝗌ɑ̽ɱʝɧ❍ ɱɘɽi͠ ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "✍️")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßʌS𝗌 ßʌ𝗌 †𝞄⃕ɱ𝗌ɘ ɳʌ ɧ❍ Ƥʌɣɘgɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🙂")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈʌʌɣɛ̈ r᩶ʌßßɑ̽  i͠†ɳʌ p᩶ɣʌʌr᩶ ƙʌr᩶†ɛ̈ ɧØ ßʌßu ʊ͛ɱɱʌɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🤣")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌƙɑ̽ɭ ʌc̬̽ɧıı ɳʌɧi͠ ɧɑ̽ʂʂ †σ 𝗌ɛ፝֟͜͡ɛ̊͢ɗɧʌ ɭi͠ɣʌ ƙɑ̽r᩶ ɱɛ̈r᩶ıı ʝʌʌn᪵᪳〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "🙁")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɑ̽ɭɛ፝֟͜͡ɛ ʌɭɛ፝֟͜͡ɛ ʌc̬̽ɧɛ̈ ßɒc̬̽ӈɛ̈ r᩶❍†ɛ̈ n᪵᪳ɑ̽ɧɪ̽ Kɪ̽ɣʌ cɧɑ̽ɧi͠ɣɘ Ɗӈʊ͛̊͢ɗu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
       return api.sendMessage("️【＿ 𝐊𝐲𝐀 𝐇𝐲𝐀 𝐓𝐚𝐁𝐢𝐘𝐚𝐓 𝐊𝐡𝐀𝐫𝐀𝐛 𝐇𝐚𝐈 𝐊𝐲𝐀 𝐌𝐮𝐉𝐡𝐄 𝐁𝐚𝐓𝐚𝐎 𝐌𝐞 𝐀𝐛𝐇𝐢 𝐌𝐞𝐃𝐢𝐂𝐢𝐍𝐞 💊💉 𝐋𝐞 𝐀𝐚𝐓𝐚 𝐇𝐮 😇 ＿】", threadID);
     };

     if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƞʌɱɘ ɱɘ ƙɪ̽ɣʌ ɽʌƙɧʌ †𝞄⃕ɱ ƙʌɱ Ƥɘ ɗɧi͠ɣʌɳ ɗ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "Bot ke bache") || (event.body.toLowerCase() == "Bot ka bacha")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘɽʌ ßʌc̬̽ɧʌ †❍ †𝞄⃕ɱɧʌɽɘ Ƥɘ† ɱɘ ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "Pic do") || (event.body.toLowerCase() == "photo do")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘ †❍ ʌɳƊɧʌ ɧʊ͛ ɗɘƙɧ ƞʌɧɪ̽ 𝗌ʌƙ†ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...", threadID);
     };

     if ((event.body.toLowerCase() == "assalam o alaikum") || (event.body.toLowerCase() == "assalam u walaikum") || (event.body.toLowerCase() == "salaam")) {
      return api.sendMessage("️ walaikum assalam 🙃♥", threadID);
     };

     if ((event.body.toLowerCase() == "Ib aa") || (event.body.toLowerCase() == "Inbox aa")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝ❍ ß❍ɭɳʌ ɧɘ ɣʌɧɪ̽ ß❍ɭ i͠ß ƙ❍ɪ̽ ɳʌɧɪ̽ ʝʌɣɘGʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
       return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
     };

     if ((event.body.toLowerCase() == "🙃🙃") || (event.body.toLowerCase() == "🙃")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈʌʌɣɛ̈ r᩶ʌßßɑ̽  i͠†ɳʌ p᩶ɣʌʌr᩶ ƙʌr᩶†ɛ̈ ɧØ ßʌßu ʊ͛ɱɱʌɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
       return api.sendMessage("️aree teri to naak hi etni lambi hai... uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
     };

    if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘i͠†ƞʌ ƙɪ̽ɣʌ 𝗌❍c̬̽ɧ ɽʌɧɘ ɱɘɽıı ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "💋")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌßɘ ɣʌɭɭ ɣɘ ƙıı𝗌𝗌ɪ̽ɪ̽ ωi͠𝗌𝗌ɪ̽ ɳʌ ƙʌɽ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "💋💋")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌßɘ ɣʌɭɭ ɣɘ ƙıı𝗌𝗌ɪ̽ɪ̽ ωi͠𝗌𝗌ɪ̽ ɳʌ ƙʌɽ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
  if ((event.body.toLowerCase() == "🤪")) {return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
     };

  if ((event.body.toLowerCase() == "🤪🤪")) {return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
     };

  if ((event.body.toLowerCase() == "🤩")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙʌɳɪ̽ɣʌ ɧɘ ƙɪ̽ɣʌ ʝ❍ ɗɪ̽ɳ ɱɘ †ʌɽɘ ɳʌʝʌɽ ʌɽɑ̽ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
    };

  if ((event.body.toLowerCase() == "😘")) {return api.sendMessage("𝚂𝙷𝙰𝚁𝙼 𝙺𝚁𝙻𝙾 𝚈𝙴 𝙲𝙷𝚄𝙼𝙼𝙰 𝙲𝙷𝙰𝚃𝙸 𝙲𝙷𝙾𝚁𝙾 𝙿𝙰𝙳𝙷𝙰𝙸 𝙿𝙴 𝙳𝙷𝙸𝚈𝙰𝙽 𝙳𝙾😒 ", threadID);
    };

  if ((event.body.toLowerCase() == "😛")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɘɘßɧ Q ɭʌ†ʌƙ Gʌɣɪ̽ ʌʝɑ̽❍ Ƥʌɳɪ̽ Ƥɘɘɭ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "💝")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar___🌿___Liya___🌿___mujhse____🌿🌹❣️__________________?🥰❤️ ", threadID);
     };

    if ((event.body.toLowerCase() == "🙈🙈")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sɑ̽c̬̽ɧ ɱɛ̈ ßɒɳ̊͢ɗɒɽ ɧi͠  ɧɚ ɱʊ͛ʝɧɛ̈ ʌʝ Ƥʌ†ɑ̽ c̬̽ɧɑ̽ɭɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🐒")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sɑ̽c̬̽ɧ ɱɛ̈ ßɒɳ̊͢ɗɒɽ ɧi͠  ɧɚ ɱʊ͛ʝɧɛ̈ ʌʝ Ƥʌ†ɑ̽ c̬̽ɧɑ̽ɭɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🙉🙉")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sɑ̽c̬̽ɧ ɱɛ̈ ßɒɳ̊͢ɗɒɽ ɧi͠  ɧɚ ɱʊ͛ʝɧɛ̈ ʌʝ Ƥʌ†ɑ̽ c̬̽ɧɑ̽ɭɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🙊")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sɑ̽c̬̽ɧ ɱɛ̈ ßɒɳ̊͢ɗɒɽ ɧi͠  ɧɚ ɱʊ͛ʝɧɛ̈ ʌʝ Ƥʌ†ɑ̽ c̬̽ɧɑ̽ɭɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🙉")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sɑ̽c̬̽ɧ ɱɛ̈ ßɒɳ̊͢ɗɒɽ ɧi͠  ɧɚ ɱʊ͛ʝɧɛ̈ ʌʝ Ƥʌ†ɑ̽ c̬̽ɧɑ̽ɭɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "🙈")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†𝞄⃕ɱ𝗌ɘ ʌc̬̽ɧʌ †❍ ɣɘ ßɒƞ̊͢ɗʌɽ 𝗌ɧʌɽɱʌ ɭɘ†ɘ ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "🔥")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝐊𝐚𝐡𝐚 𝐀𝐆 𝐋𝐚𝐆𝐚𝐊𝐞 𝐀𝐘𝐚 𝐇𝟑 𝐏𝐚𝐆𝐚𝐋 𝐈𝐧𝐒𝐚𝐧𝐞〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

  if ((event.body.toLowerCase() == "😄")) {
       return api.sendMessage("ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ🧐😒💯💫", threadID);
     };
  if ((event.body.toLowerCase() == "🤐")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱ𝞄⃕ɧ ßʌɳɗ Q ƙɑ̽ɽ ɭi͠ɣʌ ßʌß𝞄⃕ɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌßɘ ɳɑ̽𝗌ɧɘɗɧɪ̽ ƙ❍ɳ𝗌ʌ Gɑ̽ƞʝʌ F𝞄⃕ɳƙ ɭɪ̽ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱ𝞄⃕ɧ †❍ †ɧɑ̽ ƞɑ̽ɧɪ̽ ɭɪ̽Ƥ𝗌 ßɧɪ̽ Gʌɣɑ̽ß ɧ❍ Gɑ̽ɣɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
       return api.sendMessage("ʌɳƙɧ n᪵᪳ɑ̽ ɱɑ̽r᩶ ɱɛ̈ ɳɑ̽n᪵᪳ɧɑ̽ 𝗌ɑ̽ Ƥɣɑ̽r᩶ɑ̽ 𝗌ɑ̽ ßσ𝗧 ӈu", threadID);
     };

     if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
       return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙııɣʌʌ ɧuɑ̽ɑ̽ ʂɧııʂɧʌʌ Ɗɛ̈ƙɧ ɭııɣʌ ƙɪ̽ɣɑ̽ ßʌß𝞄⃕ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😲")) {
       return api.sendMessage("️️💐𝐏𝐄𝐇𝐋𝐄 𝐁𝐑𝐔𝐒𝐇 𝐊𝐀𝐑𝐊𝐄 𝐀𝐀 𝐀𝐉𝐄𝐄𝐁 𝐒𝐈 𝐒𝐌𝐄𝐋𝐋 𝐀𝐀 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈💐", threadID);
     };

     if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
       return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
     };

     if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɽɘ ʌƤɳɘ ɱ𝞄⃕ɧ Ƥɘ Q ɱʌɽ ɽɑ̽ɧɘ Ƥʌgʌɭ ɪ̽ɳ𝗌ʌɳɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
       return api.sendMessage("ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ🧐😒💯💫", threadID);
     };

     if ((event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "❣️") || (event.body.toLowerCase() == "💘")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɛ̈ ̊͢ɗɪ̽ɭ ɱɑ̽† ßɧɛ̈ʝɵ̥̽ ßɑ̽ßʊ͛ ƙʊ͛c̬̽ɧ ƙ𝞄⃕c̬̽ӈ ӈɵ̥̽†ʌ ɧɛ̈ɛ̈〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘ eƙɗʌɱ ƙʌɗɑ̽ƙ ɧu ʌƤ ßʌ†ʌ❍ ƞɑ̽ ƙɘ𝗌ɘ ɧ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
       return api.sendMessage("Yes I love you and everyone so much", threadID);
     };

     if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
       return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
     };

    if ((event.body.toLowerCase() == "Paani lao") || (event.body.toLowerCase() == "Ek glass paani lao")) {
       return api.sendMessage("Aap juice piyo baby🍹🍹🍹🍹🍹🙈", threadID);
     };

     if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
       return api.sendMessage("I'm full when I see you eat <3", threadID);
     };

    if ((event.body.toLowerCase() == "i love you bot") || (event.body.toLowerCase() == "ilove you")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɪ̽ ɭ❍vɛ̈ ɣσu †σ ɱɣ ɭØvɘ uɱɱɑ̽ɧ ɱɛ̈ɽɪ̽ ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

     if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
       return api.sendMessage("Yes <3", threadID);
     };

     if ((event.body.toLowerCase() == "🌹") || (event.body.toLowerCase() == "🥀")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘हाय मेरी बेबी ने मुझे रोज दिया उम्माह〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };

    if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "main romiyo") || (event.body.toLowerCase() == "main saho") || (event.body.toLowerCase() == "main rounak")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗧ɛ̈ɽi͠  𝗧❍Fıı ɭɛ̈ɭi͠  𝆺꯭𝅥𓆩K𝐢̄𝐢𝗌ıƞɛ̈ ʝ❍ ʌıı𝗌ʌ ɱ𝞄⃕ɧ ßʌƞʌ ɭi͠ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
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
          ${rand} 🎻♡💋⪼🤣🍁❤

𐄪༆🦋ﮩ٨ـﮩﮩ٨ـ😻♡🌿ﮩ٨ـﮩﮩ٨ـ🦋༆𐄪,
                                        
 *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝❦ ════ •⊰𝐒𝐀𝐌𝐄𝐄𝐑⊱• ════ ❦🍀🍒 ❥||ㅎ

𐄪༆🦋ﮩ٨ـﮩﮩ٨ـ😻♡🌿ﮩ٨ـﮩﮩ٨ـ🦋༆𐄪`
  }
  return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
