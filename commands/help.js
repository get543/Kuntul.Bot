module.exports = {
  name: "help",
  description: "This sends the list of commands!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#12A5F1")
      .setTitle("Baca yaa sayang")
      .setURL("https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw")
      .setDescription("ini sayang.. pake yang bener yaa")
      .addFields(
        { name: "~akucintakamu", value: "fancy fuck you text" },
        { name: "~ping", value: "cek ping" },
        { name: "~dick", value: "dick istimewa" },
        { name: "~hei", value: "apa oi" },
        { name: "~leave", value: "leave voice channel" },
        { name: "~meme", value: "meme reddit" },       
        { name: "~sekai", value: "high in the sekai" },
        { name: "~help", value: "list semua command" },
        { name: "~isepkontolgw", value: "anime isep kontol" },
        { name: "~tititbesar", value: "uwaw titit besar sekali nich" },
        { name: "~idulfitri", value: "selamat idul fitri dari semua pihak" },
        { name: "~colbar", value: "khusus untuk para kaum duo colbar" },
        )
        .addFields(
		{ name: '\u200B', value: '\u200B' },
        { name: '~play', value: "play music ( tapi gak bisa cuk )" },  
		{ name: '~queue', value: 'liat queue music', inline: true },
	    )
	    .addField('~skip', 'skip playing music', true)

    message.channel.send(newEmbed);
  },
};
