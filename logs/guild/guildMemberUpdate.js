module.exports = async (client, Discord) => {
  client.on("guildMemberUpdate", async (oldMember, newMember) => {
    const fetchedLogs = await oldMember.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_UPDATE",
    });

    const updateLog = fetchedLogs.entries.first();

    if (!updateLog) return;

    const { executor, target } = updateLog;

    if (oldMember.displayName === newMember.displayName) return;

    const updateEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`${executor.username} has updated ${target.username}`)
      .setTitle("Member Updated")
      .setThumbnail(newMember.AvatarURL)
      .addField("Nickname", `Before : ${oldMember.displayName} \nAfter : ${newMember.displayName}`)
      .setTimestamp();

    client.channels.cache.get(process.env.DELETE_CHANNEL_ID).send(updateEmbed);
  });
};
