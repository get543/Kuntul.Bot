// !it doesn't show the gif on the embed only a poop image
const fetch = require('node-fetch');

module.exports = {
    name: 'shrug',
    description: 'Shruggy Shruggy',
    async execute(message, args, Discord){

        const url = `https://api.tenor.com/v1/search?q=anime_shrug&key=${process.env.tenorkey}&limit=24`

        const res = await fetch(url);
        const result = await res.json();

        const gif = Math.floor(Math.random() * result.results.length);

        const newGIF = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} shrugs~`)
            .setImage(result.results[gif].url)
            .setColor('RANDOM')
        message.channel.send(newGIF)
            .then(console.log(result.results[gif].url))

        // message.channel.send(result.results[gif].url)

    }
}