module.exports = async (client, Discord) => {
  client.on("messageDelete", (message) => {
    const deleteChannel = client.channels.cache.get(
      process.env.DELETE_CHANNEL_ID
    );

    if (message.attachments.first()) {
      const firstPicture = message.attachments.first().proxyURL;

      const deleteEmbed = new Discord.MessageEmbed()
        .setColor("FF2626")
        .setTitle("Attachment Deleted")
        .addField("Author", `${message.author}`)
        .addField("Channel", `${message.channel.name}`)
        .setImage(`${firstPicture}`)
        .setDescription(
          message.attachments.map((picture) => `- ${picture.proxyURL}`)
        )
        .setTimestamp()
        .setFooter("Picture shown is the first deleted picture");

      deleteChannel.send(deleteEmbed);
    } else {
      const deleteEmbed = new Discord.MessageEmbed()
        .setColor("FF2626")
        .setTitle("Deleted Message")
        .addField("Author", `${message.author}`)
        .addField("Channel", `${message.channel.name}`)
        .setDescription(message.cleanContent)
        .setTimestamp();

      deleteChannel.send(deleteEmbed);
    }
  });
};
