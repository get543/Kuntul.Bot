module.exports = {
    name: 'ping',
    description: "check your ping to the bot",
    execute(client, message, args, cmd, Discord) {
        const ping = new Discord.MessageEmbed()
            .setDescription(`🏓\`${client.ws.ping}\`ms`);

        message.channel.send(ping);
    }
}