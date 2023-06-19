const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6281255104397'] // pakai nomor owner
global.ownernomer = "6281255104397" // pakai nomor owner
global.socialmedia = "Github: Xenosites" // ini ig buat di ownerjy
global.yutub = "YT: @xenosites"// sama
global.lokasi = "Indonesia, Jawatimur, Lumajang"//

global.packgename = "by" 
global.author = "Xenite" 

global.title = 'SakuraMD'//Tittle reply 
global.body = 'Subscribe xenosites' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})