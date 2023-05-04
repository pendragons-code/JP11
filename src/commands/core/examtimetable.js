const { EmbedBuilder } = require("discord.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "examtime",
	aliases: ["examtimetable"],
	category: "core",
	desc: "Sends a link that holds details of the exam time tables.",
	utilisation: "examtime",
	async execute(bot, messageCreate, args, mainPrefix) {
		let examTimeTableEmbed = new EmbedBuilder()
		examTimeTableEmbed.setTitle("Exam Time Table Link")
		examTimeTableEmbed.setURL("https://www.sp.edu.sg/sp/student-services/osc-overview/student-handbook/exam-time-table-and-location")
		examTimeTableEmbed.setColor(Default.DefaultEmbedColor)
		examTimeTableEmbed.setFooter({ text: Default.DefaultFooterText })
		examTimeTableEmbed.setTimestamp()
		examTimeTableEmbed.setDescription("There is prolly not a lot of things on the site, because most of the shit is on the SP app.")
		return messageCreate.channel.send({ embeds: [examTimeTableEmbed] })
	}
}
