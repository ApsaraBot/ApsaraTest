const Command = require("../../base/Command.js"),
	Discord = require("discord.js");

class ServersList extends Command {

	constructor (client) {
		super(client, {
			name: "servers-list",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "slist" ],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: true,
			cooldown: 5000
		});
	}

	async run (message, args, data) {
        
		await message.delete();

		// let i0 = 0;
		// let i1 = 10;
		// let page = 1;

		// let description = 
        // `${message.translate("common:SERVERS")}: ${this.client.guilds.cache.size}\n\n`+
		// this.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
		// 	.map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} ${message.translate("common:MEMBERS").toLowerCase()}`)
		// 	.slice(0, 10)
		// 	.join("\n");

		// const embed = new Discord.MessageEmbed()
		// 	.setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 512, dynamic: true, format: 'png' }))
		// 	.setColor(data.config.embed.color)
		// 	.setFooter(this.client.user.username)
		// 	.setTitle(`${message.translate("common:PAGE")}: ${page}/${Math.ceil(this.client.guilds.cache.size/10)}`)
		// 	.setDescription(description);

		// const msg = await message.channel.send(embed);
        
		// await msg.react("⬅");
		// await msg.react("➡");
		// await msg.react("❌");

		// const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);

		// collector.on("collect", async(reaction) => {

		// 	if(reaction._emoji.name === "⬅") {

		// 		// Updates variables
		// 		i0 = i0-10;
		// 		i1 = i1-10;
		// 		page = page-1;
                
		// 		// if there is no guild to display, delete the message
		// 		if(i0 < 0){
		// 			return msg.delete();
		// 		}
		// 		if(!i0 || !i1){
		// 			return msg.delete();
		// 		}
                
		// 		description = `${message.translate("common:SERVERS")}: ${this.client.guilds.cache.size}\n\n`+
		// 		this.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
		// 			.map((r, i) => `**${i + 1}** - ${r.name} | ${r.guild.id} ${message.translate("common:MEMBERS")} | ${r.guild.id}`)
		// 			.slice(i0, i1)
		// 			.join("\n");

		// 		// Update the embed with new informations
		// 		embed.setTitle(`${message.translate("common:PAGE")}: ${page}/${Math.round(this.client.guilds.cache.size/10)}`)
		// 			.setDescription(description);
            
		// 		// Edit the message 
		// 		msg.edit(embed);
            
		// 	}

		// 	if(reaction._emoji.name === "➡"){

		// 		// Updates variables
		// 		i0 = i0+10;
		// 		i1 = i1+10;
		// 		page = page+1;

		// 		// if there is no guild to display, delete the message
		// 		if(i1 > this.client.guilds.cache.size + 10){
		// 			return msg.delete();
		// 		}
		// 		if(!i0 || !i1){
		// 			return msg.delete();
		// 		}

		// 		description = `${message.translate("common:SERVERS")}: ${this.client.guilds.cache.size}\n\n`+
		// 		this.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
		// 			.map((r, i) => `**${i + 1}** -- ${r.name} | ${r.guild.id} ${message.translate("common:MEMBERS").toLowerCase()} | ${r.guild.id}`)
		// 			.slice(i0, i1)
		// 			.join("\n");

		// 		// Update the embed with new informations
		// 		embed.setTitle(`${message.translate("common:PAGE")}: ${page}/${Math.round(this.client.guilds.cache.size/10)}`)
		// 			.setDescription(description);
            
		// 		// Edit the message 
		// 		msg.edit(embed);

		// 	}

		// 	if(reaction._emoji.name === "❌"){
		// 		return msg.delete(); 
		// 	}

		// 	// Remove the reaction when the user react to the message
		// 	await reaction.users.remove(message.author.id);

		// });

		var footertext = [`🔹`, `💠`, `🔸`, `🔲`, `▪`, `🎉`, `➡️`];
        var rand = Math.floor(Math.random() * footertext.length);
        var randomstar = footertext[rand];
      // Lets define our array of guilds
        const guildArray = this.client.guilds.cache.map((guild) => {
        return `${randomstar} ${guild.name} == ${guild.id}`
        })
    
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription(`\`\`\`${guildArray.join('\n')}\`\`\``)
            .setTimestamp()
            .setFooter(`Request by :${message.author.tag} `, message.author.avatarURL) //This sets the footer of the embed to text of your choice.
    message.channel.send(embed)


	}

}

module.exports = ServersList;
