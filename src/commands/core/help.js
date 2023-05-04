const { EmbedBuilder } = require("discord.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "help",
	aliases: ["commands"],
	category: "core",
	desc: "Sends list of commands on this bot!",
	utilisation: "help <category/command name>",
	async execute(bot, messageCreate, args, mainPrefix) {
		const commander = bot.messageCommands.filter(x => x)
		const commanderCategory = bot.messageCommands.map(u => u.category)
		let categoryArray = []
		for (categoryName of commanderCategory) if(!categoryArray.includes(categoryName)) categoryArray.push(categoryName)
		let helpEmbed = new EmbedBuilder()
		helpEmbed.setColor(Default.DefaultEmbedColor)
		helpEmbed.setTimestamp()
		helpEmbed.setFooter({ text: Default.DefaultFooterText })
		helpEmbed.setDescription(`Prefix is ${mainPrefix}. This bot has ${commander.size} commands!`)
		if(!args[0]) {
			helpEmbed.setTitle("List of command categories!")
			helpEmbed.addFields(
				{ name: "Available categories!", value: "` " + "jp11 help <category> `\n\n`" + categoryArray.join("`, `") + "`", inline: true }
			)
			return messageCreate.channel.send({ embeds: [helpEmbed] })
		}
		if(categoryArray.includes(args[0])) {
			let categorySpecificCommands = bot.messageCommands.filter(commands => commands.category === args[0])
			helpEmbed.setTitle("List of commands in this category!")
			helpEmbed.addFields(
				{ name: "Avaliable commands!", value: "`" + categorySpecificCommands.map(cmd => cmd.name).join("`, `") + "`", inline: true }
			)
			return messageCreate.channel.send({ embeds: [helpEmbed] })
		}
		const searchCommand = bot.messageCommands.get(args.join(" ").toLowerCase()) || bot.messageCommands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()))
		if(!searchCommand) return messageCreate.channel.send("I did not find this command!")
		helpEmbed.setTitle("Command utilisation!")
		helpEmbed.addFields(
			{ name: "Name", value: searchCommand.name, inline: true },
			{ name: "Category", value: searchCommand.category, inline: true },
			{ name: "Alias(es)", value: searchCommand.aliases.length < 1 ? "None" : searchCommand.aliases.join(", "), inline: true },
			{ name: "Utilisation", value: searchCommand.utilisation, inline: true },
			{ name: "Description", value: searchCommand.desc }
		)

		return messageCreate.channel.send({ embeds: [ helpEmbed ] })
	}
}
