const util = require('minecraft-server-util');

async function minecraftServerStatus(message, retries = 3) {
    const host = 'vanillachilling.aternos.me'
    const port = 49114
    const description = `_It began as a peaceful vanilla world._\n` +
                        `_Then the Nether shifted—twisting into a realm of fire and forgotten kings. Whispers speak of **Incendium**, a war-scarred domain ruled by ancient bosses, their names lost to flame and fury._`

    try {
        await message.channel.sendTyping()
        const result = await util.status(host, port ,{
            timeout: 50000
        })
        const { players, version} = result

        await message.reply(
            `✅ **Tình trạng Server!**\n` +
            `Máy chủ: ${host}\n` +
            `Người chơi: ${players.online}/${players.max}\n` +
            `🛠️ Phiên bản: ${version.name}\n\n` +
            `${description}`
        )
    } catch (error){
        console.error(error)
        if (retries > 0){
            return minecraftServerStatus(message, retries - 1)
        } else {
            await message.reply("Đã có lỗi phát sinh không mong muốn")
        }
    }
}

module.exports = { minecraftServerStatus }
