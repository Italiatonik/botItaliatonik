const {Client,RichEmbed}=require('discord.js');
const client = new Client();

client.on('ready',()=>{
    console.log(`Mi bot esta despierto: ${client.user.tag}`);
    if (client.user.presence.status === 'dnd'){
        console.log('El bot esta invernando', client.user.presence.status);
    }else{
        console.log('El bot esta activo');
    }
    const testChannel = client.channels.find(channel => channel.name === 'Canal de gamers uaem');
        console.log('el bot italiatonik esta activo')
});

client.on('message', async message => {
    console.log(message);
    if(message.content === 'ping'){
        message.reply('pong');
    }

    if(message.content === 'hola'){
        message.channel.send(`hola ${message.author} saludos cuates`);
    }

    if(message.content.includes('joto')){
        message.channel.send(`No se pueden decir groserias ${message.author}`);
    }

    if(message.content === 'facebook'){
        message.channel.send('https://facebook.com');
        message.channel.send('https://youtube.com');
    }

    if(message.content === '!pretty'){
        const embed = new RichEmbed()//los mensajes se vean bonitos
            .setTitle('Pretty Message')
            .setColor('#009975')
            .setAuthor('Italiatonik','https://media-cdn.tripadvisor.com/media/photo-s/16/6c/08/af/el-desierto-por-la-noche.jpg')
            message.channel.send(embed);
    }

    if(message.content === '!clear'){
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('message deleted')
    }

    

});

client.login('NjUwMDA0NzE1MjE1NjUwODI2.XeFDSQ.mVf4qwylfIo5KhCTOimgJh7t31k');
