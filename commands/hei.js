module.exports = {
    name: 'hei',
    description: "say hello command",
    execute(message, args, client) {


        message.channel.send(`apa oi 👾`).then((msg) => {
            
            setTimeout(() => message.delete(), 1000);
        }).catch((err) => {
            throw err;
        })

    }
}