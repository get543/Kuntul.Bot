const { MessageFlags, User } = require("discord.js");

module.exports = async (client, Discord) => {
  client.on("messageDeleteBulk", async (message) => {
    
    // const fetchedLogs = await message.guild.fetchAuditLogs({
    //   limit: 10,
    //   type: "MESSAGE_DELETE_BULK",
    // }).catch(console.error);
    
    // const kicklog = fetchedLogs.entries.first();

    // if (!kicklog) return;
    
    // const { executor, target } = kicklog;

    const bulkEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Multiple Messages Deleted At Once")
      .addFields(
        { name: "Author", value: `${message.username} deleted **${message.size}** messages at once` },
        { name: "Channel", value: message.channel },
        )
      .setDescription(message.cleanContent || "Empty")
      .setTimestamp();

    client.channels.cache.get("877518005666471977").send(bulkEmbed);
  });
};
