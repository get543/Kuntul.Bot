const KeepAlive = require("./server");
require("dotenv").config();
const Discord = require("discord.js");
const logHandler = require("./handlers/logHandler");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

logHandler(client, Discord);

["commandHandler", "eventHandler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.DISCORD_TOKEN);

KeepAlive();
