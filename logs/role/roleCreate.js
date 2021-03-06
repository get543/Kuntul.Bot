module.exports = async (client, Discord) => {
  client.on("roleCreate", async (role) => {
    const fetchLogs = await role.guild.fetchAuditLogs({
      limit: 1,
      type: "ROLE_CREATE",
    });

    const log = fetchLogs.entries.first();

    const { executor } = log;

    const roleEmbed = new Discord.MessageEmbed()
      .setColor(role.color || "BLUE")
      .setAuthor(
        `${executor.username} just created a role`,
        executor.avatarURL()
      )
      .setTitle("Role Created")
      .setDescription(`**Role Name:** ${role.name}`)
      .setFooter(`ID: ${role.id}`)
      .setTimestamp();

    client.channels.cache.get(process.env.DELETE_CHANNEL_ID).send(roleEmbed);
  });
};
