// const fs = require('fs');

module.exports = (client, Discord) => {
  /*
  const logsFolder = fs
    .readdirSync('./logs')
    .filter((file) => file.endsWith('.js'));

  for (const folder of logsFolder) {
    const logFiles = fs
      .readdirSync(`./logs/${folder}`)
      .filter((file) => file.endsWith('.js'));

    for (const file of logFiles) {
      const Files = require(`../logs/${folder}/${file}`);
      Files(client, Discord);
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
