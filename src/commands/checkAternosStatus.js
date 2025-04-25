const { minecraftServerStatus } = require("../utilities/minecraftServerStatus")

async function checkAternosStatus(message){
    try {
        if (message.content.startsWith("!aternos"))
        return minecraftServerStatus(message)

        } catch (error){
            console.error(error)
    }
}

module.exports = { checkAternosStatus }