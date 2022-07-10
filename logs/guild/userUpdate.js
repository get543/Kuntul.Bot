// TODO make this work as intended
/*
module.exports = async (client, Discord) => {
  client.on("userUpdate", async (oldUser, newUser) => {
    const fetchedLogs = await oldUser.guild.fetchAuditLogs({
      limit: 1,
      type: ["USER_UPDATE", "GUILD_MEMBER_UPDATE", "PRESENCE_UPDATE"],
    });

    const updateLog = fetchedLogs.entries.first();

    if (!updateLog) return;

    const { executor, target } = updateLog;

    if (oldUser === newUser) return;

    if (Date.now() - updateLog.createdTimestamp < 5000) {
      const userEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(`${executor.username} has updated ${newUser}`, executor.displayAvatarURL())
        .setTitle("User Updated")
        .setDescription(`${executor.username} has update from ${oldUser}`)
        .setTimestamp();

      client.channels.cache.get(process.env.DELETE_CHANNEL_ID).send(userEmbed);
    }
  });
};
*/
