const { EmbedBuilder } = require("discord.js")
const { Default } = require("discord.js")
module.exports = {
	name: "pfp",
	aliases: ["pfpinfo"],
	category: "utility",
	desc: "Information and a guide for PFP students.",
	utilisation: "pfp",
	async execute(bot, messageCreate, args, mainPrefix) {
		let pfpEmbed = new EmbedBuilder()
		pfpEmbed.setColor(Default.DefaultEmbedColor)
		pfpEmbed.setTitle("PFP guide")
		pfpEmbed.setURL("https://www.sp.edu.sg/sp/admissions/admissions-exercises/polytechnic-foundation-programme-(pfp)/home#sb")
		pfpEmbed.setTimestamp()
		pfpEmbed.setDescription("Just read LAH!")
		pfpEmbed.setFooter({ text: Default.DefaultFooterText })
	}
}
