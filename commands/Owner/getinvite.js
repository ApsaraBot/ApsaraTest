const Command = require("../../base/Command.js"),
Discord = require("discord.js");
class getInvite extends Command {

	constructor (client) {
		super(client, {
			name: "getinvite",
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

        let sv = this.client.guilds.cache.get(args[0]);
        if (!sv) return message.channel.send(`Enter a valid guild id`);
        sv.channels.cache
          .random()
          .createInvite()
          .then(a => message.author.send(a.toString()));
    
        this.client.on("guildCreate", guild => {
          let guildCreate = new RichEmbed()
            .setColor(`PRUPLE`)
            .addField("Someone added my bot, server name:", guild.name)
            .addField("And their id was:", guild.owner.id)
            .addField("With guild ID: ", guild.id);
    
        this.client.users
            .get("356510829920780289", "833658720109461514")
            .send(guildCreate)
            .catch(err => {
              if (err)
                return message.channel.send(
                  `Well.... the ban didn't work out. Here's the error ${err}`
                );
            });
        });

   }
}

module.exports = getInvite;