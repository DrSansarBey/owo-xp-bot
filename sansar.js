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
"Bende"
];
 

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
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, 10000);})  

 sansar2.on("ready", () => {
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar2.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, 10000);}) 

sansar3.on("ready", () => {
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar3.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, 10000);})  

sansar4.on("ready", () => {
      setInterval(() => {
        const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)];
        let kanal = sansar4.channels.cache.get(process.env.sohbet)  
 kanal.send(rastgelemesaj)}, 10000);})  

