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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0Jiak82VlBBRWgzYzdER1JuRXhUWUJFRVRtZzFvVVdPSXhiQlowbzJWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHc0c3dXUk43Y1N6b25WMlMyNHR1VzcyL2lkM0ZSVk9IWEVoenhHdGh4bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSlNWSDZpWGhiaTJQSnNwR0s4YnJlblBmdkJoNmZUSUVSOUNDZncvbW44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKdjhSTkw1RExkL2F2Z3I4QjRBc2VwSFQ2ZytXK2t0WDRWYWhUaXpnVGc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHZ0VCS21GVUx2NmNJQzNUeEQ4cDF1N2dKc29Id3hRelJldm9LY3c3Vkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksvdDRjRWZKN3pGUUNicjFLNEZSM2dyUVhNaFNMbnlmeXJsVFR2WFNlUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURYdG9jOFdqMHRtTXBraGtlTnhaOHlPRG85MlIySVp4ZHJJTk5oZzNFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWxaVG1RRlNlMkFSdC9sSkFiMnZ6dld4MUo5bWVWcW9sTVdDUE94LzIxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPcytxOHlOY1Y5Sk04dks2NFZTUEw2UXpnOERXZGJyZ3BwbngxTkROWFhqSVpHRml2emJ6eEtIMWhkV1BualdVZ0dLd1hpbnNxRUMzYUZJR0xXREFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6IklYbzNpYWhTcGJDVmtIYVZ3VkphN3p2a1dncllGVTZZT0RTOUNMWlF1YXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJ4SWxSeWY4UWY2S1lIVU5qbFcyVXciLCJwaG9uZUlkIjoiODhiZmU3MzctNmNhZi00ZjM1LWEwYzgtMzliOGQ4MzcwMGIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFrdi83V25FR05zNUNNUDBRbkpJSFlwc1RZRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCNmtkYm9vT2hGT3FPQzlUNXRzMG5INlJ6ZWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkcxNUNRREEiLCJtZSI6eyJpZCI6Ijk0NzEyNDg1NDIxOjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ismq4rSVIFwi4bSiIOG0jeG0hyDwnZSO8J2Upsm08J2UiteA4La04Lec4Lap4LeSIFwiIOC3hOC3iiDKmeG0nMm0ybTKjyDKmcqZXCLKnH4iLCJsaWQiOiIxNzMwNjYzNjE1NjExODY6MTFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPR1kwS01ERUlqbmtNWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGRGNYckNNWldBdzFxM2kyUVRDaWRwdFpxNE5IQ0tIYzluZ1lXdzhqclNVPSIsImFjY291bnRTaWduYXR1cmUiOiJCNFBGVUlkc2kwY3RQQlhEZ3dHZ3NXd0dRRk94Y0x6VXZDekN5MzQ4RTlHNEN5Mm5oT01OT0tJdjFxV1VwQWg3Zm43YmQwLzJobGR5U2wrL0t0WjRBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUkp6Wnd5dGo5eFdQY2svVXBiUVgxVWJueW5TcXpMaHRsYVQxT1Y2WjVMSW8zelVIcG1zTzlJaXFnQmt4SjFnTkRKSmQxTTNFYTVGMGk4Yi93MmlMQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMjQ4NTQyMToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSUTNGNndqR1ZnTU5hdDR0a0V3b25hYldhdURSd2loM1BaNEdGc1BJNjBsIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc2ODg3MjYsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
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
