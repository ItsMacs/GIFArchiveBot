import { Bot } from "grammy";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.BOT_API_KEY);

const bot = new Bot(process.env.BOT_API_KEY);


// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("NutellinoBot VIVE!"));

// Handle other messages.
bot.on("message", (ctx) => ctx.reply("SUCA!"));


bot.start();