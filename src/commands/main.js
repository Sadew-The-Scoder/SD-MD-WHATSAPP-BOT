const os = require('os')
const {runtime} = require("../utils/functions")

module.exports = [
  {
    name:"alive",
    description:"Alive Command",
    react:"💗",
    ownerOnly:"false",
    groupOnly:"false",
    adminOnly:"false",
    botAdmin:"false",
    async execute(conn,mek,args,context){
      const {from,pushname,reply,quoted} = context;
      try{
       let desc = `Hey ${`pushname`}... Im alive!
       Uptime: ${runtime(process.uptime())}` 

        await conn.sendMessage{from,
        {
          image:{url:"https://raw.githubusercontent.com/Sadew-The-Scoder/SD-MD-WHATSAPP-BOT/refs/heads/main/.media/Screenshot_20251123_015839.jpg"},
          caption: desc
        },
        {
          quoted:mek
        }
          }
        
      }catch(e){
        console.log(e)
      }
    }
  }
]
