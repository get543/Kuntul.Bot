const fs = require("fs");

module.exports = (client, Discord) => {
  const load_dir = (categories) => {
    const eventFiles = fs.readdirSync(`./events/${categories}`).filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
      const event = require(`../events/${categories}/${file}`);
      const eventName = file.split(".")[0];

      client.on(eventName, event.bind(null, Discord, client));
    }
  };

  ["client", "content", "prefix", "stickers", "tag"].forEach((e) => load_dir(e));
};
