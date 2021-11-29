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
      // .setDescription(
      //    `\n${newMember.roles.name} 
      //     \n${newMember.nickname}
      //     \n${require('util').inspect(newMember.presence)}
      //     \n${newMember.AvatarURL}
      //     \n${newMember.displayName}
      //     \n${newMember.permissions.permissionsIn}
      //     \n${newMember.partial}
      //     `
      // )
      .setTimestamp();

    client.channels.cache.get("877518005666471977").send(updateEmbed);
  });
};