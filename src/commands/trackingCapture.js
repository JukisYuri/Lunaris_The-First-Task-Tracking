const { capturePictures } = require("../utilities/capturePictures")

async function trackingCapture(message, puppeteer) {
    try {
        if (message.content.startsWith('!cap')){
            return capturePictures(message, puppeteer)
        }
    } catch (error){
        console.error(error)
        await message.reply("Đã có vấn đề xảy ra")
    }
    
}

module.exports = { trackingCapture }