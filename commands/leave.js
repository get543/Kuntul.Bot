module.exports = {
    name: 'leave',
    description: 'Leave from a discord voice channel',
    async execute(message, args) {
        
        //Checking for the voicechannel and permissions (you can add more permissions if you like).
        const voice_channel = message.member.voice.channel;

        if (!voice_channel) return message.channel.send('Lo harus ada di voice channel baru bisa cuk!');
        await voice_channel.leave();
        await message.channel.send('Leaving channel.. :cry:')
    }
    
}