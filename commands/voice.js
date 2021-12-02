module.exports = {
    name: 'canta',
    description: 'Joins and plays a video from youtube',
    async execute(message,args) {
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('pai intra pe canal frate');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!voiceChannel) return message.channel.send('pai intra pe canal frate');
        if(!permission.has('CONNECT')) return message.channe.send('nah');
        if(!permissions.has('speak')) return message.channe.send('nah');
        if(args.length) return message.channe.send('nah');
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('gata, m am dus');
            });
 
            await message.reply(`acuma i am dat play sefu`)
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
 
            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        } else {
            message.channel.send('No video results found');
        }
    }
}
/*const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { description } = require('./react');
module.exports={
    name:'dai',
    description:'pune video de pe yt',
    async execute(message,args){
        const voiceChannel= message.member.voice.channel;
        if(!voiceChannel) return message.channe.send('pai intra pe canal frate');
        if(!permission.has('CONNECT')) return message.channe.send('nah');
        if(!permissions.has('speak')) return message.channe.send('nah');
        if(args.length) return message.channe.send('nah');

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return(videoResult.videos.length>1)? videoResult.videos[0] : null;
        }
        const video = await videoFinder(args.join(' '));
        if(video){
            const stream = ytdl(video.url, {filter:'audioonly'});
            connection.play(stream, {seek: 0, volume:1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
            await message.reply(`amu pun ***${video.titel}$***`)
        }else{ message.channel.send('nu gasesc fra');}
    }
}
const commando = require('discord.js-commando');
class JoinChannelCommand extends commando.Command
{
    execute(message, args) 
    {
        constructor(client)
        {
            super(client, {
                name: 'voice',
                group: 'music',
                memberName: 'join',
                description: 'Joins the voice channel of the commander',
            });
        }

        //async run(message, args)
        {
            if(message.member.voiceChannel)
            {
                if(!message.guild.voiceConnection)
                {
                    message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("Successfully Joined!");
                    })
                }
            }
            else
            {
                message.reply("You must be in a voice channel to summon me!");
            }
            module.exports = JoinchannelCommand;
        }
    }
}*/