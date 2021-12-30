module.exports = async (client) => {
  client.on("message", async (message) => {
    // biar ga tabrakan
    if (message.author.id === client.user.id) return;

    // jika bot di mention
    if (message.mentions.has(client.user)) {
      message.channel.send("hah, ngapa tag gw 😐");
    }

    // tidak termasuk @everyone sama @here
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    // kl yg kirim message bot
    if (message.author.client.user) return;

    // jika orang tag orang
    if (message.mentions.has("475359250298830849")) {
      message.channel.send(`bacot`);
    } else if (message.mentions.has("412881505279279107") || message.mentions.has("580471572956053529")) {
      message.channel.send(`apa tot`);
    } else if (message.mentions.has("756890367458148412")) {
      message.channel.send(`kuy lah anjeng 🎮`);
    } else if (message.mentions.has("413683674878574592")) {
      message.channel.send(`tidur 😴`);
    } else if (message.mentions.has("453528042275471371")) {
      message.channel.send(`by one?`);
    }
  });
};
