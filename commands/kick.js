module.exports={
    name: 'kick',
    description:"Da kick, plm ",
    execute(message,args)
    {   
        if(args[0]){
            const user = message.mentions.members.first();
            if(user){
                user.kick();
                message.channel.send('L am trimis la plimbare pe ' +args[0]);
            }
            else{message.reply('pune @ la cineva nunteleg cum sa dau kick la '+ "**"+args[0]+"**")} 
        //message.channel.send('pune ma cu @ la cine vrei sa ii dai kick')
        }
    }
}
