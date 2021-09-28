module.exports = {
  name: "help",
  description: "This sends the list of commands!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#12A5F1")
      .setTitle("Gw juga bisa baca konten message click me 😇")
      .setURL("https://sourceb.in/F45ufZVfDT")
      .setDescription("ini sayang.. pake yang bener yaa")
      .addFields(
        { name: "~akucintakamu", value: "fancy fuck you text" },
        { name: "~ping", value: "cek ping" },
        { name: "~dick", value: "dick istimewa" },
        { name: "~hei", value: "apa oi" },
        { name: "~meme", value: "meme reddit" },       
        { name: "~sekai", value: "high in the sekai" },
        { name: "~help", value: "list semua command" },
        { name: "~isepkontolgw", value: "anime isep kontol" },
        { name: "~tititbesar", value: "uwaw titit besar sekali nich" },
        { name: "~idulfitri", value: "selamat idul fitri dari semua pihak" },
        { name: "~colbar", value: "khusus untuk para kaum duo colbar" },
        { name: "~ohyeah", value: "ohyeah mantap" },
        { name: "~gajah", value: "emoticon gajah" },
        { name: "~bernyanyi", value: "emoticon bernyanyi" },
        { name: "~invite", value: "invite aku ges" },
        { name: "~okger", value: "oke ger" },
        { name: "~bombchat", value: "ξ" },
        { name: "~clear", value: "clear message" },
        )

    message.channel.send(newEmbed);
  },
};
