module.exports = async (client) => {
    client.on("ready", () => {
        console.log("Kuntul is Online!");

        client.user.setPresence({
            activity: {
                name: "this dumb fuck",
                type: "COMPETING",
            },
            status: "dnd",
        });
    });
};