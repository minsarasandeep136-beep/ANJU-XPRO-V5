//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZab2JiOWdHWGl0S2pyWTV3bmN1Y25PVjJMSE91MnFERzBEYXNRWkoxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmw2Vms4Sk1xWlg3N0trUDhSRmRjbUZLVWhoVUtNSDJzdlhld2lNWVd3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRWJHaVAzQ05zWlhCODd2akMrenlDQ0RsSURtR01QNFRzYUNIb0xNUEhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWGwzSzZzMC9oOCtrTVBscXIzeGhocXBVT0hNM3grQ3QwSjVGMGZUSmlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGSk5GTU1GSUxvaGFzZElGNTU2aWd0clZZTjF2Y0RnOGowYTJrOG1SR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4zMVY5a01lZy9HZFgwaDdzdFdjQ3NYL2tGaStsRjMwVkFuN0tqdjVIWE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUR6T3VKaFlURkw4cXVES1FjV1lMNXVIeW5FNWsrWDQ2Y2RSTmlNQUdsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXhabEpDcENya053TUczL3VBK052WjMybnkrME9SVkEvaGRLajhoNzhHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYzSzJXZkR3U1NMY21TVEd6Q0FzY2tSQ2RBQXlhSmtLSTJQNUk1V0Y1bGlDS3FNRVRYODF4SlRib3ZRZEtZbTg2d0h6TkVkSDdHS1hlcmhLL1B4SkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6InNDb091ekVWVVI5cVF6QURDenZIRXI1UlBvYTNiWHd1R1ByUmgxUzVBd2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikp1S2ZNR3ctUndHbWxHNk5DMkRzWnciLCJwaG9uZUlkIjoiMThlZTE4MDUtMTU2NC00OTRjLWIxYjEtNzJiMDE5YTU1ZGVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkphSTgvdWJ3elRZR2w0WXVpMTUxT0ZDTzQ4ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmcmNSbkNWZUc3OHN5TURPR3NvNmxwSG9NRUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlRKQktRTEQiLCJtZSI6eyJpZCI6Ijk0NzEyNDg1NDIxOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiyaritJUgXCLhtKIg4bSN4bSHIPCdlI7wnZSmybTwnZSK14DgtrTgt5zgtqngt5IgXCIg4LeE4LeKIMqZ4bScybTJtMqPIMqZyplcIsqcfiIsImxpZCI6IjE3MzA2NjM2MTU2MTE4Njo5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0NZMEtNREVKUFdrTVlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRkRjWHJDTVpXQXcxcTNpMlFUQ2lkcHRacTROSENLSGM5bmdZV3c4anJTVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMVY5dmdrL2ZobDMwaEtyZnJWY3dpaFdGdGlsb2gvdGd6WjNodkg4V2dZc0theE9QQ01WUWJIelF2c2hmMG9tbTI4VVc4S25Menp0NFRrd3RjK1hoQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjJpRENaR0ViUC8xNUNlckxtWThtUnF4WFc3Z1FwWEM3ck5aR01QRUVnZUQ5b08vbEZlaXBtcGlESTdGaXhJOExGdjJQVmJpUHVCYks1UDhabXN4MEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTI0ODU0MjE6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSUTNGNndqR1ZnTU5hdDR0a0V3b25hYldhdURSd2loM1BaNEdGc1BJNjBsIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc2ODY1NjEsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
