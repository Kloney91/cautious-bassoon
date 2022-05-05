import * as Discord from 'discord.js';
import {getTemperature} from './weather.js';

const client=new Discord.Client({intents:['GUILDS', 'GUILD_MESSAGES'],
});

async function onMessage(message){
    if (!message.author.bot) {
        

        const temp = await getTemperature(message.content);
        
        message.reply(`Here is the weather: ${temp}*F`)
    }
}
const token="OTY5Mzc0Mzg1Nzg4MDU1NjEy.YmsePw.MT4cYQ06znaimgOHOV-KJoTbn-g"
client.on("messageCreate",onMessage)
client.login(token);