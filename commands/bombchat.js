module.exports = {
  name: "bombchat",
  description: "spam message",
  async execute(message, args) {
    
    message.delete(message.author);

    for ( i = 0; i < 100; i++ ) {
        message.channel.send('ξ');
    };
  },
};