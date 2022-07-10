module.exports = async (Discord, client, message) => {
  console.log(`${client.user.username} is Online!`);

  client.user.setPresence({
    activity: {
      name: "this dumb fuck",
      type: "COMPETING",
    },
    status: "dnd",
  });
};
