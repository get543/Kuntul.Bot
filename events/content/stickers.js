module.exports = async (client) => {
  client.on("message", async (message) => {
    // biar ga tabrakan
    if (message.author.id === client.user.id) return;
    
    // stiker
    if (message.content.toLowerCase() == "dm sabi") {
      message.channel.send(`https://imgur.com/0QWBCUQ`);
    } else if (message.content.toLowerCase() == "sharing sabi") {
      message.channel.send(`https://imgur.com/0QWBCUQ`);
    } else if (message.content.toLowerCase() == "bagi dong") {
      message.channel.send(`https://imgur.com/0QWBCUQ`);
    } else if (message.content.toLowerCase() == "bagi link") {
      message.channel.send(`https://imgur.com/0QWBCUQ`);
    } else if (message.content.toLowerCase() == "pap dong") {
      message.channel.send(`https://imgur.com/0QWBCUQ`);
    } else if (message.content.toLowerCase() == "hahahaha") {
      message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/874463489438122064/20210810_082456.jpg`);
    } else if (message.content.toLowerCase() == "wkwkwkwk") {
      message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/874463489438122064/20210810_082456.jpg`);
    } else if (message.content.toLowerCase() == "by one?") {
      message.channel.send(`https://imgur.com/DYhrEh6`);
    } else if (message.content.toLowerCase() == "ngajak brantem?") {
      message.channel.send(`https://imgur.com/DYhrEh6`);
    } else if (message.content.toLowerCase() == "okcums") {
      message.channel.send(`https://imgur.com/zwheovu`);
    } else if (message.content.toLowerCase() == "boing") {
      message.channel.send(`https://imgur.com/pLIKY5E`);
    } else if (message.content.toLowerCase() == "please") {
      message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/878183655284015114/IMG_20210820_144653.jpg`);
    } else if (message.content.toLowerCase() == "pls") {
      message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/878183655284015114/IMG_20210820_144653.jpg`);
    } else if (message.content.toLowerCase() == "help") {
      message.channel.send(`https://cdn.discordapp.com/attachments/802199069342433340/827030744282824764/image0.jpg`);
    }
  });
};
