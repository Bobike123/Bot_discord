module.exports = {
    name: 'iesi',
    description: 'iese botu',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Intra si opreste ma");
        await voiceChannel.leave();
        await message.channel.send('Gata boss, am iesit')
 
    }
}