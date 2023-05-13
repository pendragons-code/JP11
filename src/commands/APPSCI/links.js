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
			{ name: "Periodic Table", value: "[Click Me!](https://teams.microsoft.com/_?culture=en-sg&country=sg#/pdf/viewer/teams/https:~2F~2Fichatspedu.sharepoint.com~2Fteams~2FCP901YJP011A11FromM365~2FShared%20Documents~2FGeneral~2FPeriodic%20Table%20Revised.pdf?threadId=19:9QWg5u8j0OOmuya68wwCE3U_B4YYUVWPtekU6jJPgxc1@thread.tacv2&messageId=1682304020507&baseUrl=https:~2F~2Fichatspedu.sharepoint.com~2Fteams~2FCP901YJP011A11FromM365&fileId=61ac340f-5a07-4a6d-9789-4948e6da32ef&ctx=chiclet&viewerAction=view)", inline: true },
			{ name: "Miro", value: "[Click me!](https://miro.com/app/board/uXjVO3j9wyY=/?share_link_id=711206166008)", inline: true }
		)
		return messageCreate.channel.send({ embeds: [embed] })
	}
}
