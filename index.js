const Discord = require('discord.js');
const client = new Discord.Client();




client.once('ready' , ()=> {
    console.log('bot working!');
})

// function onClientReady()
// {
//     // Listen to Messages in the channel
//     bot.on('message', (message) => onMessageReceived(message));
// }
client.login('NzY2NDI0Nzg0NDIyNDM2OTU0.X4jKtA.1khHixWR8kMp4JTz8ScaiDD5PGM');


// function RPGHUNT(user , message) {
//     //client.on('msg' , msg => {
//         client.message.send('rpg hunt')
//     //})
// }






//dexetai ta commands
function CommandsOrder(user , Number , flag) {

    if(Number == 1) { 
        Queue(function() {
        } , Number , flag)
    }
}

//vazei se queue ta commands
function Queue(callback , Number , flag) {
        if(Number == 1) {
            setTimeout(callback , 10000 , flag.a = 1);
        }
}


    const channel = client.channels.cache.get('<id>');

    client.on('message' , message => {
        let flag = {a : 0}
        const user = client.users.cache.get('<id>');

        console.log('ARXH->flag.a:' , flag.a , '+' , 'flag:' , flag)

        if(message.content === 'HELLO') {
            CommandsOrder(user , 1 , flag.a);
            if(flag.a = 1) {
                //console.log('MESA->flag.a:' , flag.a , '+' , 'flag:' , flag)
                message.reply('rpg hunt')
            }
        }

        console.log('EKSW->flag.a:' , flag.a , '+' , 'flag:' , flag)
    
    })