module.exports = {
  name: "helphere",
  description: "list commands and send it as a file",
  execute(client, message, args, cmd, Discord) {

	// const { MessageAttachment } = require("discord.js");

	const file = new Discord.MessageAttachment("./kuntul-command-file.txt"); 
	
	message.channel.send(file); 
  },
};
