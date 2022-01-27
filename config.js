module.exports = {
	/* The token of your Discord Bot */
	token: "ODM0NDkzMzA1NzQ4MzI0Mzkz.YIBsdA.0HCyXe0KASHCvnLxBGIKyg1q5SI",
	/* For the support server */
	support: {
		id: "430630483408453633", // The ID of the support server
		logs: "694443492989992990", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "MHDuc1Lzwpd1xVf3cvwN5ayCrGBKSECg", // Your discord client secret
		baseURL: "localhost", // The base URl of the dashboard
		logs: "694443492989992990", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "localhost" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://apsara:a6oncUgDCCjsRMz4@pailev.9a41d.mongodb.net/apsaradata?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "a/", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#FFD700", // The default color for the embeds
		footer: "Apsara Bot v1",
		clientAvatar: "this.client.user.avatarURL" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "356510829920780289", // The ID of the bot's owner
		name: "Tentennnn#6944" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "tenbot", // The webhook auth that you have defined on discordbots.org
		channel: "844547603613483018" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "https://blague.xyz/",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "63324e61-1b20-4c33-ae6b-bc5c402f002e",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "5ab16c0e5f957f27504aa4e4",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NzM1NzY4NTEzMzI3OTI1NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE5MDMyNDU2fQ.xXCVrQkK9MFRzHZmbE6R6C7D1T6EY_JD9EfyXFIG_Lw",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "116949eaa929d5b53f3ba48e0ddfaa9a15fd8625531b4fa4049d2f9794611b78aa4492c70aa3e280d24c2c83522ce68573c943b634448770dcfa5e4fa5e4d3ba",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		// sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Tentennnnn", // Founder's github account
		donate: "ABA : 001 581 635 LIM CHILONG" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "help on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "Website : apsarabot.xyz",
			type: "PLAYING"
		},
		{
			name: "Prefix: t/",
			type: "PLAYING"
		}
	]
};
