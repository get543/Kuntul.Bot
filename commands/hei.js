module.exports = {
    name: 'hei',
    description: "say hello command",
    execute(message, args, client) {


        message.channel.send(`apa oi 👾`).then((msg) => {
            setTimeout(() => msg.delete(), 3000);
            setTimeout(() => message.delete(), 5000);
        }).catch((err) => {
            throw err;
        })

    }
}