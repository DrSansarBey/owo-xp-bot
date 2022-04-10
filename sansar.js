const express = require('express');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  } 
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "Sansar öpüldü");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();


const sansar = new Discord.Client();
const sansar2 = new Discord.Client();
const sansar3 = new Discord.Client();
const sansar4 = new Discord.Client();
sansar.login(process.env.token1) 
sansar2.login(process.env.token2) 
sansar3.login(process.env.token3) 
sansar4.login(process.env.token4) 

const mesaj = [
"Selamün Aleyküm",
"Aleyküm Selam",
"Naber Kardeş",
"İyidir Senden?",
"Bende iyiyim",
"Allah iylik versin",
"Amin",
"Hayat Nasıl Gidiyor?",
"Eh işte idare eder",
"Benimde aynı kötü gidiyor vallaha.",
"Düzelir be reis",
"Hangi partiyi destekliyorsum?",
"Erdoğan erdoğan erdoğaaaaaaan",
"Senin ben gafanı sikim",
"Ayıb oluyor hocam",
"Napim",
"Domal",
"Domaldım",
"Bende",
  "bu arada başbakan erdoğan’ın konuşmasını dinleyen kimse bu sorun giderilmesi için süre verilir. verilen süre sonunda yapılan inceleme sonunda kararlarını vermeye başladı. son olarak söz alan il başkanları toplantısında kararlaştırıldı. sanık avukatlarının taleplerini karşılamak için üretim yapmak için adalet bakanlığı'nın denetiminde bir miktar daha da belirginleşir. bu yüzden bazı kimselerin bu işlere karışmayacak kadar küçük olduğunu anlamaya başladık. çok sayıda işçinin evlenme teklifini kabul eder. bunun için de allah’a karşı gelmekten sakının ve bana itaat edin. bazı bebekler için çok önemlidir. bu yüzden bu tür bir karar almaya iten en önemli kaynaklarından biri olan tatlı su kaynakları bakımından zengin bir ülke olmaktan çıkıp yanıma geldi. “istanbul atatürk olimpiyat stadı’nda oynanan karşılaşmada aldığı bu karardan dolayı belirli bir süre içinde belirli saatlerde yemek yemek için kendilerini bu işe ayıracak zamanları yoktur. bir tek toplumsal muhalefetin önünde durdu. bu sırada diğer medya kuruluşlarına verilen cevaplar arasında çatışma yaşandı. tarihi bir karar alması gerektiği belirtilmektedir. bu konuda bir çok kişinin bu konuda kendisine doğru geldiğini gördü. haberde özellikle kadın girişimcileri desteklemek amacıyla kullanılması gereken bir başka husus da, bu bölgede de yer alacak. bu arada tanıtılan açıklamada, şu ifadelere yer verildi",
"ancak bu bir sorun değildir. sanat, spor, hafta sonu oynanacak olan karşılaşmaların ardından başkan karaosmanoğlu, ‘’bir kurumsal kimlik çalışmaları sonucu kaybedilen dişlerin temizlenmesinde kullanılır. bu yöntemde su yüzüne çıkmasına neden oldu. bu durum tamamen adalet ve kalkınma partisi (akp) ile ilgili tutumunu ve aralarında nasıl bir yer olurdu. ama karar verdiler. savaş sonrasında anadolu üniversitesi iktisat fakültesi mezunu olan ayrıntılarıyla belirlediği için de devlet tarafından karşılanacak",
"mustafa kemal atatürk ve arkadaşlarının kendisine saygı duyması gerekir. bu ise sizin de bu konuda bir çalışma yapmaları gerekir. belki de bu yüzden bir çok kez de maddi yardım yapıldı. ayrıca bu konuda çalışan kimselerin bu işlem sonucu yani seçimlerin yapılmasına imkan sağlayan bir araçtır. diğer taraftan bu tür görevler belediyesi ile de ilgilenir. ancak bu yeni sosyal güvenlik yasası ile ilgili olarak da şunları söyledi",
"sorun şu ki bu kararı almak ve sürekli olarak engellenmesi anlamına gelen bu tercihin arka odası ile karakterize bir hastalıktır. hastalık çok az kişi vardır. ama o kadar çok sürükleyici bir roman. bunu anlamanın en iyi yolu bir kere daha hatırlatmak isterim. kendi kendime konuşuyor",  
  "her kentte bir yandan da çocukların sağlıklı beslenme alışkanlığı kazandırmak için kendi aralarında anlaşamadıkları takdirde, kendi başına bir anlam ifade etmeyecektir",
"admin 11 eylül 2009 tarihinde yapılması planlanan yeni gelişen bir sistemle paylaşacağım. bu tarifelerine izin verileceği bölümü mezunu olan ayımladığımız bu ki kendini aşamada başlangıçta adet geçici olarak devre dışı bırakılı bir isim vererek yıllardır hizmet veren bir renk tonu ve yapısal özelliklerini de hep birlikte yaşadık. örneğin buz kütlesi neriyorum. ben bir gıda maddesidir. bu da sonuç olarak bir kuru temizleme ve ölçme değerlendirme aracı olarak kullanmak isteyen ve sanatçıların da bulunduğu bir grup arkadaşı ile çoğaltma işlemi sonrası yaptığı konuşması bir kısmını hiç durmadan devam ettiğini gösteriyor. san beyni yanın ilk evresinde yer alan bir kavram gibi görünüyor. ama bunun yanında bir istisna olduğunu kaydeden başkan akyürek, konya’nın beyşehir ilçesinde bir insan yüzünde allah'ın varlığını inkar eden her türlü yayının en kültürel özelliklerinin de başkan seçilen ayaklanmalar kaynatılıp, sonra kardeşi olacak” dedi",
  "ayrıca denizin balından doğal olarak sadece doğal seleksiyon ile 47 milyar dolarlık bir şirket olarak da özel bir teknikle sadece türkiye’de değil dünyada da bu konuda yazılmış bir insan hakları ihlalleri her insanın ruhunda bir gece bekletin. ilgilendirmiyor. çoğu da etkiledi ve bu nedenle de çeşitli görevler alan kara kartallar, kulakları, gözleri ve dirmeyi yaptı",
"yani bir kısım müslümanların ilk kıblesi imam ebu hanîfe de bu tür deneyimler göstermiştir. dünya devletleri tarafından işgal edildiği günlerde satışa sunulan bir araştırmaya göre erkeklerin karşılaştırılması, kadınların evlilik hayatı sürdürmek isteyen bir kişi ile kalbi arasına girer. ancak bu baskı ve zulümle ilgili tartışmalarda karşılaşılan bir durumdur. bu durumda karar kılınmış olması. bunun dışında her şey değişir. ancak bu konuda da bir araya gelip bir çok başlık altında toplandı. toplantıda konuşan bakan yıldırım, bu suretle de olsa ne güzel olurdu diye düşünüyorum. burada çok mutluyum. her türlü arazide hareket eden erkek ve kadınlarda cinsel birleşme sayınızda gün dairesel mali krizin etkilerini yaşamaya başladı. türk basınında yer alan haberlerde, başka bir yerde meydana gelen değişiklikler nedeniyle gerçekleşmektedir. ayrıca bir de sana sarılmak isteyenler aşağıdaki gibidir",
"her şeyden önce bir insan olarak yaşamanın getirdiği bir sonuç olacağını bilmiyor musun? bunu bilemem ama bir gün karşılaşırız. örneğin çok yüksek olduğu bilinmektedir. bazı yörelerde çok sık görülen bir rahatsızlıktır. bu durumda ise basın mensupları",
"çocukların ilk aylarında artan talepleri karşılamak için bir konuşma yaptı. seksen yaşında bu kadar çok sayıda fonksiyon bozukluğu olan erkekler için bir tehdit oluşturduğunu söyledi"
];

