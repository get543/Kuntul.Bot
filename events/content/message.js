module.exports = async (Discord, client, message) => {
  // message author is the bot
  if (message.author.id === client.user.id) return;

  const apaoi = ["oi", "woy", "cok", "uy", "oit", "oy", "cuk"];

  const luanjing = ["anjing", "ajg", "anjg"];

  const bodo = ["masa", "masa?"];

  // response to content of the message
  if (apaoi.includes(message.content.toLowerCase())) {
    message.channel.send(`apa oi 👾`);
  } else if (message.content.toLowerCase() == "yo") {
    message.channel.send(`wassap megi 😎`);
  } else if (message.content.toLowerCase() == "gratisan") {
    message.channel.send(`$wa`);
  } else if (message.content.toLowerCase() == "kon") {
    message.channel.send(`tol`);
  } else if (message.content.toLowerCase() == "pan") {
    message.channel.send(`tek`);
  } else if (luanjing.includes(message.content.toLowerCase())) {
    message.channel.send(`lu anjing`);
  } else if (message.content.toLowerCase() == "lu") {
    message.channel.send(`lu kali`);
  } else if (message.content.toLowerCase() == "tot") {
    message.channel.send(`apa mau gw kentot`);
  } else if (message.content.toLowerCase() == "1+1") {
    message.channel.send(`3`);
  } else if (message.content.toLowerCase() == "pinter") {
    message.channel.send(`jelas`);
  } else if (message.content.toLowerCase() == "oi tot") {
    message.channel.send(`apa mau gw kentot`);
  } else if (message.content.toLowerCase() == "bodoh") {
    message.channel.send(`lu bodoh`);
  } else if (message.content.toLowerCase() == "gw") {
    message.channel.send(`emang lu`);
  } else if (message.content.toLowerCase() == "seriusan") {
    message.channel.send(`serius`);
  } else if (message.content.toLowerCase() == "boong") {
    message.channel.send(`kok tau`);
  } else if (message.content.toLowerCase() == "goblok") {
    message.channel.send(`lu goblok`);
  } else if (message.content.toLowerCase() == "kuy") {
    message.channel.send(`kuy lah`);
  } else if (message.content.toLowerCase() == "panik ga") {
    message.channel.send(`panik lah masa engga`);
  } else if (message.content.toLowerCase() == "by one") {
    message.channel.send(`kuyy`);
  } else if (message.content.toLowerCase() == "pubg") {
    message.channel.send(`langsung`);
  } else if (message.content.toLowerCase() == "pap dong") {
    message.channel.send(`ewe`);
  } else if (message.content.toLowerCase() == "lol") {
    message.channel.send(`kontol dan tolol`);
  } else if (message.content.toLowerCase() == "pantasan") {
    message.channel.send(`pantat sans 😎`);
  } else if (message.content.toLowerCase() == "konteks") {
    message.channel.send(`kontol dan seks`);
  } else if (message.content.toLowerCase() == "blok") {
    message.channel.send(`blok goblok`);
  } else if (message.content.toLowerCase() == "asu") {
    message.channel.send(`first time?`);
  } else if (message.content.toLowerCase() == "2+2") {
    message.channel.send(`5`);
  } else if (message.content.toLowerCase() == "makan") {
    message.channel.send(`makan bang`);
  } else if (message.content.toLowerCase() == "Assalamualaikum") {
    message.channel.send(`Waalaikumsalam`);
  } else if (message.content.toLowerCase() == "ez cok") {
    message.channel.send(`set set`);
  } else if (message.content.toLowerCase() == "good boy") {
    message.channel.send(`woof woof 🐶`);
  } else if (message.content.toLowerCase() == "cups") {
    message.channel.send(`biasa, cupu si anak dajjal`);
  } else if (message.content.toLowerCase() == "fix") {
    message.channel.send(`fix no debat`);
  } else if (message.content.toLowerCase() == "anjay") {
    message.channel.send(`anjay dong`);
  } else if (message.content.toLowerCase() == "sabi") {
    message.channel.send(`sabi lah`);
  } else if (message.content.toLowerCase() == "ewe") {
    message.channel.send(`kuy ewe`);
  } else if (message.content.toLowerCase() == "tolol") {
    message.channel.send(`lu tolol`);
  } else if (bodo.includes(message.content.toLowerCase())) {
    message.channel.send(`bodo`);
  } else if (message.content.toLowerCase() == "bruh") {
    message.channel.send(`╭━━╮╱╱╱╱╱╭╮
┃╭╮┃╱╱╱╱╱┃┃
┃╰╯╰┳━┳╮╭┫╰━╮
┃╭━╮┃╭┫┃┃┃╭╮┃
┃╰━╯┃┃┃╰╯┃┃┃┃
╰━━━┻╯╰━━┻╯╰╯`);
  } else if (message.content.toLowerCase() == "ok ger") {
    message.channel.send(`
      ░█████╗░██╗░░██╗  ░██████╗░███████╗██████╗░
      ██╔══██╗██║░██╔╝  ██╔════╝░██╔════╝██╔══██╗
      ██║░░██║█████═╝░  ██║░░██╗░█████╗░░██████╔╝
      ██║░░██║██╔═██╗░  ██║░░╚██╗██╔══╝░░██╔══██╗
      ╚█████╔╝██║░╚██╗  ╚██████╔╝███████╗██║░░██║
      ░╚════╝░╚═╝░░╚═╝  ░╚═════╝░╚══════╝╚═╝░░╚═╝`);
  } else if (message.content.toLowerCase() == "hmm") {
    message.channel.send(`
      ⣿⣿⣿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠿⠿⠛⢿⣿⣿
      ⣿⣿⢡⡄⣀⣂⣀⣂⠀⠈⠹⣿⣿⡿⠉⠀⠀⣀⣤⣤⣄⠀⢀⣿⣿
      ⣿⣿⣮⡤⢋⡉⠉⠉⠙⠈⢸⣿⣿⡇⠀⠀⡀⣀⠀⠠⠈⠙⢦⣿⣿
      ⣿⣿⣿⣧⣤⣾⣷⣴⣾⣿⣿⣿⣿⣷⡀⠀⢿⣿⣶⣷⣿⣷⣶⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡙⡹⣿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠛⠛⠢⢽⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣤⣤⣤⣄⣂⣀⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠉⠁⠀⠀⠀⠁⠀⠀⠙⠻⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣶⣶⠶⠿⣿⣷⠆⡀⢠⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣤⣤⣷⣿⣿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`);
  } else if (message.content.toLowerCase() == "hehehehe") {
    message.channel.send(`
      ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣿
      ⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣠⣤⣴⣶⣶⣶⣶⣤⡀⠈⠙⢿
      ⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠈
      ⣿⣿⣿⣿⣿⠁⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
      ⣿⣿⣿⣿⣿⡄⠄⠄⠄⠙⠻⠿⣿⣿⣿⣿⠿⠿⠛⠛⠻⣿⡄⠄
      ⣿⣿⣿⣿⣿⡇⠄⠄⠁ ⭕ ⠄⢹⣿⡗⠄ ⭕ ⢄⡀⣾
      ⣿⣿⣿⣿⣿⡇⠘⠄⠄⠄⢀⡀⠄⣿⣿⣷⣤⣤⣾⣿⣿⣿⣧⢸
      ⣿⣿⣿⣿⣿⡇⠄⣰⣿⡿⠟⠃⠄⣿⣿⣿⣿⣿⡛⠿⢿⣿⣷⣾
      ⣿⣿⣿⣿⣿⣿⡄⠈⠁⠄⠄⠄⠄⠻⠿⢛⣿⣿⠿⠂⠄⢹⢹⣿
      ⣿⣿⣿⣿⣿⣿⣿⡐⠐⠄⠄⣠⣀⣀⣚⣯⣵⣶⠆⣰⠄⠞⣾⣿
      ⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠈⠛⠿⠿⠿⣻⡏⢠⣿⣎⣾⣿⣿
      ⣿⣿⣿⣿⣿⣿⡿⠟⠛⠄⠄⠄⠄⠙⣛⣿⣿⣵⣿⡿⢹⡟⣿⣿
      ⣿⠿⠿⠋⠉⠄⠄⠄⠄⠄⠄⠄⣀⣠⣾⣿⣿⣿⡟⠁⠹⡇⣸⣿
      ⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠿⠿⠛⠋⠄⣸⣦⣠⣿⣿`);

    // chemistry stuff
  } else if (message.content.toLowerCase() == "deret volta") {
    message.channel.send(
      `**Li**hat **K**alau **Ba**pak **Ca**mat **Na**nti **M**enin**g**gal **Al**marhum **M**i**n**ta **Z**ai**n**ab **C**a**r**i **F**e**r**i **C**e**d**ia **Co**ba **Ni**kah **S**a**n**a **P**em**b**antu **H**afiz **Cu**mi **H**an**g**us **Ag**ak **P**ai**t** **Au** ah`
    );
  } else if (message.content.toLowerCase() == "alkali") {
    message.channel.send(
      `**H**ai **Li**na **K**alau **R**o**b**i **Cs** **Fr**ens  \`Gol IA\``
    );
  } else if (message.content.toLowerCase() == "alkali tanah") {
    message.channel.send(
      `**Be**li **M**an**g**ga **Ca**mpur **S**i**r**up **Ba**nyak **Ra**sa  \`Gol IIA\``
    );
  } else if (message.content.toLowerCase() == "halogen") {
    message.channel.send(
      `**F**ilm **C**har**l**es **Br**onz **I**daman **At**eng  \`Gol VIIA\``
    );
  } else if (message.content.toLowerCase() == "gas mulia") {
    message.channel.send(
      `**He**bat **Ne**nek **Ar**di **K**a**r**ena **Xe**nang **Re**nang  \`Gol VIIIA\``
    );
  } else if (message.content.toLowerCase() == "unsur transisi") {
    message.channel.send(
      `**Sc**andium, **Ti**tanium, **V**anadium, **C**h**r**om, **M**a**n**gan, **Fe**rum, **Co**balt, **Ni**kel, **Cu**prum, **Z**i**n**c  \`Periode 4\``
    );
  } else if (message.content.toLowerCase() == "ion kompleks") {
    message.channel.send(`**\`MIK = AP + L . BK\`**`);
  } else if (message.content.toLowerCase() == "unsur unsur periode 3") {
    message.channel.send(
      `**Na**nti **M**in**g**gu **Al**ip **Si**buk **P**acaran **S**ama **Cl** **Ar**a`
    );
  }
};
