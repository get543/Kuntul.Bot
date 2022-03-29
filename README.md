# Kuntul.Bot
An Audit Log bot on your discord server
There are some bugs here and there expecially on role and user, member update
```
-----------------------------------------------------
|   view message that are deleted, edited, purged   |
|   view deleted image                              |
|   view role (created, deleted, updated            |
|   view memberkicked                               |
|   view memberbanned                               |
-----------------------------------------------------
```

## Host it yourself
1. Create a bot account on https://discord.com/developers
2. Click the application and in the 'bot' section copy the bot token 
3. Download the [source code](https://github.com/get543/Kuntul.Bot/archive/refs/heads/main.zip)
4. Create a `.env` file in the same folder as `index.js` file, containing:
```bash
DISCORD_TOKEN = put-something-here

PREFIX = ~

DELETE_CHANNEL_ID = blablabla
```
5. Install and Run 
```bash
# install missing dependencies
npm install

# run it 
npm start
```