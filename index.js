const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const fs = require('fs');

const prefix = '~';

// { partials: ["MESSAGE", "CHANNEL", "REACTION"]}


client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('Kuntul is Online!');

});

client.on('message', message => {


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'hei') {
        client.commands.get('hei').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'skip') {
        client.commands.get('skip').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'meme') {
        client.commands.get('meme').execute(message, args, Discord);
    }
});


client.login(process.env.DISCORD_TOKEN); 