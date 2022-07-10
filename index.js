const KeepAlive = require("./server");
require("dotenv").config();
const fs = require("fs");
const Discord = require("discord.js");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["commandHandler", "eventHandler", "logHandler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.DISCORD_TOKEN);

KeepAlive();
