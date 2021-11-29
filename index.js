// ============================== Web server ==============================================
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send(`<h1>Hello World!</h1>`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// =============================== Bot Code ==============================================
const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require("fs");
const messageContent = require('./client/messageContent');
const messageImage = require('./client/messageImage');
const messageTag = require('./client/messageTag');

const roleCreate = require('./client/logs/roleCreate');
const roleDelete = require('./client/logs/roleDelete');
const roleUpdate = require('./client/logs/roleUpdate');
const messageDelete = require('./client/logs/messageDelete');
const messageBulkDelete = require("./client/logs/messageBulkDelete");
const messageUpdate = require("./client/logs/messageUpdate");
const memberKicked = require("./client/logs/memberKicked");
const memberBanned = require("./client/logs/memberBanned");
const memberUpdate = require("./client/logs/memberUpdate");
const userUpdate = require("./client/logs/userUpdate");

const prefix = process.env.PREFIX;

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

// message logs
messageDelete(client, Discord);
messageBulkDelete(client, Discord);
messageUpdate(client, Discord);

// member kicked
memberKicked(client, Discord)

// member banned
memberBanned(client, Discord);

// member updated
memberUpdate(client, Discord);
// userUpdate(client, Discord);

// role 
roleCreate(client, Discord);
roleDelete(client, Discord);
roleUpdate(client, Discord); 

// tag 
messageTag(client);

// image
messageImage(client);

// response to content of the message
messageContent(client);

client.on("message", async (message) => {
  // prefix
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

  try {
    command.execute(client, message, args, cmd, Discord);
  } catch (error) {
    console.error(error);
  }
});
