/*module.exports = async (client, Discord) => {
  client.on("guildMemberUpdate", async (oldMember, newMember) => {
    const fetchedLogs = await oldMember.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_UPDATE",
    });

    const updateLog = fetchedLogs.entries.first();

    if (!updateLog) return;

    const { executor, target } = updateLog;

    if (oldMember === newMember) return;

    const updateEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`${executor.username} has updated ${target.username}`)
      .setTitle("Member Updated")
      .setDescription(
        `${executor.username} has updated: 
          \n${newMember.roles.name} 
          \n${newMember.nickname}
          \n${newMember.presence}
          \n${newMember.AvatarURL}
          \n${newMember.displayName}
          \n${newMember.permissions.permissionsIn}
          \n${newMember.partial}
          `
      )
      .setTimestamp();

    client.channels.cache.get("877518005666471977").send(updateEmbed);
  });
}; */

const Discord = require("discord.js");

module.exports = async (c, Discord) => {
  console.log('loaded a member update module');
  
  try {
    c.on(channelCreate), function(channel) {
      send_log(c, channel.guild.id, 'GREEN', 'Channel Created', 
      `Channel Name: **${channel.name}** \n
      Channel ID: **${channel.id}** \n
      Channel Type: **${channel.type}**`)
    }
  } catch(e) {
    console.log(String(e.stack))
  }

  // client.channels.cache.get("877518005666471977").send();
  
};

async function send_log(client, guild, color, title, description) {
  try {
    const LOGembed = new Discord.MessageEmbed()
      .setColor(color ? color : 'BLACK')
      .setDescription(description ? description.substr(0, 2048) : '\u200b')
      .setTitle(title ? title.substr(0, 256) : '\u200b')
      .setTimestamp()
      .setFooter(client.user.displayAvatarURL({ dynamic: true }), client.user)

    const logger = await client.channels.cache.fetch('877518005666471977')

    logger.createWebhook(guild.name, {
      avatar: guild.iconURL({ format: 'png' })
    }).then(async webhook => {
      webhook.send({
        username: guild.name,
        avatarURL: guild.iconURL({ format: 'png' }),
        embeds: [LOGembed],
      }).then(msg => webhook.delete().catch(e => console.log(String(e.stack)))
      .catch(e => console.log(String(e.stack))))
    })
  } catch (e) {
    console.log(String(e.stack))
  }
}
