// ============================== Web server ==============================================
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// =============================== Bot Code ==============================================
const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const mySecret = process.env["DISCORD_TOKEN"];

const fs = require("fs");

const prefix = "~";

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
  console.log("Kuntul is Online!");

  client.user.setPresence({
    activity: {
      name: "this dumb fuck",
      type: "COMPETING",
    },
    status: "dnd",
  });
});


// view deleted message
client.on("messageDelete", (message) => {
  const deleteEmbed = new Discord.MessageEmbed()
  .setColor("FF2626")
  .setTitle("Deleted Message")
  .addField(`Author`, `${message.author}`)
  .addField("Channel", `${message.channel.name}`)
  .setDescription(message.cleanContent)
  .setTimestamp();

  client.channels.cache.get("877518005666471977").send(deleteEmbed);
});

client.on("message", async (message) => {
  // kalo bot kirim message ga ngaruh
  if (message.author.bot || message.content.bot) return;

  // jika bot di mention
  if (message.mentions.has(client.user)) {
    return message.channel.send("hah, ngapa tag gw 😐");
  }

  // jika orang tag orang
  if (message.mentions.has('475359250298830849')) {
    message.channel.send(`bacot`);
  } else if (message.mentions.has('412881505279279107') || message.mentions.has('580471572956053529')) {
    message.channel.send(`apa tot`);
  } else if (message.mentions.has('756890367458148412')) {
    message.channel.send(`kuy lah anjeng 🎮`);
  } else if (message.mentions.has('413683674878574592')) {
    message.channel.send(`tidur 😴`);
  } else if (message.mentions.has('453528042275471371')) {
    message.channel.send(`by one?`);
  }

  // stiker
  if (message.content.toLowerCase() == "dm sabi") {
    message.channel.send(`https://imgur.com/0QWBCUQ`);
  } else if (message.content.toLowerCase() == "sharing sabi") {
    message.channel.send(`https://imgur.com/0QWBCUQ`);
  } else if (message.content.toLowerCase() == "bagi dong")  {
    message.channel.send(`https://imgur.com/0QWBCUQ`);
  } else if (message.content.toLowerCase() == "bagi link") {
    message.channel.send(`https://imgur.com/0QWBCUQ`);
  } else if (message.content.toLowerCase() == "pap dong") {
    message.channel.send(`https://imgur.com/0QWBCUQ`);
  } else if (message.content.toLowerCase() == "hahahaha") {
    message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/874463489438122064/20210810_082456.jpg`);
  } else if (message.content.toLowerCase() == "wkwkwkwk") {
    message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/874463489438122064/20210810_082456.jpg`);
  } else if (message.content.toLowerCase() == "by one?") {
    message.channel.send(`https://imgur.com/DYhrEh6`);
  } else if (message.content.toLowerCase() == "ngajak brantem?") {
    message.channel.send(`https://imgur.com/DYhrEh6`);
  } else if (message.content.toLowerCase() == "okcums") {
    message.channel.send(`https://imgur.com/zwheovu`);
  } else if (message.content.toLowerCase() == "boing") {
    message.channel.send(`https://imgur.com/pLIKY5E`);
  } else if (message.content.toLowerCase() == "please") {
    message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/878183655284015114/IMG_20210820_144653.jpg`);
  } else if (message.content.toLowerCase() == "pls") {
    message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/878183655284015114/IMG_20210820_144653.jpg`);
  } else if (message.content.toLowerCase() == "help") {
    message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/827030744282824764/image0.jpg`);
  }



  // response to content of the message
  if (message.content.toLowerCase() == "oi") {
    message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() == "woy") {
    message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() == "cuk") {
    message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() == "cok") {
    message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() == "uy") {
    message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() == "oit") {
    message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() == "oy") {
    message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() == "yo") {
    message.channel.send(`wassap megi 😎`);
  } else if (message.content.toLowerCase() == "gratisan") {
    message.channel.send(`$wa`);
  } else if (message.content.toLowerCase() == "kon") {
    message.channel.send(`tol`);
  } else if (message.content.toLowerCase() == "pan") {
    message.channel.send(`tek`);
  } else if (message.content.toLowerCase() == "anjing") {
    message.channel.send(`lu anjing`);
  } else if (message.content.toLowerCase() == "ajg") {
    message.channel.send(`lu anjing`);
  } else if (message.content.toLowerCase() == "anjg") {
    message.channel.send(`lu anjing`);
  } else if (message.content.toLowerCase() == "lu") {
    message.channel.send(`lu kali`);
  } else if (message.content.toLowerCase() == "deretvolta") {
    message.channel.send(
      `**Li**hat **K**alau **Ba**pak **Ca**mat **Na**nti **M**enin**g**gal **Al**marhum **M**i**n**ta **Z**ai**n**ab **C**a**r**i **F****e**ri **C**e**d**ia **Co**ba **Ni**kah **S**a**n**a **P**em**b**antu **H**afiz **Cu**mi **H**an**g**us **Ag**ak **P**ai**t** **Au** ah`
    );
  } else if (message.content.toLowerCase() == "tot") {
    message.channel.send(`apa mau gw kentot`);
  } else if (message.content.toLowerCase() == "1+1") {
    message.channel.send(`3`);
  } else if (message.content.toLowerCase() == "pinter") {
    message.channel.send(`jelas`);
  } else if (message.content.toLowerCase() == "oi tot") {
    message.channel.send(`apa mau gw kentot`); 
  } else if (message.content.toLowerCase() == "bodoh") {
    message.channel.send(`lu bodoh`);
  } else if (message.content.toLowerCase() == "gw") {
    message.channel.send(`emang lu`);
  } else if (message.content.toLowerCase() == "seriusan") {
    message.channel.send(`serius`);
  } else if (message.content.toLowerCase() == "boong") {
    message.channel.send(`kok tau`);
  } else if (message.content.toLowerCase() == "goblok") {
    message.channel.send(`lu goblok`);
  } else if (message.content.toLowerCase() == "kuy") {
    message.channel.send(`kuy lah`);
  } else if (message.content.toLowerCase() == "panik ga") {
    message.channel.send(`panik lah masa engga`);
  } else if (message.content.toLowerCase() == "by one") {
    message.channel.send(`kuyy`);
  } else if (message.content.toLowerCase() == "pubg") {
    message.channel.send(`langsung`);
  } else if (message.content.toLowerCase() == "pap dong") {
    message.channel.send(`ewe`);
  } else if (message.content.toLowerCase() == "lol") {
    message.channel.send(`kontol dan tolol`);
  } else if (message.content.toLowerCase() == "pantasan") {
    message.channel.send(`pantat sans 😎`);
  } else if (message.content.toLowerCase() == "konteks") {
    message.channel.send(`kontol dan seks`);
  } else if (message.content.toLowerCase() == "blok") {
    message.channel.send(`blok goblok`);
  } else if (message.content.toLowerCase() == "asu") {
    message.channel.send(`first time?`);
  } else if (message.content.toLowerCase() == "2+2") {
    message.channel.send(`5`);
  } else if (message.content.toLowerCase() == "makan") {
    message.channel.send(`makan bang`);
  } else if (message.content.toLowerCase() == "Assalamualaikum") {
    message.channel.send(`Waalaikumsalam`);
  } else if (message.content.toLowerCase() == "ez cok") {
    message.channel.send(`set set`);
  } else if (message.content.toLowerCase() == "good boy") {
    message.channel.send(`woof woof 🐶`);
  } else if (message.content.toLowerCase() == "cups") {
    message.channel.send(`biasa, cupu si anak dajjal`);
  } else if (message.content.toLowerCase() == "fix") {
    message.channel.send(`fix no debat`);
  } else if (message.content.toLowerCase() == "anjay") {
    message.channel.send(`anjay dong`);
  } else if (message.content.toLowerCase() == "sabi") {
    message.channel.send(`sabi lah`);
  } else if (message.content.toLowerCase() == "ewe") {
    message.channel.send(`kuy ewe`);
  } else if (message.content.toLowerCase() == "tolol") {
    message.channel.send(`lu tolol`);
  } else if (message.content.toLowerCase() == "masa") {
    message.channel.send(`bodo`);
  } else if (message.content.toLowerCase() == "masa?") {
    message.channel.send(`bodo`);
  } else if (message.content.toLowerCase() == "ok ger") {
    message.channel.send(`░█████╗░██╗░░██╗  ░██████╗░███████╗██████╗░
██╔══██╗██║░██╔╝  ██╔════╝░██╔════╝██╔══██╗
██║░░██║█████═╝░  ██║░░██╗░█████╗░░██████╔╝
██║░░██║██╔═██╗░  ██║░░╚██╗██╔══╝░░██╔══██╗
╚█████╔╝██║░╚██╗  ╚██████╔╝███████╗██║░░██║
░╚════╝░╚═╝░░╚═╝  ░╚═════╝░╚══════╝╚═╝░░╚═╝`);
  }

  
  // prefix
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  if (cmd == "hei") {
    client.commands.get("hei").execute(message, args);
  } else if (cmd === "clear") {
    client.commands.get("clear").execute(message, args);
  } else if (cmd === "meme") {
    client.commands.get("meme").execute(message, args, Discord);
  } else if (cmd === "ping") {
    client.commands.get("ping").execute(client, message, args, Discord);
  } else if (cmd === "akucintakamu") {
    client.commands.get("akucintakamu").execute(message, args);
  } else if (cmd === "dick") {
    client.commands.get("dick").execute(message, args);
  } else if (cmd === "tititbesar") {
    client.commands.get("tititbesar").execute(message, args);
  } else if (cmd === "isepkontolgw") {
    client.commands.get("isepkontolgw").execute(message, args);
  } else if (cmd === "sekai") {
    client.commands.get("sekai").execute(message, args);
  } else if (cmd === "help") {
    client.commands.get("help").execute(message, args, Discord);
  } else if (cmd === "idulfitri") {
    client.commands.get("idulfitri").execute(message, args);
  } else if (cmd === "bernyanyi") {
    client.commands.get("bernyanyi").execute(message, args);
  } else if (cmd === "colbar") {
    client.commands.get("colbar").execute(message, args);
  } else if (cmd === "gajah") {
    client.commands.get("gajah").execute(message, args);
  } else if (cmd === "ohyeah") {
    client.commands.get("ohyeah").execute(message, args);
  } else if (cmd === "okger") {
    client.commands.get("okger").execute(message, args);
  } else if (cmd === "invite") {
    client.commands.get("invite").execute(message, args);
  } else if (cmd === "bombchat") {
    client.commands.get("bombchat").execute(message, args);
  } else if (cmd === "peace") {
    client.commands.get("peace").execute(message, args);
  }
});