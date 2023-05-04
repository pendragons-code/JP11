const { EmbedBuilder } = require("discord.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "spslang",
	aliases: ["slang"],
	category: "utility",
	desc: "List of common phrases (slangs) that are used in SP.",
	utilisation: "spslang",
	async execute(bot, messageCreate, args, mainPrefix) {
		let slangEmbed = new EmbedBuilder()
		slangEmbed.setColor(Default.DefaultEmbedColor)
		slangEmbed.setFooter({ text: Default.DefaultFooterText })
		slangEmbed.setTimestamp()
		slangEmbed.setTitle("List of common slangs.")
		slangEmbed.setDescription("This list is helpful to remember!")
		slangEmbed.addFields(
			{ name: "FC", value: "**F**ood **C**ourt. (e.g.: 'Let's go FC-1 for lunch!')", inline: true },
			{ name: "ATS", value: "**A**ttendance **T**raking **S**ystem. (Usually used to refer to the code issued before every class to mark your attendance.)", inline: true },
			{ name: "PT", value: "**P**ersonal **T**utor. (Essentially your homeroom teacher or form teacher)", inline: true },
			{ name: "Brightspace", value: "**Brightspace**, one of the online platforms where course notes and shit get assigned.", inline: true },
			{ name: "TBLS/SPA/LAMS", value: "**LAMS** refers to the company that manages the system, while the platform is known as SPA (**S**elf and **P**eer **A**ssessment) or TBLS (**T**eam **B**ased **L**earning **S**ystem).", inline: true },
			{ name: "MST", value: "The officially endorsed platform used by the school for communication, which is actually really stupid and unintuitive to use. (**M**icro**S**oft **T**eams)", inline: true },
			{ name: "IChat/outlook", value: "Outlook email client. Also a very messy and hard to use platform.", inline: true }
		)
		return messageCreate.channel.send({ embeds: [ slangEmbed ] })
	}
}
