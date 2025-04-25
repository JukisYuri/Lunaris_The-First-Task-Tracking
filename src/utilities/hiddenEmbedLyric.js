async function hiddenEmbedLyric(message) {
    try {
    let lyricTextOfHazyMoonLight = [
        `Hey girl, open the walls`,
        `Play with your dolls`,
        `We'll be a perfect family`,
        `When you walk away is when we really play`,
        `You don't hear me when I say`,
        `"Mom, please wake up`,
        `Dad's with a slut`,
        `And your son is smoking cannabis`,
        `No one ever listens`,
        `This wallpaper glistens`,
        `Don't let them see what goes down in the kitchen`,
        `Places, places`,
        `Get in your places`,
        `Throw on your dress and put on your doll faces`,
        `Everyone thinks that we're perfect`,
        `Please don't let them look through the curtains`,
        `Picture, picture, smile for the picture`,
        `Pose with your brother, won't you be a good sister?`,
        `Everyone thinks that we're perfect`,
        `Please don't let them look through the curtains`,
        `D-O-L-L-H-O-U-S-E`,
        `I see things that nobody else sees`,
        `D-O-L-L-H-O-U-S-E, I see things that nobody else sees`,
        `Hey girl, look at my mom`,
        `She's got it going on`,
        `Ha, you're blinded by her jewelry`,
        `When you turn your back`,
        `She pulls out a flask`,
        `And forgets his infidelity`,
        `Uh oh, she's coming to the attic, plastic`,
        `Go back to being plastic`,
        `No one ever listens`,
        `This wallpaper glistens`,
        `One day they'll see what goes down in the kitchen`,
        `Places, places`,
        `Get in your places`,
        `Throw on your dress and put on your doll faces`,
        `Everyone thinks that we're perfect`,
        `Please don't let them look through the curtains`,
        `Picture, picture, smile for the picture`,
        `Pose with your brother, won't you be a good sister?`,
        `Everyone thinks that we're perfect`,
        `Please don't let them look through the curtains`,
        `D-O-L-L-H-O-U-S-E`,
        `I see things that nobody else sees`,
        `D-O-L-L-H-O-U-S-E, I see things that nobody else sees`,
        `Hey girl (Hey girl)`,
        `Hey girl, open your walls`,
        `Play with your dolls`,
        `We'll be a perfect family`,
        `Places, places`,
        `Get in your places`,
        `Throw on your dress and put on your doll faces`,
        `Everyone thinks that we're perfect`,
        `Please don't let them look through the curtains`,
        `Picture, picture, smile for the picture`,
        `Pose with your brother, won't you be a good sister?`,
        `Everyone thinks that we're perfect`,
        `Please don't let them look through the curtains`,
        `D-O-L-L-H-O-U-S-E`,
        `I see things that nobody else sees`,
        `D-O-L-L-H-O-U-S-E, I see things that nobody else sees`

    ]
    let sentMessage = await message.channel.send("**Secret Start**")
    let welcomeText = ["3","2","1"]
    for (const text of welcomeText){
        await sentMessage.edit(`\`${text}\``);
        await new Promise(r => setTimeout(r, 1000)); // Đợi 1 giây
    }

        // Hiển thị lyric 
        for (const lyric of lyricTextOfHazyMoonLight) {
            let display = "";
            for (let i = 0; i < lyric.length; i++) {
                display = `${lyric.slice(0, i)}\`${lyric[i]}\`${lyric.slice(i + 1)}`
                await sentMessage.edit(display);
                await new Promise(r => setTimeout(r, 500)); // Hiệu ứng chạy từng chữ
            }
            await new Promise(r => setTimeout(r, 1000)); 
        }
    } catch (error){
        console.error(error)
        await message.reply("Đã phát sinh lỗi không mong muốn")
    }
}

module.exports = { hiddenEmbedLyric }