module.exports = {
    name: 'fetchlastmessage',
    execute(message, args){
        lastmessageman = message.mentions.users.first();
        message.channel.send(message.guild.member(lastmessageman).lastMessage)
    }
}