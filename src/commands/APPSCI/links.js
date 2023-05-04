const { EmbedBuilder } = require("discord.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "appsciurl",
	aliases: [],
	category: "appsci",
	desc: "Sends urls in relation to app sci.",
	utilisation: "appsciurl",
	async execute(bot, messageCreate, args, prefix) {
		const embed = new EmbedBuilder()
		embed.setTitle("AppSci URL list:")
		embed.setFooter({ text: Default.DefaultFooterText })
		embed.setColor(Default.DefaultEmbedColor)
		embed.setDescription("Links for AppSci")
		embed.setTimestamp()
		embed.addFields(
			{ name: "Miro", value: "[Click me!](https://miro.com/app/board/uXjVO3j9wyY=/?share_link_id=711206166008)", inline: true }
		)
		return messageCreate.channel.send({ embeds: [embed] })
	}
}
