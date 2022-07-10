const fs = require("fs");

module.exports = (client, Discord) => {
  const logFolders = fs.readdirSync("./logs");

  for (const folder of logFolders) {
    const logFiles = fs.readdirSync(`./logs/${folder}`).filter((file) => file.endsWith(".js"));

    for (file of logFiles) {
      require(`../logs/${folder}/${file}`)(client, Discord);
    }
  }
};
