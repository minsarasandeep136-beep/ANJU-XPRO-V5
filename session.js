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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05OWE5zRllrcG5mbFY5Ymh5YVFPUUhDdnM2dUdHSXhCemZtL3FBRWlucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2tzYnlXVTdVS0lsT1hyaHpoL0p4ZDdsQ0lweXNRRnFKcU5oclk0MGtrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SGlYdVhxVFVqbWUzMjNtc2k0NlNYY1UvZ0ZPSVVkNktiZzBzYXo2aGxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTkoxdEJjeUxqVkNmRTFVeVA2dll6cFVnMXBVaDR1ZlFRT2h3SHRyVkZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDY3czMXhrYnhzU2kxOWtodU9jWkw5SWJKY0I0NU91YXlPdmNISnF6VXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndnTEM1bjFINzJtVlVjU3ZSYWRQU3U1Qk1XV1h3K2kvYkpIRXZ4QXFCbXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0U0bGhMT0VUWnAwQUhwS1RaVTBtRlB1b2Roakw4V2JmMnZkdFZNQnVYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0MyMEFRVmxBd1BiSmY2bnEyTmtnZy9HKzFEWDZaTG95V2xWbEFJOEVpND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRhdXV6aTllckg1RS9QNS9nVnJtdUpYTkRIT3VqbWNHaFV1QUc4b1plNTJGYVpVS0RTOFkvcGgvSnZmMTBkSkUxeXFtK1poVk44d2ZzbTVZNmNESUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IjVMVDlITDczVk9YcDBFWmprYVc1ZFFMSzB2L25YMzJDTG8zYUw2alp2ZkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjV4MUdVd1N3VDllU1M3R1RFWVlhNEEiLCJwaG9uZUlkIjoiMjgwY2E0OTEtOWFiOS00MDBkLTk2OTgtMWE4NDIzNmNmMDYxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVVemZ4L0lPWG9xTDBpanh2b2xobHRrZVpqTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHU1lZSWlRQnJmeVBBVG1XZ200MldYQUp3VTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWkQxQlQzOFYiLCJtZSI6eyJpZCI6Ijk0NzEyNDg1NDIxOjkyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ismq4rSVIFwi4bSiIOG0jeG0hyDwnZSO8J2Upsm08J2UiteA4La04Lec4Lap4LeSIFwiIOC3hOC3iiDKmeG0nMm0ybTKjyDKmcqZXCLKnH4iLCJsaWQiOiIxNzMwNjYzNjE1NjExODY6OTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOaVkwS01ERUtEcWdjWUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGRGNYckNNWldBdzFxM2kyUVRDaWRwdFpxNE5IQ0tIYzluZ1lXdzhqclNVPSIsImFjY291bnRTaWduYXR1cmUiOiJxRm1tNU1EMHpFMDR5RHgwQWhTNzBUc1lYVEIzTS9LSFJpVHk5dk00Y1NRTDdjRXNHRU0xbDRaQVhVLy9VTXljcWJONGtKQmpvcUhFMWhmTDNobW9CQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUEVJRGhMMmhzL2JyVFpGbENIWWhVNFlDOFRMbU5iR3hVOWV5bkJ0cXUrenIxbjkvUmlTTUp0MW0rMmhDS2tvM2xxS0czQkJsMUxLUGk4OEVyaWZQQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMjQ4NTQyMTo5MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSUTNGNndqR1ZnTU5hdDR0a0V3b25hYldhdURSd2loM1BaNEdGc1BJNjBsIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc0NDMzNzUsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFhzIn0=",
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
