const { AttachmentBuilder } = require('discord.js');

async function capturePictures(message, puppeteer, retries = 3) {
    try {
        (async () => {
            const browser = await puppeteer.launch({
              headless: "new",
              executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", 
              userDataDir: "C:\\Users\\Admin\\AppData\\Local\\Google\\Chrome\\User Data", // đường dẫn profile
              defaultViewport: null,
              ignoreDefaultArgs: ['--disable-extensions']
            });
          
            const page = await browser.newPage()
            await page.goto("https://www.facebook.com/doulanying", { waitUntil: 'networkidle2'})
            await page.screenshot({path: 'picture.png'})
            await browser.close()

            const attachment = new AttachmentBuilder('picture.png')
            await message.reply({content: 'Ảnh chụp:', files: [attachment] })

        })();
    } catch (error){
        console.error(error)
        if (retries > 0){
            capturePictures(message, puppeteer, retries - 1)
        } else {
            await message.reply("Đã phát sinh vấn đề không mong muốn")
        }
    }
}

module.exports = { capturePictures }