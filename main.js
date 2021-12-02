const Commando = require('discord.js-commando')
const { ok } = require('assert');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const Discord = require('discord.js');
//const { joinVoiceChannel } = require('@discordjs/voice');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//const secret = require('./secret.json'); //file with your bot credentials/token/etc
const discordTTS=require("discord-tts");
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");

const prefix = '#';
 //                        __   _        
 // _ __    _ __    ___   / _| (_) __  __
 //| '_ \  | '__|  / _ \ | |_  | | \ \/ /
 //| |_) | | |    |  __/ |  _| | |  >  < 
 //| .__/  |_|     \___| |_|   |_| /_/\_\
 //|_|     
                               
 const intents=
 [
     Intents.FLAGS.GUILD_VOICE_STATES,
     Intents.FLAGS.GUILD_MESSAGES,
     Intents.FLAGS.GUILD_MEMBERS,
     Intents.FLAGS.GUILDS
 ];
let voiceConnection;
let audioPlayer = new AudioPlayer();

const fs = require('fs');
const { off } = require('process');

const { CLIENT_RENEG_WINDOW } = require('tls');

client.commands = new Discord.Collection();

const commandFiles =fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command)
}

client.on('ready', () => {
    console.log(`    ███╗░░░███╗███████╗██████╗░░██████╗░███████╗
    ████╗░████║██╔════╝██╔══██╗██╔════╝░██╔════╝
    ██╔████╔██║█████╗░░██████╔╝██║░░██╗░█████╗░░
    ██║╚██╔╝██║██╔══╝░░██╔══██╗██║░░╚██╗██╔══╝░░
    ██║░╚═╝░██║███████╗██║░░██║╚██████╔╝███████╗
    ╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚═╝░╚═════╝░╚══════╝`);
    const channel = client.channels.cache.get('764900103231504414');
    if(!channel){
        return console.error('nu EXISTA canalul');
    }
    channel.join().then(connection => {
        console.log("I'M IN");
    }).catch(e => {
        console.error(e);
    });
    var ok = client.channels.cache.get('764619174835126347');
    //ok.send('<@!431872378209828884> '+'<@!432608276132265994> '+'<@!533033552892133386> '+'<@!631201630653775894> '+'forza?'); 
});

client.on("messageCreate", async (msg)=>{
    if(!message.content.startsWith(prefix)|| message.author.bot){return;}
    if(message.member.roles.cache.some(r => r.name == 'comenzi_bot'))
    {
        const args = message.content.slice(prefix.length).split(" ");command = args.shift().toLowerCase();
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if(command==  'react'){client.commands.get('clear').execute(message,args);}/////////////////
        if(command == 'canta'){client.commands.get('voice').execute(message,args);}/////////////////
        if(command == 'iesi' ){client.commands.get('iesi').execute(message,args);}/////////////////
        if(command == 'clear'){client.commands.get('clear').execute(message,args);}/////////////////
        if(command == 'spam' ){client.commands.get('spam').execute(message,args);}/////////////////
        if(command == 'tajma'){client.commands.get('taci').execute(message,args);}/////////////////
        if (command =='kick' ){client.commands.get('kick').execute(message,args );}/////////////////
        if(command == 'ba'   ){client.commands.get('ba').execute(message,args);}/////////////////
        if(command =='bjtz'  ){client.commands.get('invoca').execute(message,args);}/////////////////
        /*if(msg.content=='tts')
        {
            const stream=discordTTS.getVoiceStream("hello text to speech world");
            const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
            if(!voiceConnection || voiceConnection?.status===VoiceConnectionStatus.Disconnected){
                voiceConnection = joinVoiceChannel({
                channelId: msg.member.voice.channelId,
                guildId: msg.guildId,
                adapterCreator: msg.guild.voiceAdapterCreator,
            });
            voiceConnection = await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
        }
        
            if(voiceConnection.status===VoiceConnectionStatus.Connected){
                voiceConnection.subscribe(audioPlayer);
                audioPlayer.play(audioResource);
            }
        }*/
        if(command == 'tts')
        {
            const stream = discordTTS.getVoiceStream('');
            const audioResource = createAudioResource(stream,{imputType: StreamType.Arbitrary, inlineVolume:true});
            if(!voiceConnection || voiceConnection?.VoiceConnectionStatus===VoiceConnectionStatus.Disconnected){
                voiceConnection = joinVoiceChannel({
                    channelId:'764900103231504414',
                    guildId:msg.guildId,
                    adapterCreator:msg.guild.voiceAdapterCreator,
                });
                voiceConnection = await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
            }
            if(voiceConnection.status===VoiceConnectionStatus.Connected){
                voiceConnection.subscribe(audioPlayer)
                audioPlayer.play(audioResource);
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //console.log('id user'+ message.user.id) 
        //console.log('id channel'+ message.channel.id)}
    }else{message.channel.send('nu esti demn sa ma folosesti');}
});
client.login('OTA3NzUyODYzNzYwMDE1Mzkx.YYrwuw.qs6xThvmrvkmfAQMg4wembWi3CM');
//if(message.author == client.users.cache.find(user => user.id == '533033552892133386' ))//il injura pe cozmin
        //{
        //     message.channel.send('taci in pula mea de stoarfa sa iti iau rasa in pula cu tot neamu tau si cu ma ta si cu taicato si cu sorata si cu frateto si cu bunicata cu varata cu vara ala a tau cu nasu ala zici ca ii colt de pita cu degetlele alea de la picioare negre supte de o nasoasa');
        //}

        //else if(message.author == client.users.cache.find(user => user.id == '895732302632607804'))//injura botu lu cozmin
        // {
        //     const args = message.content.slice(prefix.length).split(" ");
        //     client.commands.get('injura_bot').execute(message, args);
        // }