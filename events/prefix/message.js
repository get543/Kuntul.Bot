const prefix = process.env.PREFIX;

module.exports = async (Discord, client, message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

  try {
    command.execute(client, message, args, cmd, Discord);
  } catch (error) {
    console.error(error);
  }
};
