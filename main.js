const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
	console.log('HeeHaw is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    // slice command
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'hello') {
        message.channel.send('hello');
    }
});

client.login('ODg4NDA4NjYwMjExMDQwMjc2.YUSRCg.6zaYl4PBcokA-bXajieUKWqbDZ8');
