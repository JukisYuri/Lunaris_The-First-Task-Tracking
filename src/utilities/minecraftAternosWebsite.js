async function minecraftAternosWebsite(message, puppeteer, retries = 3) {
    try {
        (async () => {
            const browser = await puppeteer.launch({
                headless: "new",
                executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", 
                userDataDir: "C:\\Users\\Admin\\AppData\\Local\\Google\\Chrome\\User Data", // đường dẫn profile
                defaultViewport: null,
                ignoreDefaultArgs: ['--disable-extensions']
            })

            const page = await browser.newPage()
            await console.log("Đã mở trang mới")
            await page.goto("https://aternos.org/server/", { waitUntil: 'networkidle2'})
            await message.reply("Đang truy cập vào Aternos website")
            const status = await page.$eval(".statuslabel-label", el => el.textContent.trim());
            if (status === "Offline") {
                await page.click("#start")
                await message.reply("Đã bật server, hãy chờ một vài phút")
                if (status === "Queue"){
                    await message.reply("Server đang trong hàng đợi, hãy chờ trong vòng vài phút")
                }
            } else {
                await message.reply("Server đã được bật trước đó")
            }
            await browser.close()
        })()
    } catch (error){
        console.error(error)
        if (retries > 0){
            return minecraftAternosWebsite(message, puppeteer, retries - 1)
        } else {
            await message.reply("Đã có lỗi phát sinh không mong muốn")
        }
    }
}

module.exports = { minecraftAternosWebsite }