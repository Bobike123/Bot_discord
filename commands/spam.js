module.exports={
    name: 'spam',
    description:"spam ",
    execute(message,args)
    {   
        const user = message.mentions.members.first();
        if(args[1]==0) message.channel.send('0?');
        if(user)
        {
            for( var i = 0; i < args[1] ; i++ ){
                user.send('trezirea');
                console.log(args[0])
                console.log('/n');
                console.log(args[1])
            }
        }else{message.channel.send('la ce vrei sa dau spam ca n am la cine')}
    }

}
/* if(args[1]==0){
            console.log(args[0]);
            //message.channel.send('spamez acuma 0 mesaje frate')
            for( var i = 0; i <= 5 ; i++ ){
                user.send('trezirea');
                k++;
            }
        }else if(user){
            for( var i = 0; i <= args[1] ; i++ ){
                user.send('trezirea'+ k);
                k++;
            }
        }else{message.channel.send('la ce vrei sa dau spam ca n am la cine')}*/