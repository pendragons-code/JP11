const { EmbedBuilder } = require("discord.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "phytest",
	aliases: [],
	category: "phy",
	utilisation: "phytest",
	desc: "Sends a schedule of the physics test",
	async execute(bot, messageCreate, args, prefix) {
		const phyEmbed = new EmbedBuilder()
		phyEmbed.setTitle("Physics")
		phyEmbed.setDescription("Test Dates:")
		phyEmbed.setTimestamp()
		phyEmbed.setColor(Default.DefaultEmbedColor)
		phyEmbed.setFooter({ text: Default.DefaultFooterText })
		phyEmbed.setURL("https://cdn.discordapp.com/attachments/1100406788014227458/1108834263975088229/image.png")
		return messageCreate.channel.send({ embeds: [phyEmbed] })
	}
}
