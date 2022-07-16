const fs = require("fs");

module.exports = (client, Discord) => {
  /*
  const logFolders = fs.readdirSync("./logs");

  for (const folder of logFolders) {
    const logFiles = fs.readdirSync(`./logs/${folder}`).filter((file) => file.endsWith(".js"));

    for (file of logFiles) {
      require(`../logs/${folder}/${file}`)(client, Discord);
    }
  } */

  // logs
  const roleCreate = require("../logs/role/roleCreate");
  const roleDelete = require("../logs/role/roleDelete");
  const roleUpdate = require("../logs/role/roleUpdate");

  const messageDelete = require("../logs/message/messageDelete");
  const messageDeleteBulk = require("../logs/message/messageDeleteBulk");
  const messageUpdate = require("../logs/message/messageUpdate");

  const guildMemberRemove = require("../logs/guild/guildMemberRemove");
  const guildBanAdd = require("../logs/guild/guildBanAdd");
  const guildMemberUpdate = require("../logs/guild/guildMemberUpdate");

  const userUpdate = require("../logs/guild/userUpdate");

  // message logs
  messageDelete(client, Discord);
  messageDeleteBulk(client, Discord);
  messageUpdate(client, Discord);

  // member kicked
  guildMemberRemove(client, Discord);

  // member banned
  guildBanAdd(client, Discord);

  // member updated
  guildMemberUpdate(client, Discord);

  // role
  roleCreate(client, Discord);
  roleDelete(client, Discord);
  roleUpdate(client, Discord);
};
