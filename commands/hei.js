module.exports = {
    name: 'hei',
    description: "say hello command",
    execute(message, args, client) {
        message.channel.send(`apa oi`);
    }
}