const KeepAlive = require("./server");
require("dotenv").config();
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

// client
const ready = require("./events/client/ready");
const message = require("./events/client/message");
// content
const messageContent = require("./events/content/messageContent");
const messageImage = require("./events/content/stickers");
const messageTag = require("./events/content/tag");
// logs
const roleCreate = require("./events/logs/role/roleCreate");
const roleDelete = require("./events/logs/role/roleDelete");
const roleUpdate = require("./events/logs/role/roleUpdate");

const messageDelete = require("./events/logs/message/messageDelete");
const messageBulkDelete = require("./events/logs/message/messageBulkDelete");
const messageUpdate = require("./events/logs/message/messageUpdate");

const memberKicked = require("./events/logs/guild/memberKicked");
const memberBanned = require("./events/logs/guild/memberBanned");
const memberUpdate = require("./events/logs/guild/memberUpdate");
const userUpdate = require("./events/logs/guild/userUpdate");

client.commands = new Discord.Collection();

// handler
const commandFiles = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.login(process.env.DISCORD_TOKEN);

// online
ready(client);

// message logs
messageDelete(client, Discord);
messageBulkDelete(client, Discord);
messageUpdate(client, Discord);

// member kicked
memberKicked(client, Discord);

// member banned
memberBanned(client, Discord);

// member updated
memberUpdate(client, Discord);

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

// client message
message(client, Discord);

KeepAlive();