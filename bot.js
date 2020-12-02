require("dotenv").config()

const Discord = require('discord.js');
const client = new Discord.Client();

const Bot_Prefix = "!";
const Mod_Command = "mod-me";

client.on("ready",()=>{
    console.log('Bot Is Online');
});

client.on("message", message =>{
    if(message.content === `${Bot_Prefix}${Mod_Command}`){
        modUser(message.member)
    }else if(message.content === "!ping"){
        message.reply("My dick is throbbing")
    }else if(message.content === "!bot"){
        message.channel.send("SHut uP")
    }else if(message.content === "!above"){
        message.channel.send("What that nigga above me said")
    }
})

function modUser(member){
    member.roles.add("783616614691766272");
}

client.login(process.env.Bot_Token);