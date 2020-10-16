const Discord = require('discord.js');
const client = new Discord.Client();




client.once('ready' , ()=> {
    console.log('bot working!');
})

client.login('');

const channel = client.channels.cache.get('<id>');






//δεχεται τα commands(σειρα:2)
function CommandsOrder(user , Number , flag) {

    if(Number == 1) { 
        Queue(function() {
        } , Number , flag)
    }
}

//βαζει σε queue τα commands(σειρα:3)
function Queue(callback , Number , flag) {
        if(Number == 1) {
            setTimeout(callback , 10000 , flag.a = 1);
        }
}


    



    //αρχικο loop(σειρα:1)
    client.on('message' , message => {
        let flag = {a : 0}
        const user = client.users.cache.get('<id>');

        //console.log('ARXH->flag.a:' , flag.a , '+' , 'flag:' , flag)

        if(message.content === 'HELLO') {
            CommandsOrder(user , 1 , flag.a);
            if(flag.a = 1) {
                //console.log('MESA->flag.a:' , flag.a , '+' , 'flag:' , flag)
                message.reply('rpg hunt')
            }
        }

        //console.log('EKSW->flag.a:' , flag.a , '+' , 'flag:' , flag)
    
    })