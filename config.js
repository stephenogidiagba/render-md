const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Kolkata,India."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://akash:akash@cluster0.ilcd2ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://wa.me/message/K6OVW2JLF6DTI1";
global.gurl  =process.env.GURL  || "https://wa.me/message/K6OVW2JLF6DTI1";
global.website=process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ebaf2cddaa62349653878.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`𝖋𝖎𝖑𝖊 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖇𝖞 Toji[Kimihiro🖤]`" 


global.devs = "919064560840" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919064560840";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064560840";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://wallpapercave.com/wp/wp11261224.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_32_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFcVU2SThuNFl2ZStQWmNWQzhPczdIMTN2UllBZEQyRm94TkNqMktYYkNRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTA2NDU2MDg0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0NDRTE5MzI4NDk3Rjk5Njk4MTExM0NFNkYzQjhFRUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0NTEzNTI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlvZTQwRU9KU1ptUEYzNkVaektLeEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmI1OTAzNzItMzY2Ny00NWU1LTk4MDMtYjVkMDM5MjRjODc1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgODgsXG4gICAgICA3NCxcbiAgICAgIDEyNSxcbiAgICAgIDk3LFxuICAgICAgMTMzLFxuICAgICAgMjU0LFxuICAgICAgNjEsXG4gICAgICAyNDQsXG4gICAgICAyMzksXG4gICAgICAxNTcsXG4gICAgICAxNTEsXG4gICAgICA3NCxcbiAgICAgIDExNCxcbiAgICAgIDIsXG4gICAgICAyMjQsXG4gICAgICAzMyxcbiAgICAgIDIyLFxuICAgICAgOTcsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDM1LFxuICAgICAgMTAxLFxuICAgICAgNzQsXG4gICAgICA2LFxuICAgICAgMjMyLFxuICAgICAgMjEwLFxuICAgICAgNTMsXG4gICAgICAxMzYsXG4gICAgICA5MSxcbiAgICAgIDIxNyxcbiAgICAgIDE1LFxuICAgICAgMTk0LFxuICAgICAgMTQ2LFxuICAgICAgNjAsXG4gICAgICAxMixcbiAgICAgIDE1OCxcbiAgICAgIDMyLFxuICAgICAgOTEsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDVE1MRDQ4TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5MDY0NTYwODQwOjg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JCMgNOEzpTguKPKnOKGpuKGpuKGpuKGpuKGplwiLFxuICAgIFwibGlkXCI6IFwiNzAyNTMxOTk1MDMzNzg6ODlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlBEaWxVUTdmbW50Z1lZR0NBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrOTArK1hPSEdURHpXVitBNS9FSVJlZ1FGcWR6OC91ZUdWWWo0Vzk2OXo0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJ1WDZhWURzN205NW9YRHNsdm14Q2NOYWdmS0ttbWJyUmZHYU8xeXNiSG1UcjRwMmZWeHNkdktiZHhKbjMrbXRRRnE4SS9ZZThreUIrV2hNVm1yUUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhQZGM3ZUNuUWVWcjlpZ3BDYnVHMUp5U2VHZ0RzaUR2RmZmTlpWSlBTdXhNelFEbFBVQWpDNE1sTzFpR09YL1ZHUlIzRDhFSzlTamN5UFRwd2V4QWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTA2NDU2MDg0MDo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ1MTM1MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHVjhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdWOC5qc29uIjogIntcImtleURhdGFcIjpcIjZ3NzYvdzJyTklqWHlFT2t4Q2NrblAvMzFDbk53eDRKenhib0svOGNHWTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4NDMwMzU1LFwiY3VycmVudEluZGV4XCI6MjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjNdfSxcInRpbWVzdGFtcFwiOlwiMTcyNDUxMDQyMTA0NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "A K A S H",
  ownername:process.env.OWNER_NAME|| "A K A S H",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
