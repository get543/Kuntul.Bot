module.exports = async (client, Discord) => {
  client.on("messageDelete", (message) => {
    const deleteEmbed = new Discord.MessageEmbed()
      .setColor("FF2626")
      .setTitle("Deleted Message")
      .addField(`Author`, `${message.author}`)
      .addField("Channel", `${message.channel.name}`)
      .setDescription(message.cleanContent)
      .setTimestamp();

    client.channels.cache.get("877518005666471977").send(deleteEmbed);
  });
};
