module.exports = {
  name: "bombchat",
  description: "spam message",
  execute(message, args) {
    
    message.delete(message.author);

    for ( i = 0; i < 100; i++ ) {
        message.channel.send('ξ');
    };
  },
};