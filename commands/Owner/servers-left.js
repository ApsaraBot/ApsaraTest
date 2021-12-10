const Command = require("../../base/Command.js"),
Discord = require("discord.js");

class ServersLeft extends Command {

	constructor (client) {
		super(client, {
			name: "servers-left",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: [],
			botPermissions: [],
			nsfw: false,
			ownerOnly: true,
			cooldown: 3000
		});
	}

	async run (message, args) {

        let id = args[0];
		let reason = args.slice(1).join(" ");
		if(!reason){
			reason = message.translate("misc:NO_REASON_PROVIDED");
		}
        if (!id) id = message.guild.id;
    

        this.client.guilds.cache.get(id).leave()
        .then(g => message.channel.send(`Bot has been remove from \`${g}\` server! Reason: \`${reason}\``));

   }
}

module.exports = ServersLeft;