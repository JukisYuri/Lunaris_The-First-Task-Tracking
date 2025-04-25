function tutorialForUsingBot(message){
        message.reply('**Cách để sử dụng em cho đúng:**' + '\n' + '- Lệnh **!cách dùng** sẽ cho biết cách dùng'
                                                    + '\n' + '- Lệnh **!thông tin chủ bot** sẽ cho biết thông tin về chủ bot'
                                                    + '\n' + '- Lệnh **!thông tin về con bot** sẽ dẫn đến link github chứa mã nguồn của con bot'
    )
}

function tutorialUse(message){
    message.reply(
                '**Với các tiện ích:**\n' + 'Reply đoạn tin nhắn và nhập lệnh **! translate {ngôn ngữ}**\n' + 'VD: !translate vi\n' +
                '- **!fetch {ID kênh nguồn} to {ID kênh đích}**\n' + 
                'Dùng để lấy log 100 tin nhắn gần nhất trên kênh nguồn được chỉ định\n' +
                '- **!steal {ID người dùng} from {ID kênh nguồn} to {ID kênh đích}**\n' +
                'Dùng để lấy log 100 tin nhắn gần nhất trên kênh nguồn và người dùng được chỉ định\n' +
                '- **!track {ID người dùng} from {ID máy chủ} to {ID kênh đích}**\n' +
                'Dùng để theo dõi người dùng trên một máy chủ chỉ định\n' +
                '- **!monitor-server {ID máy chủ} to {ID kênh đích}**\n' +
                'Dùng để theo dõi __toàn bộ__ người dùng trong một máy chủ được chỉ định\n' +
                '- **!untrack {ID người dùng}**\n' +
                'Dùng để huỷ bỏ một người dùng được chỉ định trong danh sách theo dõi\n' +
                '- **!list-tracking**\n' +
                'Dùng để xem danh sách người dùng đang bị theo dõi dưới dạng ID\n' +
                '- **!visual list-tracking**\n' +
                'Dùng để xem danh sách người dùng đang bị theo dõi dưới dạng trực quan\n' +
                '- **!moveall list-tracking {ID kênh đích muốn chuyển tới}**\n' +
                'Dùng để di chuyển hết toàn bộ danh sách người dùng đang bị theo dõi sang 1 kênh đích khác để xem log\n' +
                '- **!role {ID role}**\n' +
                'Dùng để xem thông tin về role\n' +
                '- **!user {ID user}**\n' +
                'Dùng để xem thông tin người dùng\n' +
                '- **!trans-watch {ID kênh}**\n' +
                'Dùng để tracking dịch theo tin nhắn đã gửi, ID kênh là giới hạn trong phạm vi tracking\n' +
                '- **!secret**\n' +
                'It is secret, go try it out\n' +
                '- **!cap** (?)\n' +
                'Dùng để chụp một bức ảnh ở 1 địa điểm trên website, có thể là một kênh chat hoặc một trang web nào đó\n' +
                '- **!startmc** (?)\n' +
                'Dùng để khởi động server Aternos thông qua lệnh mà không cần lên website\n'
    )
}

function informationAuthor(message){
    message.reply(  "**Đây là toàn bộ thông tin về ngài ạ:**\n" +
                    "- **Carrd**: [jukisyuri.carrd.co](https://jukisyuri.carrd.co/)\n" +
                    "- **Github**: [JukisYuri](https://github.com/JukisYuri)\n" +
                    "- **Facebook**: [yourlifehehe](https://www.facebook.com/yourlifehehe/)\n")
}

function informationBot(message){
    message.reply('Bot này đang sử dụng ngôn ngữ JavaScript, sử dụng DiscordJS phiên bản mới nhất\n' +
                    '**Source Code:** https://github.com/JukisYuri/Discord-Bot-With-HuggingFaceAI\n\n' +
                    '__**Hãy tôn trọng bản quyền của người làm ra bot**__\n' +
                    '**Author Discord Bot: JukisYuri**\n'
    )
}

module.exports = { tutorialForUsingBot, tutorialUse, informationAuthor, informationBot }