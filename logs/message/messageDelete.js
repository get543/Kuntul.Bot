module.exports = async (client, Discord) => {
  client.on("messageDelete", (message) => {
    const deleteChannel = client.channels.cache.get(process.env.DELETE_CHANNEL_ID);

    if (message.attachments.first()) {
      const picture = message.attachments.map((a) => a.proxyURL);

      deleteChannel.send(`**Deleted By:** ${message.author} **Channel:** ${message.channel} \n${picture}`);
    } else {
      const deleteEmbed = new Discord.MessageEmbed().setColor("FF2626").setTitle("Deleted Message").addField("Author", `${message.author}`).addField("Channel", `${message.channel.name}`).setDescription(message.cleanContent).setTimestamp();

      deleteChannel.send(deleteEmbed);
    }
  });
};
