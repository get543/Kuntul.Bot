//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
const queue = new Map();

module.exports = {
    name: 'skip',
    description: 'Skip a song',
    async execute(message, args) {

        //This is our server queue. We are getting this server queue from the global queue.
        const server_queue = queue.get(message.guild.id);


        if ('skip') skip_song(message, server_queue);



        const skip_song = (message, server_queue) => {
            if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
            if (!server_queue) {
                return message.channel.send(`There are no songs in queue 😔`);
            }
            server_queue.connection.dispatcher.end();
        }






    }
}