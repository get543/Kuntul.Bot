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
  } else if (cmd === "aku cinta kamu") {
    client.commands.get("aku cinta kamu").execute(mesage, args);
  } else if (cmd === "dick") {
    client.commands.get("dick").execute(mesage, args);
  } else if (cmd === "titit besar") {
    client.commands.get("titit besar").execute(mesage, args);
  } else if (cmd === "isep kontol gw") {
    client.commands.get("isep kontol gw").execute(mesage, args);
  } else if (cmd === "sekai") {
    client.commands.get("sekai").execute(mesage, args);
  } else if (cmd === "help") {
    client.commands.get("help").execute(mesage, args, Discord);
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
