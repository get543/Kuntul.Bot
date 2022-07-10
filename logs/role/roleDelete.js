module.exports = async (client, Discord) => {
  client.on("roleDelete", async (role) => {
    const fetchLogs = await role.guild.fetchAuditLogs({
      limit: 1,
      type: "ROLE_DELETE",
    });

    const log = fetchLogs.entries.first();

    const { executor } = log;

    const roleEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`${executor.username} just deleted a role`, executor.avatarURL())
      .setTitle("Role Deleted")
      .setDescription(`**Role Name:** ${role.name}`)
      .setFooter(`ID: ${role.id}`)
      .setTimestamp();

    client.channels.cache.get(process.env.DELETE_CHANNEL_ID).send(roleEmbed);
  });
};
