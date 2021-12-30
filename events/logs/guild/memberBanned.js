module.exports = async (client, Discord) => {
  client.on("guildBanAdd", async (ban) => {
    const fetchedLogs = await ban.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_BAN_ADD",
    });

    const banLog = fetchedLogs.entries.first();

    if (!banLog) return;

    const { executor, target } = banLog;

    const banEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`A member has been banned by: ${executor.username}`, executor.displayAvatarURL())
      .setTitle("Member Banned")
      .setDescription(`${member.user.username} has been banned`)
      .setTimestamp();

    client.channels.cache.get("877518005666471977").send(banEmbed);
  });
};
