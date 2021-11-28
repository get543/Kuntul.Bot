module.exports = async (client, Discord) => {
  client.on("messageDeleteBulk", async (messages) => {
    const length = messages.array().length;
    const channel = messages.first().channel.name;

    const bulkEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(`${length} Messages Deleted At Once`)
      .addFields(
        { name: "Content", value: messages.map(message => `${message.author.username} : ${message.content}`) },
        { name: "Channel", value: channel ? `#${channel}` : "In some server i guess" },
      )
      .setTimestamp();

    await client.channels.cache.get("877518005666471977").send(bulkEmbed);
  });
};