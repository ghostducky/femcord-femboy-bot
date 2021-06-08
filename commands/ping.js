module.exports = {
    name: 'ping',
    description: 'does stuff lol',
    usage: 'type &ping',
    execute(message, args){
        message.channel.send("pong")
    }

}