// making this because dumping everything in the messageCreate.js event file will be a pain.
const bot = require("./bot.js")
const { Collection } = require("discord.js")
const { readdirSync } = require("fs")

async function loadUtils() {
	bot.utils = new Collection()
	console.log("Load Utils!")
	let loadUtilsDirs = await readdirSync("./src/utils").filter(dirs => dirs)
	for(dirs of loadUtilsDirs) {
		const loadUtilsFile = readdirSync(`./src/utils/${dirs}`).filter(file => file.endsWith(".js"))
		for( file of loadUtilsFile ) {
			const util = require(`../utils/${dirs}/${file}`)
			console.log(`Loading util: ${file} from ${dirs}!`)
			bot.utils.set(util.name.toLowerCase(), util)
			delete require.cache[require.resolve(`../utils/${dirs}/${file}`)]
		}
	}
}

loadUtils()
