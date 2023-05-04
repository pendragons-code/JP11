const env = require("dotenv").config()
require("./src/loaders/database")
const {bot} = require("./src/loaders/bot.js")
require("./src/loaders/utils.js")
require("./src/loaders/events.js")
require("./src/loaders/messageCommands.js")
bot.login(process.env.token)
console.log(`Hanging on for dear life on: ${process.pid}`)
process.traceDeprecation = true
