import { Bot, Api } from "grammy";
import dotenv from "dotenv";
import { stringify } from "querystring";

dotenv.config();

const bot = new Bot(process.env.BOT_API_KEY);
const tgApi = new Api(process.env.BOT_API_KEY);


// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("NutellinoBot VIVE!"));

// Handle other messages.
bot.on("message", (ctx) => tgApi.sendAnimation(ctx.chatId, ctx.update.message.animation?.file_id ?? ""));


bot.start();