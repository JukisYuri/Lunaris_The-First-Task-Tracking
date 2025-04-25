const { minecraftAternosWebsite } = require("../utilities/minecraftAternosWebsite")

async function controllingAternosWebsite(message, puppeteer){
    try {
        if (message.content.startsWith("!startmc"))
        return minecraftAternosWebsite(message, puppeteer)
    } catch (error){
        console.error(error)
        await message.reply("Đã có lỗi xảy ra")
    }
}

module.exports = { controllingAternosWebsite }