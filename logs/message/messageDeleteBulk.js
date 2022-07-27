module.exports = async (client, Discord) => {
  client.on("messageDeleteBulk", async (messages) => {
    const length = messages.array().length;
    const channel = messages.first().channel.name;

    const bulkEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(`${length} Messages Deleted At Once`)
      .setDescription(
        messages.map(
          (message) => `${message.author.username} : ${message.content}`
        )
      )
      .addField("Channel", channel ? `#${channel}` : "In some server i guess")
      .setTimestamp();

    await client.channels.cache
      .get(process.env.DELETE_CHANNEL_ID)
      .send(bulkEmbed);
  });
};
