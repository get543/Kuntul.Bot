module.exports = {
    name: 'hei',
    aliases: ["h", "hai"],
    description: "say hello command",
    execute(message, args, cmd, command) {
        message.channel.send(`hello 😊`);
    }
}