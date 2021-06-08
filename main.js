const {Client, Attatchment, MessageAttachment} = require('discord.js');

const client = new Client();

client.once('ready', () => {
    console.log('Femboy is online!');
});

client.on('message', message => {

    //Makes all messages content in to lowercase so we don't have to do things like oVo Ovo ovO
    let lowmsg = message.content.toLowerCase()


    //Disable bots being able to loop this shit cause its gay.
    if(message.author.bot){
        return console.log("No :)")
    }

    //Whenever this is called with kys() it sends kys in chat. Very simple :)
    function kys(){
        message.reply("kys")
    }

    //Here we declare everything thats "kyssable" meaning everything the bot replies "kys" to is stored here. And we can reference this variable at any point, with something like kysvar[0] to get owo and kysvar[1] to get uwu. Very simple variable declaring which is useful in many cases :)
    //When you're adding something here, make sure to type it in lowercase, otherwise it will be no function!!!!!!!!!
    let kysvar = ['owo', 'uwu', 'qwq', 'hello', 'hey', 'kys', 't-t', 'ovo', '"owo"', 'cunt', 'retard']

    //Sanity check.
    console.log(lowmsg)

    //Check if anything in the message is in kysvar, if so call the function kys()
    //Sidenote, there's probably a million other ways that are more efficient to do this, but I really could care less since this is just a discord bot.
    //And it works sooo. :P
    if(lowmsg.includes(kysvar[0]) || lowmsg.includes(kysvar[1]) || lowmsg.includes(kysvar[2]) || lowmsg.includes(kysvar[3]) || lowmsg.includes(kysvar[4]) || lowmsg.includes(kysvar[5]) || lowmsg.includes(kysvar[6]) || lowmsg.includes(kysvar[7]) || lowmsg.includes(kysvar[8]) || lowmsg.includes(kysvar[9]) || lowmsg.includes(kysvar[10]) || lowmsg.includes(kysvar[11])){
        kys()
    }

    //Check if the user said woman, then try to ping various other people. (Only had vodkas id didnt know who else yall ping)
    if(lowmsg.includes("woman")){
    return message.channel.send(`OONGA! WOMAN OONGA! ${message.author} CALLS FOR THE FEMALE! <@700051543998595094>!!!!!!`)
    }

    //I really like this one LOL
    if(lowmsg.includes("a!leaderboards")){
        return message.reply("Oi cunt, it's 'a!leaderboard' not what you sent :rolling_eyes:")
    }

    if(lowmsg.includes("china") || lowmsg.includes("america") || lowmsg.includes("north korea")){ 
        return message.reply(":flag_kp: :flag_us: :flag_cn: are bad countries! We don't support them!")
    }

    if(lowmsg.includes("finland") || lowmsg.includes("perkele")){
        message.reply("SUOMI MAINITTU?!")
        return message.channel.send("FINLAND :muscle: :flag_fi:")
    }

    if(lowmsg.includes("xd")){
        return message.reply("I'll fuck your mom too, ya think that'll be so 'xd' worthy?")
    }

    //I added an invite link feature to the german server shoot.
    if(lowmsg.includes("femboy invite")){
        return message.reply("Here's an invite to the server, https://discord.gg/jzUWQQ9jjZ")
    }

    if(lowmsg.includes("nigger") || lowmsg.includes("nigga")){
        return message.reply("Whos neighbor? Or did I hear a different kind of n-word...")
    }

    //If it finds nothing, just log to console and carry on our lives.
    else{
        console.log("-*-*-Nothing found, let's head back to safety boys!-*-*-")
    }

})


client.login('NzU3MjY4MTQ4NTc0NDg2NjU5.X2d66w.uyE3yrYeXYvNcTndNdRIEZjrPBM')