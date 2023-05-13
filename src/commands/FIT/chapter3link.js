// https://ichatspedu.sharepoint.com/teams/JP0111FITFromM365/_layouts/15/stream.aspx?id=%2Fteams%2FJP0111FITFromM365%2FShared%20Documents%2FGeneral%2FRecordings%2FExcel%20Ch3%20Exercises%2D20230511%5F081133%2DMeeting%20Recording%2Emp4
const { EmbedBuilder } = require("discord.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "excelformatlink",
	aliases: [],
	category: "FIT",
	description: "Send video link for FIT excel formatting.",
	utilisation: "excelformatlink",
	async execute(bot, messageCreate, args) {
		let embedWithLink = new EmbedBuilder()
		// I hate FIT as a subject not the nice teachers.
		embedWithLink.setURL("https://ichatspedu.sharepoint.com/teams/JP0111FITFromM365/_layouts/15/stream.aspx?id=%2Fteams%2FJP0111FITFromM365%2FShared%20Documents%2FGeneral%2FRecordings%2FExcel%20Ch3%20Exercises%2D20230511%5F081133%2DMeeting%20Recording%2Emp4")
		embedWithLink.setTitle("FIT Excel formatting video url.")
		embedWithLink.setColor(Default.DefaultEmbedColor)
		embedWithLink.setFooter({ text: Default.DefaultFooterText })
		embedWithLink.setDescription("This shit is useful.")
		embedWithLink.setTimestamp()
		return messageCreate.channel.send({ embeds: [embedWithLink] })
	}
}
