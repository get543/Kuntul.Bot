const { MessageFlags } = require("discord.js");

module.exports = async (client, Discord) => {
  client.on("messageDeleteBulk", async (message) => {
    
    // const fetchedLogs = await message.guild.fetchAuditLogs({
    //   limit: 10,
    //   type: "MESSAGE_DELETE_BULK",
    // }).catch(console.error);
    
    // const kicklog = fetchedLogs.entries.first();

    // if (!kicklog) return;
    
    // const { executor, target } = kicklog;

    let author = message.content === '#c' || message.content === '#clear';

    const bulkEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Message Deleted in Bulk")
      .addFields(
        { name: "Author", value: `${message.user} has purge ${message.size} messages` },
        { name: "Channel", value: message.channel },
        )
      .setDescription(message.content || "Empty")
      .setTimestamp();

    client.channels.cache.get("877518005666471977").send(bulkEmbed);
  });
};
