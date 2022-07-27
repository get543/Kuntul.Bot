module.exports = async (client, Discord) => {
  client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (oldMessage.content == newMessage.content) return;

    const editEmbed = new Discord.MessageEmbed()
      .setColor("#ff7272")
      .setTitle(`A Message Has Been Edited`)
      .addFields(
        { name: "Author", value: oldMessage.author },
        { name: "Channel", value: oldMessage.channel.name }
      )
      .setDescription(
        `**Old Message :**\n${oldMessage.content} \n**New Message :**\n${newMessage.content}`
      )
      .setTimestamp();

    await client.channels.cache
      .get(process.env.DELETE_CHANNEL_ID)
      .send(editEmbed);
  });
};
