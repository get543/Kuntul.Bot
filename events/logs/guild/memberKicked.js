module.exports = async (client, Discord) => {
  client.on("guildMemberRemove", async member => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_KICK",
    });
    
    const kicklog = fetchedLogs.entries.first();

    if (!kicklog) return;
    
    const { executor, target } = kicklog;

    const kickEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`A member has been kicked by: ${executor.username}`, executor.displayAvatarURL())
      .setTitle("Member Kicked")
      .setDescription(`${member.user.username} has been kicked`)
      .setTimestamp();

    client.channels.cache.get(process.env.DELETE_CHANNEL_ID).send(kickEmbed);
  });
};
