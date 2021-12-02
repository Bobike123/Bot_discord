module.exports={
    name: 'clear',
    description:"Clear messages! ",
    async execute(message,args)
    {   
            if(!args[0])return message.channel.send('zi ma ceva pui asa fara nimic');
            if(isNaN(args[0]))return message.channel.send('pune ma numar');   
            if(args[0]>20)return message.channel.send('ho ma nu imi stregi tu mie serveru');
            if(args[0]<1)return message.channel.send('cum vrei sa sterg '+ args[0]+ ' mesage');    
            message.channel.bulkDelete(args[0]);
    }
}