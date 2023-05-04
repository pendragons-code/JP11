const axios = require("axios")
const env = require("dotenv").config()
const { EmbedBuilder } = require("discord.js")
const { db } = require("../../loaders/database.js")
const { Default } = require("../../../config.json")
module.exports = {
	name: "spweather",
	aliases: ["weatheratsp"],
	desc: "Sends you the weather status at Singapore Poly",
	utilisation: "weatheratsp",
	category: "utility",
	async execute(bot, messageCreate, args, mainPrefix) {
		let maximumCallsPerMonth = await db.get("callsPerMonth")
		if(maximumCallsPerMonth !== null && maximumCallsPerMonth >= 100) return messageCreate.channel.send("This service is not available now.") // if the db fetches null and the if statement does not check for a null, it will just fucking crash
		let options = {
			method: "GET",
			url: "https://ai-weather-by-meteosource.p.rapidapi.com/current",
			params: {
				lat: "1.3098N",
				lon: "103.7775E",
				timezone: "auto",
				language: "en",
				units: "metric"
			},
			headers: {
				"content-type": "application/octet-stream",
				"X-RapidAPI-Key": process.env.weatherAPIKey,
				"X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com"
			}
		}
		try {
			let responseWeatherData = await axios.request(options)
			let dataPoint = responseWeatherData.data.current // dataPoint, as in the POINT where the whole fucking schema that matters
			let embed = new EmbedBuilder()
			embed.setTitle("Weather at Singapore poly.")
			embed.setColor(Default.DefaultEmbedColor)
			embed.setTimestamp()
			embed.addFields(
				{ name: "Summary:", value: dataPoint.summary, inline: true },
				{ name: "Average Temperature:", value: `${dataPoint.temperature}°C`, inline: true },
				{ name: "Wind Chill:", value: `${dataPoint.wind_chill}°C`, inline: true },
				{ name: "Dew Point:", value: `${dataPoint.dew_point}°C`, inline: true },
				{ name: "Feels Like:", value: `${dataPoint.feels_like}°C`, inline: true },
				{ name: "Wind Direction:", value: `${dataPoint.wind.dir}` , inline: true },
				{ name: "Wind Speed:", value: `${dataPoint.wind.speed} Km/h`, inline: true },
				{ name: "Visibility:", value: `${dataPoint.visibility}` , inline: true },
				{ name: "UV Index:", value: `${dataPoint.uv_index}` , inline: true },
				{ name: "Humidity:", value: `${dataPoint.humidity}` , inline: true },
				{ name: "Pressure:", value: `${dataPoint.pressure}` , inline: true },
				{ name: "Ozone:", value: `${dataPoint.ozone}` , inline: true },
				{ name: "Cloud Cover:", value: `${dataPoint.cloud_cover}` , inline: true },
				{ name: "Precipitation:", value: `${dataPoint.precipitation.total} (${dataPoint.precipitation.type})` , inline: true }
			)
			embed.setDescription("I made this because the weather at singapore poly was quite weird. (I live at Bukit Merah)")
			embed.setFooter({ text: "Predicted/Current weather fetched could be wrong. The location we are focusing on is: 1.3098N and 103.7775E" }) // I say predicted because they got the current weather wrong and 5 mins later it was the result of /current
			await db.add("callsPerMonth", 1)
			return messageCreate.channel.send({ embeds: [embed] })
		} catch(error) {
			console.error(error)
			return messageCreate.channel.send("I am sorry, this service is not available right now!")
		}
	}
}
