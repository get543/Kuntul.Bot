//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
    const queue = new Map();

module.exports = {
    name: 'queue',
    description: 'show what song is on the queue',
    async execute(client, message, args) {

        
        

        //This is our server queue. We are getting this server queue from the global queue.
        let server_queue = queue.get(message.guild.id);

        if (!server_queue) return message.channel.send('gak musik lagi yang mau di play');

        let queue = server_queue;

        let nowPlaying = queue[0];

        let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Queue__\n`;

        for (var i = 1; i < queue.length; i++) {
            resp += `${i}. **${queue[i].songTitle}** -- **Requested By: ** *${queue[i].requester}*\n`;

        }

        if ('queue') queue (message, server_queue);

        message.channel.send(resp);

    }

}