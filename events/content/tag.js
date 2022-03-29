module.exports = async (client) => {
  client.on("message", async (message) => {
    // retun if message author is the bot
    if (message.author.id === client.user.id) return;

    // exclude @everyone @here
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
        
    // bot got mention
    if (message.mentions.has(client.user)) {
      message.channel.send("hah, ngapa tag gw 😐");
    }

    // someone tag that member
    if (message.mentions.has("413683674878574592")) {
      message.channel.send(`mungkin dia lelah 💤😴💤`);
    }
  });
};
