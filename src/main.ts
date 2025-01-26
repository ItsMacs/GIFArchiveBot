import { Bot, Api, InlineQueryResultBuilder } from "grammy";
import dotenv from "dotenv";
import { Repository } from "./repository";

dotenv.config();

const bot = new Bot(process.env.BOT_API_KEY);
const tgApi = new Api(process.env.BOT_API_KEY);

let gifID : string = "";
let gifUniqueID : string = "";

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("NutellinoBot VIVE!"));

// Handle other messages.
bot.on("message", (ctx) => {
    var msg = ctx.update.message;
    var animation = msg.animation;

    if(animation == undefined) return;

    gifID = animation.file_id;
    gifUniqueID = animation.file_unique_id;
    
    tgApi.sendAnimation(ctx.chatId, animation.file_id)
});

bot.inlineQuery('query', async ctx => {
    await ctx.answerInlineQuery([InlineQueryResultBuilder.gif(gifUniqueID, gifID, "")], { cache_time: 30 });
});

bot.catch(ctx => console.log("Error on message: " + ctx.message));

bot.start();

console.log("Bot started");