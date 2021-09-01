const ultrax = require("ultrax");
const { Client } = require("discord.js");
const client = new Client();

module.exports = {
    name: 'sussybaka',
    description: 'sussybaka command',
    execute(client, message, args, Discord) {
        client.on('message', async (message) => {
            let user = message.mentions.users.first();
            let avatar = user.displayAvatarURL({ format: "png" });
            let sussybaka = new ultrax.sussyBaka(avatar);
            const sus = await sussybaka.get();

            message.channel.send(sus);
        });
    },
};

