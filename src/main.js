"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env.BOT_API_KEY);
const bot = new grammy_1.Bot(process.env.BOT_API_KEY);
// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("NutellinoBot VIVE!"));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("SUCA!"));
bot.start();
