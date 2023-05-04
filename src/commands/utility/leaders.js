const { EmbedBuilder } = require("discord.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "leaders",
	aliases: ["reps", "chers"],
	category: "utility",
	desc: "A list of people you should try to remember.",
	utilisation: "leaders",
	async execute(bot, messageCreate, args, mainPrefix) {
		let leadersEmbed = new EmbedBuilder()
		leadersEmbed.setTitle("List of leaders and teachers.")
		leadersEmbed.setTimestamp()
		leadersEmbed.setColor(Default.DefaultEmbedColor)
		leadersEmbed.setFooter({ text: Default.DefaultFooterText })
		leadersEmbed.setDescription("I accidentally called APP SCI cher Mr Kok.")
		leadersEmbed.addFields(
			{ name: "Chairman", value: "Arti Prem", inline: true },
			{ name: "Vice-Chairman", value: "Brayden Ho Zheng Feng", inline: true },
			{ name: "Treasurer", value: "Liu junsun", inline: true },
			{ name: "Personal Tutor/FM", value: "Shaun Ho" },
			{ name: "App Sci", value: "Kwok Chen Ko", inline: true },
			{ name: "FLC", value: "Tan Ling Yan", inline: true },
			{ name: "FIT", value: "Sim Bee Len", inline: true },
			{ name: "AEC (FUCK THIS SUBJECT)", value: "Jeremiah Kwok", inline: true },
			{ name: "Phy", value: "Dr Darren Wong", inline: true },
			{ name: "WFL", value: "Joy", inline: true }
		)
		return messageCreate.channel.send({ embeds: [leadersEmbed] })
	}
}