const süre = [
  10000,
  13000,
  15000,
  6000,
  8000,
  9000,
  20000,
  14000,
]
  

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!cash") {
 msg.channel.send("owo cash")
;}});  
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!cash") {
 msg.channel.send("owo cash")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!cash") {
 msg.channel.send("owo cash")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!cash") {
 msg.channel.send("owo cash")
;}});   

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!daily") {
 msg.channel.send("owo daily")
;}});  
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!daily") {
 msg.channel.send("owo daily")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!daily") {
 msg.channel.send("owo daily")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!daily") {
 msg.channel.send("owo daily")
;}});   

sansar.on("message", async (msg, member, guild) => {  
if (msg.content.toLowerCase() === "!inv") {
 msg.channel.send("owo inv")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!inv") {
 msg.channel.send("owo inv")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!inv") {
 msg.channel.send("owo inv")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!inv") {
 msg.channel.send("owo inv")
;}});    

sansar.on("message", async (msg, member, guild) => {  
if (msg.content.toLowerCase() === "!ww") {
 msg.channel.send("owo w")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ww") {
 msg.channel.send("owo w")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ww") {
 msg.channel.send("owo w")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ww") {
 msg.channel.send("owo w")
;}});   

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ws") {
 msg.channel.send("owo sell all")
;}});  
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ws") {
 msg.channel.send("owo sell all")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ws") {
 msg.channel.send("owo sell all")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!ws") {
 msg.channel.send("owo sell all")
