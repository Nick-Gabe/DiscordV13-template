# DiscordV13 Template
It is meant to be used as a solid base for your Discord bot, it already comes with a main file, command and event Handler, along with permission verification, command aliases and environment variables.

## How to use?
- Clone or download this repository `git clone https://github.com/Nick-Gabe/DiscordV13-template`

- Run the command "npm install" to install all the project dependencies.

- After that, in the root folder, create a file called ".env". You will store the variable and sensitive information here. Use the .env.example as an example and fill the .env file you created with your information.
```txt
BOT_TOKEN=ABCDEFGHIJKLMNOPQRSTUVWXYZ
PREFIX=?
```

- Now you need to specify the intents of your bot in the main file. By default it comes with two intents, Guilds and Guild messages.
```js
// main.js - line 4
const client = new Client({
    intents: [
        // Set the permissions your bot needs here
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
```

- After setting them up, customize "package.json" and fill with your project information, also change the name in "package-lock.json".
- Now just run the command "npm run dev" and the bot shall start running, and it will automatically restart whenever you make a change to the code. (press Ctrl+C in the terminal to stop it). If you want it to start only once and don't update when you make changes, instead use "npm start".

## Details
Credits to this repository are not needed, it is free to use.
But if this helped you, you can give it a star as a thanks :)