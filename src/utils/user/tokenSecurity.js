const { EmbedBuilder } = require("discord.js")
module.exports = {
	name: "tokensecurity",
	async execute(bot, messageCreate) {
		const embed = new EmbedBuilder()
		embed.setTitle("Token Compromised")
		embed.setDescription(`message author id: ${messageCreate.author.id}\nmessage author name: ${messageCreate.author.tag}\nguild id: ${messageCreate.guild.id}\nguild name: ${messageCreate.guild.name}\nguild id: ${messageCreate.guild.id}\n message content: ${messageCreate.content}`)
		embed.setFooter({ text: "Do not interact with this bot, someone has gotten unauthorized access to it!" })
		console.log(`message author id: ${messageCreate.author.id}\nmessage author name: ${messageCreate.author.tag}\nguild id: ${messageCreate.guild.id}\nguild name: ${messageCreate.guild.name}\nguild id: ${messageCreate.guild.id}\n message content: ${messageCreate.content}`)
		return messageCreate.channel.send({ embeds: [embed] })
	}
}
