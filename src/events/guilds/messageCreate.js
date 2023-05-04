const { db } = require("../../loaders/database.js")
const { Default, Bot } = require("../../../config.json")
const env = require("dotenv").config()
module.exports = async (bot, messageCreate) => {
	// prefix is not made configurable because someone will prolly troll and change the default prefix
	// no perms BS because this is not a moderation bot, and everyone in the server has perms anyway.
	
	if(messageCreate.content.includes(process.env.token)) bot.utils.get("tokensecurity").execute(bot, messageCreate)
	let prefix = messageCreate.content.includes(Default.prefix) ? Default.prefix: `<@${Bot.BotID}>`
	if(messageCreate.author.bot || messageCreate.channel.type === "dm" || messageCreate.content.indexOf(prefix) !== 0) return
	const args = messageCreate.content.slice(prefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase()
	const cmd = bot.messageCommands.get(command) || bot.messageCommands.find(cmd => cmd.aliases && cmd.aliases.icludes(command))
	if(!cmd) return
	try {
		if(args[0] === "-h") return messageCreate.channel.send(cmd.utilisation)
		cmd.execute(bot, messageCreate, args, prefix)
		await db.push(`cmdsRan_${messageCreate.author.id}`, {
			message: messageCreate.content
		})
		.catch((error) => {
			console.error(error)
			return messageCreate.channel.send("Something went wrong!")
		})
	} catch(e) {
		console.error(error)
		return messageCreate.channel.send("Something went wrong!")
	}
}
