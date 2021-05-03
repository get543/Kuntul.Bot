module.exports = {
    name: 'help',
    description: "This sends the list of commands!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#12A5F1')
        .setTitle('Baca yaa sayang')
        .setURL('https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw')
        .setDescription('ini sayang.. pake yang bener yaa')
        .addFields(
            {name: '~aku cinta kamu', value: 'fancy fuck you text'},
            {name: '~ping', value: 'cek ping'},
            {name: '~dick', value: 'dick istimewa'},
            {name: '~hei', value: 'apa oi'},
            {name: '~leave', value: 'leave voice channel'},
            {name: '~meme', value: 'meme reddit'},
            {name: '~play', value: 'play music ( tapi gak bisa cuk )'},
            {name: '~queue', value: 'liat music queue'},
            {name: '~sekai', value: 'high in the sekai'},
            {name: '~skip', value: 'skip music'},
            {name: '~help', value: 'list semua command'},
            {name: '~isep kontol gw', value: 'anime isep kontol'},
            {name: '~titit besar', value: 'uwaw titit besar sekali nich'},




        )
       
        message.channel.send(newEmbed);

    }

}