const  { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`登入 ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === '軟體') {
		msg.reply('你是指初音嗎？');
	}
	if (message.content === '測試') {
	// We can create embeds using the MessageEmbed constructor
	// Read more about all that you can do with the constructor
	// over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
	const embed = new RichEmbed()
	  // Set the title of the field
	  .setTitle('A slick little embed')
	  // Set the color of the embed
	  .setColor(0xFF0000)
	  // Set the main content of the embed
	  .setDescription('Hello, this is a slick embed!');
	// Send the embed to the same channel as the message
	message.channel.send(embed);
	}
});

client.login('token');

client.login('NTQxMTUzMzIxODQ3NzUwNjc2.DzbXIg.zqyvuzD7FfBZE_wcAf8F2Bh5eiU');

