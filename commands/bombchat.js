module.exports = {
  name: "bombchat",
  description: "spam message",
  async execute(client, message, args, cmd, Discord) {
    
    message.delete(message.author);

    for ( i = 0; i < 100; i++ ) {
      await message.channel.send('ξ');
    };
  },
};