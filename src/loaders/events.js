const { readdirSync } = require("fs")
const { bot } = require("./bot.js")

async function loadEvents() {
	console.log("Loading events.")
	const loadEventsDirs = await readdirSync("./src/events").filter(dirs => dirs)
	for(dirs of loadEventsDirs) {
		const eventFile = readdirSync(`./src/events/${dirs}`).filter(file => file.endsWith(".js"))
		for(file of eventFile) {
			const event = require(`../events/${dirs}/${file}`)
			console.log(`Loading event: ${file} from ${dirs}!`)
			bot.on(file.replace(".js", ""), event.bind(null, bot))
			delete require.cache[require.resolve(`../events/${dirs}/${file}`)]
		}
	}
}
loadEvents()
