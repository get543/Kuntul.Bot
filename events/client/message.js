const prefix = process.env.PREFIX;

module.exports = async (client, Discord) => {
    client.on("message", async (message) => {
        // TODO creating an ai chatbot
        // const fetch = require("node-fetch"); 
        // if (message.channel.id === '888739587046899713') {
        //   await fetch.default(`https://api.monkedev.com/fun/chat/?msg=${message.content}&uid=${message.author.id}`)
        //     .then(res => res.json())
        //     .then(data => {
        //       // JSON.parse();
        //       message.channel.send(data.response);
        //     });
        // };

        // prefix
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

        try {
            command.execute(client, message, args, cmd, Discord);
        } catch (error) {
            console.error(error);
        }
    });
}