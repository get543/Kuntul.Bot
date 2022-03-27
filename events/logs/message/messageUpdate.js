module.exports = async (client, Discord) => {
  client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (oldMessage.content == newMessage.content) return;

    const editEmbed = new Discord.MessageEmbed()
      .setColor("#ff7272")
      .setTitle(`A Message Has Been Edited`)
      .addFields(
          { name: "Author", value: oldMessage.author },
          { name: "Channel", value: oldMessage.channel.name },
        )
      .setDescription(`**Old Message :** ${oldMessage.content} \n\n **New Message :** ${newMessage.content}`)
      .setTimestamp();

    await client.channels.cache.get("877518005666471977").send(editEmbed);
  });
};