module.exports = async (client, Discord) => {
  client.on("roleUpdate", async (Arole, Brole) => {
    const fetchLogs = await Brole.guild.fetchAuditLogs({
      limit: 1,
      type: "ROLE_UPDATE",
    });

    const log = fetchLogs.entries.first();

    const { executor } = log;

    if (Brole.rawPosition !== Arole.rawPosition) return;

    const roleEmbed = new Discord.MessageEmbed()
      .setColor(Brole.color || "BLUE")
      .setAuthor(
        `${executor.username} just edited a role`,
        executor.avatarURL()
      )
      .setTitle("Role Update")
      .setDescription(
        `**Role Before:** ${Arole.name} \n**Role After:** ${Brole.name}`
      )
      .setFooter(`ID: ${Brole.id}`)
      .setTimestamp();

    client.channels.cache.get(process.env.DELETE_CHANNEL_ID).send(roleEmbed);
  });
};
