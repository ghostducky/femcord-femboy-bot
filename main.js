const fs = require('fs');
const Discord = require('discord.js')
const {Client, Attatchment, MessageAttachment} = require('discord.js');
const client = new Client();

prefix = '&'

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Femboy is online!');
});



//Command handler, xd
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
    if(!client.commands.has(command)) return;
    try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send(`Hey there ${message.author.username}! There seems to be an error executing that command, try again later, or wait until we fix the problem! :smile:`);
	}
})

//Message replier, xd
client.on('message', message => {

    //Makes all messages content in to lowercase so we don't have to do things like oVo Ovo ovO
    let lowmsg = message.content.toLowerCase()


    //Disable bots being able to loop this shit cause its gay.
    if(message.author.bot){
        return;
    }

    //Whenever this is called with kys() it sends kys in chat. Very simple :)
    function kys(){
        message.reply("kys")
    }

    //Here we declare everything thats "kyssable" meaning everything the bot replies "kys" to is stored here. And we can reference this variable at any point, with something like kysvar[0] to get owo and kysvar[1] to get uwu. Very simple variable declaring which is useful in many cases :)
    //When you're adding something here, make sure to type it in lowercase, otherwise it will be no function!!!!!!!!!
    let kysvar = ['owo', 'uwu', 'qwq', 'hello', 'kys', 't-t', 'ovo', 'cunt', 'retard', 'vagege']

    //Check if anything in the message is in kysvar, if so call the function kys()
    //Sidenote, there's probably a million other ways that are more efficient to do this, but I really could care less since this is just a discord bot.
    //And it works sooo. :P
    if(lowmsg.includes(kysvar[0]) || lowmsg.includes(kysvar[1]) || lowmsg.includes(kysvar[2]) || lowmsg.includes(kysvar[3]) || lowmsg.includes(kysvar[4]) || lowmsg.includes(kysvar[5]) || lowmsg.includes(kysvar[6]) || lowmsg.includes(kysvar[7]) || lowmsg.includes(kysvar[8]) || lowmsg.includes(kysvar[9])){
        kys()
    }

    //Check if the user said woman, then try to ping various other people. (Only had vodkas id didnt know who else yall ping)
    if(lowmsg.includes("woman")){
        return message.channel.send(`OONGA! WOMAN OONGA! ${message.author} CALLS FOR THE FEMALE!!!!!!! <@816431513792675860> YOU'RE NEEDED!!!`)
    }

    //I really like this one LOL
    if(lowmsg.includes("a!leaderboards")){
        return message.reply("Oi cunt, it's ``a!leaderboard`` not what you sent :rolling_eyes:")
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
    
    if(lowmsg.includes("nigger") || lowmsg.includes("nigga") || lowmsg.includes("nlgga") || lowmsg.includes("n¡gga") || lowmsg.includes("neekeri") || lowmsg.includes("nekru") || lowmsg.includes("nlgger")){
        return message.reply("Whos neighbor? Or did I hear a different kind of n-word...")
    }
  
})



//Message logger, xd
client.on('message', message => {

    if(message.author.bot) return

    console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
    console.log("New message!")
    console.log(`Message author's avatar url is: ${message.author.defaultAvatarURL}`)
    console.log(`Message author's avatar is: ${message.author.avatar}`)
    console.log(`Message author's username is: ${message.author.username}`)
    console.log(`Message author's tag is: ${message.author.tag}`)
    console.log(`Message author's id is: ${message.author.id}`)
    console.log(`Message's content is: ${message.content.toLowerCase()}`) 
    console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
    console.log("------------------------------------------------")
})



client.login("NzU3MjY4MTQ4NTc0NDg2NjU5.X2d66w.uyE3yrYeXYvNcTndNdRIEZjrPBM")