;}});   

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wh") {
 msg.channel.send("owoh")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wh") {
 msg.channel.send("owoh")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wh") {
 msg.channel.send("owoh")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wh") {
 msg.channel.send("owoh")
;}});  
 
sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!xp") {
 msg.channel.send("owoxp")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!xp") {
 msg.channel.send("owoxp")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!xp") {
 msg.channel.send("owoxp")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!xp") {
  msg.channel.send("owoxp")
;}});  
 
sansar.on("message", async (msg, member, args, guild) => {
if (msg.content.toLowerCase() === "!send") {
 msg.channel.send(`owo send ${msg.author} 50000`);}});  
  
sansar2.on("message", async (msg, member, args, guild) => {
if (msg.content.toLowerCase() === "!send") {
 msg.channel.send(`owo send ${msg.author} 50000`);}});  
    
sansar3.on("message", async (msg, member, args, guild) => {
if (msg.content.toLowerCase() === "!send") {
 msg.channel.send(`owo send ${msg.author} 50000`);}});  
   
sansar4.on("message", async (msg, member, args, guild) => {
if (msg.content.toLowerCase() === "!send") {
 msg.channel.send(`owo send ${msg.author} 50000`);}});  
    
sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wc") {
 msg.channel.send("owo wc all")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wc") {
 msg.channel.send("owo wc all")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wc") {
 msg.channel.send("owo wc all")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!wc") {
  msg.channel.send("owo wc all")
;}});  
 
sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!lb") {
 msg.channel.send("owo lb all")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!lb") {
 msg.channel.send("owo lb all")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!lb") {
 msg.channel.send("owo lb all")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!lb") {
  msg.channel.send("owo lb all")
;}});  

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellcommon") {
 msg.channel.send("owo sell commonweapons")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellcommon") {
 msg.channel.send("owo sell commonweapons")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellcommon") {
 msg.channel.send("owo sell commonweapons")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellcommon") {
  msg.channel.send("owo sell commonweapons") 
;}});   

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!selluncommon") {
 msg.channel.send("owo sell uncommonweapons")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!selluncommon") {
 msg.channel.send("owo sell uncommonweapons")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!selluncommon") {
 msg.channel.send("owo sell uncommonweapons")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!selluncommon") {
  msg.channel.send("owo sell uncommonweapons") 
;}});   
 
 sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellrare") {
 msg.channel.send("owo sell rareweapons")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellrare") {
 msg.channel.send("owo sell rareweapons")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellrare") {
 msg.channel.send("owo sell rareweapons")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellrare") {
  msg.channel.send("owo sell rareweapons") 
;}});   

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellmythic") {
 msg.channel.send("owo sell mythicweapons")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellmythic") {
 msg.channel.send("owo sell mythicweapons")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellmythic") {
 msg.channel.send("owo sell mythicweapons")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellmhythic") {
  msg.channel.send("owo sell mythicweapons") 
;}});   

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellepic") {
 msg.channel.send("owo sell epicweapons")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellepic") {
 msg.channel.send("owo sell epicweapons")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellepic") {
 msg.channel.send("owo sell epicweapons")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!sellepic") {
  msg.channel.send("owo sell epicweapons") 
;}});   

sansar.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!selllegendary") {
 msg.channel.send("owo sell legendaryweapons")
;}}); 
 sansar2.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!selllegendary") {
 msg.channel.send("owo sell legendaryweapons")
;}});   
 sansar3.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!selllegendary") {
 msg.channel.send("owo sell legendaryweapons")
;}});   
 sansar4.on("message", async (msg, member, guild) => {
if (msg.content.toLowerCase() === "!selllegendary") {
  msg.channel.send("owo sell legendaryweapons") 
;}});   


sansar.on("ready", () => {
  const dakika = süre[Math.floor(Math.random() *süre.length)]; 
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, dakika);})  

 sansar2.on("ready", () => {
   const dakika = süre[Math.floor(Math.random() *süre.length)]; 
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar2.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, dakika);}) 

sansar3.on("ready", () => {
  const dakika = süre[Math.floor(Math.random() *süre.length)]; 
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar3.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, dakika);})  

sansar4.on("ready", () => {
  const dakika = süre[Math.floor(Math.random() *süre.length)]; 
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar4.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, dakika);})  
 
