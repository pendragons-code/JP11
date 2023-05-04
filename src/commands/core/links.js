const { EmbedBuilder } = require("discord.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "link",
	aliases: [],
	category: "core",
	utilisation: "link <help / name>",
	desc: "Sends you useful links so you don't have to search it online.",
	async execute(bot, messageCreate, args, mainprefix) {
		const URLEmbed = new EmbedBuilder()
		URLEmbed.setColor(Default.DefaultEmbedColor)
		URLEmbed.setFooter({ text: Default.DefaultFooterText })
		URLEmbed.setTimestamp()
		URLEmbed.setTitle("Useful URLs.")
		switch(args[0]) {
			case "brightspace":
				URLEmbed.setURL("https://splms.polite.edu.sg/")
				URLEmbed.setDescription("Brightspace!")
				messageCreate.channel.send({ embeds: [URLEmbed] })
				break;
			case "politemall":
				URLEmbed.setURL("https://politemall.polite.edu.sg/")
				URLEmbed.setDescription("Politemall!")
				messageCreate.channel.send({ embeds: [URLEmbed] })
				break;
			case "itsupport":
				URLEmbed.setURL("https://spapps2.sp.edu.sg/sites/faq")
				URLEmbed.setDescription("IT support!")
				messageCreate.channel.send({ embeds: [URLEmbed] })
				break;
			case "ichat (outlook)":
				URLEmbed.setURL("https://outlook.office.com/")
				URLEmbed.setDescription("ichat")
				messageCreate.channel.send({ embeds: [URLEmbed] })
				break;
			case "lap":
				URLEmbed.setURL("https://sp-lap.collegesparc.com/")
				URLEmbed.setDescription("LAP (SP Learning Advisement Portal)")
				messageCreate.channel.send({ embeds: [URLEmbed] })
				break;
			case "tbl":
				URLEmbed.setURL("https://tbl.lams.sg/lams/")
				URLEmbed.setDescription("Team Based Learning System")
				messageCreate.channel.send({ embeds: [URLEmbed] })
				break;
			case "aleks":
				URLEmbed.setURL("https://www.aleks.com/login")
				URLEmbed.setDescription("ALEKS")
				messageCreate.channel.send({ embeds: [URLEmbed] })
				break;
			default:
				URLEmbed.setURL("https://www.sp.edu.sg/sp/about-sp/e-services")
				URLEmbed.setDescription("All Links.")
				URLEmbed.addFields(
					{ name: "Brightspace", value: "[Click Me!](https://splms.polite.edu.sg/)", inline: true },
					{ name: "Politemall", value: "[Click Me!](https://politemall.polite.edu.sg/)", inline: true },
					{ name: "IT support", value: "[Click Me!](https://spapps2.sp.edu.sg/sites/faq)", inline: true },
					{ name: "IT chat (outlook)", value: "[Click Me!](https://outlook.office.com)", inline: true },
					{ name: "LAP (SP Learning Advisement Portal)", value: "[Click Me!](https://sp-lap.collegesparc.com/)", inline: true },
					{ name: "TBL (Team Based Learning System)", value: "[Click Me!](https://tbl.lams.sg/lams)", inline: true },
					{ name: "ALEKS", value: "[Click Me!](https://www.aleks.com/login)", inline: true }
				)
				return messageCreate.channel.send({ embeds: [URLEmbed] })
		}
	}
}
