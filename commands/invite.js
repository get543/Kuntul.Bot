module.exports = {
  name: "invite",
  description: "send an invite link",
  execute(client, message, args, cmd, Discord) {
    const invite =
      "https://discord.com/oauth2/authorize?client_id=820299916475367485&scope=bot&permissions=8589934591";
    message.channel.send(`Invite me in this link: \n${invite}`);
  },
};
