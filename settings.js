//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://chat.whatsapp.com/Fw7wRivCgGf1kPdZ6n5yZ7',
}

//Api Key\\
global.APIKeys = {
	'https://chat.whatsapp.com/Fw7wRivCgGf1kPdZ6n5yZ7': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['201554861890']
global.premium = ['🜋| 𝐋𝐔𝐂𝐈𝐅𝐄𝐑 𓆩ま𓆪']
global.ownernomer = '201554861890'
global.ownername = '🜋 | 𝐋𝐔𝐂𝐈𝐅𝐄𝐑 𓆩ま𓆪'
global.botname = 'Gojo-Satoru'
global.footer = '©NexusNwInc.'
global.ig = 'https://chat.whatsapp.com/Fw7wRivCgGf1kPdZ6n5yZ7'
global.region = 'India, South India, Kerala'
global.sc = 'https://chat.whatsapp.com/Fw7wRivCgGf1kPdZ6n5yZ7'
global.myweb = 'https://youtube.com/channel/UC_NPCQHCJ_ive4eWz9cyWew'
global.packname = '𝐋𝐔𝐂𝐈𝐅𝐄𝐑 '
global.author = '𓆩ま𓆪'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'انت مش ادمن يا نجم!',
    botAdmin: 'هات ادمن الاول يا برو!',
    owner: 'ذلك للوسيفر العظيم وحده',
    group: 'للجروبات فقط!',
    private: 'ذلك الامر للخاص فقط!',
    bot: 'الأمر للبوت فقط',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://chat.whatsapp.com/Fw7wRivCgGf1kPdZ6n5yZ7'
global.fluming = 'https://chat.whatsapp.com/Fw7wRivCgGf1kPdZ6n5yZ7='
global.flarun = 'https://chat.whatsapp.com/Fw7wRivCgGf1kPdZ6n5yZ7'
global.flasmurf = 'https://chat.whatsapp.com/Fw7wRivCgGf1kPdZ6n5yZ7'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
