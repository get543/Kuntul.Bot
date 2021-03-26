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


    if(message.mentions.members.first()) {
        return message.channel.send('Apa oi manggil manggil!');
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    // const cmdName = client.commands.get(cmd) || client.commands.find(cmdName => cmdName.aliasses && cmdName.aliasses.includes(cmd));

    // if(!cmdName) return message.reply(`\`${cmdName}\` is not valid `)

    // try{
    //     commmand.execute(client, message, args, Discord);
    // } catch(err){
    //     message.reply('there was an error in the command');
    //     console.log(err);
    // }

    if (cmd == 'hei') {
        client.commands.get('hei').execute(message, args);
    } else if (cmd === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (cmd === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (cmd === 'meme') {
        client.commands.get('meme').execute(message, args, Discord);
    } else if (cmd === 'ping') {
        client.commands.get('ping').execute(client, message, args, Discord);
    }

    if (cmd == 'play') {
        client.commands.get('play').execute(message, args);
    } else if (cmd === 'skip') {
        client.commands.get('skip').execute(message, args);
    } else if (cmd === 'queue') {
        client.commands.get('queue').execute(client, message, args);
    }



});


client.login(process.env.DISCORD_TOKEN); 