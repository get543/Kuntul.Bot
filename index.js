const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');
const x = require('ultrax');

const prefix = '~';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.login(process.env.DISCORD_TOKEN); 

client.on('ready', () => {
    console.log('Kuntul is Online!');

    client.user.setPresence({
        activity: { 
            name: 'lagi ngudski ni aing',
            type: 4,
        },
        status: 'dnd',
    });

    client.user.setPresence({ activities: [{ name: 'activity' }], status: 'idle' });
    client.user.setActivity("this you dumb fuck", { type: "COMPETING" }).catch(console.error);
});

// view deleted message
client.on('messageDelete', message => {
    const deleteEmbed = new Discord.MessageEmbed()
        .setColor('FF2626')
        .setTitle('Deleted Message')
        .addField(`Author`, `${message.author} (${message.author.id})`)
        .addField('Channel', `${message.channel.name} (${message.channel.id})`)
        .setDescription(message.cleanContent)
        .setTimestamp()
    
    client.channels.cache.get("877518005666471977").send(deleteEmbed);
    console.log(`a message saying "${message.cleanContent}" was deleted from channel: ${message.channel.name} at ${new Date()}`);
})

client.on('message', message => {

    // jika bot di mention
    if (message.mentions.has(client.user)) {
        return message.channel.send('hah, ngapa tag gw 😐');
    } 

    // response to content of the message
    if (message.content.toLowerCase() ==  'oi') {
        message.channel.send(`apa oi 👾`);
    } else if (message.content.toLowerCase() ==  'woy') {
        message.channel.send(`apa oi 👾`);
    } else if (message.content.toLowerCase() ==  'cuk') {
        message.channel.send(`apa oi 👾`);
    } else if (message.content.toLowerCase() ==  'cok') {
        message.channel.send(`apa oi 👾`);
    } else if (message.content.toLowerCase() ==  'uy') {
        message.channel.send(`apa oi 👾`);
    } else if (message.content.toLowerCase() ==  'oit') {
        message.channel.send(`apa oi 👾`);
    } else if (message.content.toLowerCase() ==  'oy') {
        message.channel.send(`apa oi 👾`);
    } else if (message.content.toLowerCase() ==  'gratisan') {
        message.channel.send(`$wa`);
    }




    // prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    // aliases
    // const command = client.commands.get(cmd) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmd));


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
    } else if (cmd === 'akucintakamu') {
        client.commands.get('akucintakamu').execute(message, args);
    } else if (cmd === 'dick') {
      client.commands.get('dick').execute(message, args);
    } else if (cmd === 'tititbesar') {
        client.commands.get('tititbesar').execute(message, args);
    } else if (cmd === 'isepkontolgw') {
        client.commands.get('isepkontolgw').execute(message, args);
    } else if (cmd === 'sekai') {
        client.commands.get('sekai').execute(message, args);
    } else if (cmd === 'help') {
       client.commands.get('help').execute(message, args, Discord);
    } else if (cmd === 'idulfitri') {
        client.commands.get('idulfitri').execute(message, args);
    } else if (cmd === 'bernyanyi') {
        client.commands.get('bernyanyi').execute(message, args);
    } else if (cmd === 'colbar') {
       client.commands.get('colbar').execute(message, args);
    } else if (cmd === 'gajah') {
       client.commands.get('gajah').execute(message, args);
    } else if (cmd === 'ohyeah') {
       client.commands.get('ohyeah').execute(message, args);
    } else if (cmd === 'shrug') {
        client.commands.get('shrug').execute(message, args, Discord);
    } else if (cmd === 'okger') {
        client.commands.get('okger').execute(message, args);
    } else if (cmd === 'sussybaka') {
        client.commands.get('sussybaka').execute(client, message, args, Discord);
    } else if (cmd === 'invite') {
        client.commands.get('invite').execute(message, args);
    }


    if (cmd == 'play') {
        client.commands.get('play').execute(message, args);
    } else if (cmd === 'skip') {
        client.commands.get('skip').execute(message, args);
    } else if (cmd === 'queue') {
        client.commands.get('queue').execute(client, message, args);
    }



});


