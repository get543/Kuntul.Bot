const { readdirSync } = require("fs");
const prefix = process.env.PREFIX;

module.exports = {
  name: "details",
  aliases: ["helpdetails", "helpdetail", "helpd", "detail"],
  description: "Shows all available bot commands.",
  execute(client, message, args, cmd, Discord) {
    const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/`).filter((file) => file.endsWith(".js"));

        const cmds = commands.map((command) => {
          let file = require(`../commands/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new Discord.MessageEmbed()
        .setTitle("📬 Butuh Bantuan? Ni List Semua Yang Bisa Gw Lakuin :")
        .setDescription(`ketik \`${prefix}details\` abis itu nama command buat lebih detailnya, Contoh: \`${prefix}details invite\`.`)
        .addFields(categories[10])
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);

    } else {
      const command = client.commands.get(args[0].toLowerCase()) || client.commands.find((c) => c.aliases && c.aliases.includes(args[0].toLowerCase()));

      if (!command) {
        const embed = new MessageEmbed().setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`).setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new Discord.MessageEmbed()
        .setTitle(`Command Details For ${args.join(" ")}:`)
        .addField("COMMAND:", command.name ? `\`${command.name}\`` : "No name for this command.")
        .addField("DESCRIPTION:", command.description ? command.description : "No description for this command.")
        .addField("ALIASES:", command.aliases ? `\`${command.aliases.join("` `")}\`` : "No aliases for this command.")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};
