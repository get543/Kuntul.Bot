const Discord = require("discord.js");
require("dotenv").config();
const { resolveSoa } = require("dns");

const client = new Discord.Client();

const fs = require("fs");

const prefix = "~";

const { Recoverable } = require("repl");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("Kuntul is Online!");

  client.user.setActivity("Prefix: ~", { type: "PLAYING" }).catch(console.error);
});

client.on("message", (message) => {
  // bales chat oi
  const target = message.mentions.users.first();

  if(target) {
      return message.channel.send('apa oi 👾');
  } 

  if (message.content.toLowerCase() ==  'oi') {
      message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() ==  'woy') {
      message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() ==  'cuk') {
      message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() ==  'cok') {
      message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() ==  'uy') {
      message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() ==  'oit') {
      message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() ==  'oy') {
      message.channel.send(`apa oi 👾`);
  }
  // end bales chat oi
 
 
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
  }

  if (cmd == "play") {
    client.commands.get("play").execute(message, args);
  } else if (cmd === "skip") {
    client.commands.get("skip").execute(message, args);
  } else if (cmd === "queue") {
    client.commands.get("queue").execute(client, message, args);
  } else if (cmd === "leave") {
    client.commands.get("leave").execute(message, args);
  }
});

client.login(process.env.DISCORD_TOKEN);
