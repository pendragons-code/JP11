module.exports = async (bot) => {
	setInterval(function() {
		bot.user.setActivity("Use 'jp11 help' for commands!")
	}, 3000)
	bot.guilds.cache.map(guild => {
		console.log(guild.name)
		console.log(guild.id)
	})
}
