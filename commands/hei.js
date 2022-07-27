module.exports = {
  name: "hei",
  description: "say hello command",
  execute(client, message, args, cmd, Discord) {
    message.channel.send("Hewo 😊");
  },
};
