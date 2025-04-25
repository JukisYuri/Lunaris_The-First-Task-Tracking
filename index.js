require('dotenv').config()
const puppeteer = require('puppeteer')
const { Client, GatewayIntentBits, ActivityType } = require('discord.js')

//------------Commands------------
const { restart } = require('./src/commands/restart.js')
const { steal } = require('./src/commands/steal.js')
const { translate } = require('./src/commands/translate.js')
const { track, server_track } = require('./src/commands/track.js');
const { untrack } = require('./src/commands/untrack.js');
const { resetListTracking } = require('./src/commands/reset_list.js');
const { moveallListTracking } = require('./src/commands/moveall_list.js');
const { listTracking, visualListTracking } = require('./src/commands/listtracking.js');
const { help, cachdung, thongtinAuthor, thongtinBot } = require('./src/commands/help.js')
const { fetchLog } = require('./src/commands/fetch.js')
const { checkRole } = require('./src/commands/checkrole.js')
const { checkUser } = require('./src/commands/checkuser.js')
const { tracking_translate } = require('./src/commands/tracking_translate.js')
// const { secretMessage } = require('./src/command/secretmessage.js')
const { checkAternosStatus } = require('./src/commands/checkAternosStatus.js')
const { trackingCapture } = require('./src/commands/trackingCapture.js')
const { controllingAternosWebsite } = require('./src/commands/controllingAternosWebsite.js')
//----------Utilities--------------
const tracker = require('./src/utilities/tracker.js');
//----------Helpers----------------
const { setupAutoSave } = require('./src/helpers/savedata.js')
//----------Extensions-------------
const { dataLoad } = require('./src/extensions/loadData.js')
//----------Others-----------------
const { hiddenLyric } = require('./src/commands/hiddenLyric.js')
const path = './src/extensions/trackedUsers.json';  // file lưu dữ liệu

//---------------------------------------------------------------

const client = new Client({
    intents: [GatewayIntentBits.Guilds, 
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.MessageContent, 
            GatewayIntentBits.GuildMembers, 
            GatewayIntentBits.DirectMessages],
})

const trackedUsers = new Map() // Khai báo quan trọng nhất của track
// Load dữ liệu
dataLoad(trackedUsers)

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('khởi đầu với !help hoặc !cách dùng', { type: ActivityType.Watching }),
    client.user.setPresence({ status: 'idle' })
    setupAutoSave(trackedUsers, path); // Mỗi lần ready, sẽ nạp vào từ folder data
})

//---------------------------------------------------------------

tracker(client, trackedUsers)

//-------------------------------------------------------------

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    try {
    restart(message, trackedUsers, path) // 

    help(message) // 
    cachdung(message) //
    thongtinAuthor(message) //
    thongtinBot(message) // 

    steal(message, client) // 
    fetchLog(message, client) //
    
    tracking_translate(message, client) // 
    translate(message) // 

    track(message, client, trackedUsers, path) // 
    server_track(message, trackedUsers, client, path) //

    listTracking(message, trackedUsers) //
    visualListTracking(message, trackedUsers, client) //
    moveallListTracking(message, trackedUsers, path) //
    untrack(message, trackedUsers, path) //
    resetListTracking(message, trackedUsers, path) //

    checkRole(message) //
    checkUser(message) //

    hiddenLyric(message) //

    checkAternosStatus(message) // 

    trackingCapture(message, puppeteer) // ?

    controllingAternosWebsite(message, puppeteer)

    // secretMessage(message, client)
    } catch (error){
        console.error(error)
        await message.reply("Skill Issue, viết lại đoạn mã đi")
    }
})

client.login(process.env.BOT_TOKEN)