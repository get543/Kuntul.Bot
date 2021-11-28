module.exports = {
  name: "help",
  description: "This sends the list of commands!",
  execute(client, message, args, cmd, Discord) {
    const prefix = process.env.PREFIX;

    if (args.join(" ") == "sendfile") {
      const file = new Discord.MessageAttachment("./kuntul-command-file.txt");

      message.channel.send(file);
    
    } else {

      const newEmbed = new Discord.MessageEmbed()
        .setColor("#12A5F1")
        .setTitle("click me 😇")
        .setURL("https://sourceb.in/67b7JvqU5K")
        .setDescription("ini sayang.. pake yang bener yaa")
        .addFields(
          { name: `${prefix}akucintakamu`, value: "fancy fuck you text" },
          { name: `${prefix}ping`, value: "cek ping" },
          { name: `${prefix}dick`, value: "dick istimewa" },
          { name: `${prefix}hei`, value: "apa oi" },
          { name: `${prefix}sekai`, value: "high in the sekai" },
          { name: `${prefix}help`, value: "list semua command" },
          { name: `${prefix}help sendfile`, value: "list command kirim sebagai file .txt" },
          { name: `${prefix}details`, value: "liat lebih detail lagi tentang setiap command nya" },
          { name: `${prefix}isepkontolgw`, value: "anime isep kontol" },
          { name: `${prefix}tititbesar`, value: "uwaw titit besar sekali nich" },
          { name: `${prefix}idulfitri`, value: "selamat idul fitri dari semua pihak" },
          { name: `${prefix}colbar`, value: "khusus untuk para kaum duo colbar" },
          { name: `${prefix}ohyeah`, value: "ohyeah mantap" },
          { name: `${prefix}gajah`, value: "emoticon gajah" },
          { name: `${prefix}bernyanyi`, value: "emoticon bernyanyi" },
          { name: `${prefix}invite`, value: "invite aku ges" },
          { name: `${prefix}okger`, value: "oke ger" },
          { name: `${prefix}bombchat`, value: "ξ" },
          { name: `${prefix}clear`, value: "clear message" },
          { name: `${prefix}fallguys`, value: "fall guys more like sussy guys" },
          { name: `${prefix}spider`, value: "mitsubishi spider emoticon" },
          { name: `${prefix}bacot`, value: "fancy bacot text" },
          { name: `${prefix}peace`, value: "yo peace" },
          { name: `${prefix}okcums`, value: "cums anime" },
          { name: `${prefix}nyah`, value: "nyah time" }
        );

      message.channel.send(newEmbed);
    }
  },
};
