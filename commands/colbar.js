module.exports = {
  name: "colbar",
  description: "khusus untuk colbar",
  execute(client, message, args, cmd, Discord) {
    message.channel.send(`
    ░░░░█─────────────
    ░░░░▓█───────▄▄▀▀█
    ░░░░▒░█────▄█▒░░▄░
    ░░░░░░░▀▄─▄▀▒▀▀▀▄▄ 
    ░░░░░░░░░█▒░░░░▄▀─
    ▒▒▒░░░░▄▀▒░░░░▄▀──
    ▓▓▓▓▒░█▒░░░░░█▄───
    █████▀▒░░░░░█░▀▄──
    █████▒▒░░░▒█░░░▀▄─
    ███▓▓▒▒▒▀▀▀█▄░░░░█
    ▓██▓▒▒▒▒▒▒▒▒▒█░░░░
    ▓▓█▓▒▒▒▒▒▒▓▒▒█░░░░
    ░▒▒▀▀▄▄▄▄█▄▄▀░░░░░`);
  },
};
