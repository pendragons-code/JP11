const { bot } = require("./bot.js")
const { Collection } = require("discord.js")
const { readdirSync } = require("fs")


// I load these in async because there is a tendency for the bot to sometimes crash as other things that should load after sometimes just go out in the wrong order
async function loadMessageCommands() {
	bot.messageCommands = new Collection()
	console.log(`Loading messageCommands.`)
	let loadMessageCommandsDirs = await readdirSync("./src/commands").filter(dirs => dirs)
	for(dirs of loadMessageCommandsDirs) {
		const commandFile = readdirSync(`./src/commands/${dirs}`).filter(file => file.endsWith(".js"))
		for(file of commandFile) {
			const command = require(`../commands/${dirs}/${file}`)
			console.log(`Loading messageCommands: ${file} from ${dirs}!`)
			bot.messageCommands.set(command.name.toLowerCase(), command)
			delete require.cache[require.resolve(`../commands/${dirs}/${file}`)]
		}
	}
}

loadMessageCommands()
