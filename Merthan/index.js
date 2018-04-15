const Discord = require("discord.js");
const client = new Discord.Client();
const YTDL = require("ytdl-core");

const TOKEN = "NDMxOTY0NDUyNzIwNzM4MzIz.DamZ7A.Y1beSAq839dO6rCdbztQv6TwYx8";
const ownerID = "363840664955518997"
const PREFIX = "&";

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "fucc u"
];

var bot = new Discord.Client();

var servers = {};

client.on('ready', () => {
    bot.user.setGame("MerthanBeyBotu");
    console.log(`${client.user.tag} HOŞGELDİN KARDAŞ!`);
  });

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Merhaba") {
        message.reply(":star:MERHABA MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star: ");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Merhaba") {
        message.reply(":star:MERHABA MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star: ");
    }
});

bot.on("ready", () => {
	console.log("Geldim");
});

bot.on("message", (message) => {
	
	/*
		Object message :
		
		- mentions.users = utilisateurs mentionnés
		- author.username = auteur du message
		- content = contenu du message
		- createdTimestamp = timestamp du message
		- member.guild.name = nom du serveur
		- channel.name = nom du topic
		- channel.topic = description du topic
		- channel.guild.roles = rôles sur le serveur
	*/
	
	if(message.content.substring(0, 7) == "&sm")
	{
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("**Sosial Mediam :**\n\n Youtube : https://www.youtube.com/channel/UC4TtSN-4F3M9gkhiyLBaGLA\nInstagram : https://www.instagram.com/merthanbey007/\nTwitch : https://www.twitch.tv/merthanbeyz");
			}
		}
	}
});

bot.on("message", (message) => {
	
	/*
		Object message :
		
		- mentions.users = utilisateurs mentionnés
		- author.username = auteur du message
		- content = contenu du message
		- createdTimestamp = timestamp du message
		- member.guild.name = nom du serveur
		- channel.name = nom du topic
		- channel.topic = description du topic
		- channel.guild.roles = rôles sur le serveur
	*/
	
	if(message.content.substring(0, 7) == "&kr")
	{
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("__***:x:KURALLAR:x:***__ \n\n 1- Küfür ne kadar az olursa o kadar memnun oluruz.\n2- Her hangi bir kanal veya discord reklamı yasaktır.\n3- Kavgalarınızı özelden yapınız.\n4- Cinsel, kan, vahşet içerikli paylaşımlar yasak.\n4- Din, dil, ırk ve siyaset içerikli konular kesinlikle yasaktır.\n5- Spam ve flood yasak.\n6- Kullanıcı Limiti olan odaları tek başınıza girerek meşgul etmeyin, AFK olarak kullanmayın.\n\nVE BURDAN __ParisdekiBebeg__'YE TEŞEKKÜR EDERIM BENI CODLADI IÇIN");
			}
		}
	}
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "amk") {
	message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }
    
    if (message.content == "AMK") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "AMk") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "aMK") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "AmK") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "aMk") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "AmK") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "aq") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "AQ") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Aq") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "aQ") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Sikerim") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "sikerim") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Oruspu") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "oruspu") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "oç") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Oç") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "OÇ") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "AMINA") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Yarrak") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "yarrak") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "SQ") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "sq") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "orosbçocuğu") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "oorroossbbuuççooccuugguu") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "YARAK") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "yarak") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "YARAGM") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "yaragm") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "YALLA") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "yalla") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "YALA") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "yala") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Yala") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "oc") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "OC") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Oc") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "amcık") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Amcık") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "AMCIK") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "OROSBU ÇOCUGU") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "OROSPU") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Orospu") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "orospu") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "yrrak") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "yarrakl") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "OROSBU ÇOCUGU") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "KAFALI") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "TS") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "KAFA") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "kafa") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "kafa") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "Kafa") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "kafalı") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "amq") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "AMQ") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "AmQ") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content == "aMq") {
        message.delete (30);
        message.reply(":rage:KÜFÜR ETME LAN:rage:").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "merhaba") {
	message.delete (3000);
        message.reply(":star:MERHABA MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Selam") {
	message.delete (3000);
        message.reply(":star:ALEYKUM SELAM MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "selam") {
	message.delete (3000);
        message.reply(":star:ALEYKUM SELAM MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Sa") {
	message.delete (3000);
        message.reply(":star:AS MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "sa") {
	message.delete (3000);
        message.reply(":star:AS MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "welcome") {
	message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Welcome") {
	message.delete (3000);
        message.reply("Welcome To Do LesFamilles NDNG. :)").then(d_msg => { d_msg.delete(3000); });
    }
});


bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "HOŞGELDİNİZ").sendMessage(member.toString() + " NASIL YARDIMCI OLA BILIRIM SIZE!");

    member.addRole(member.guild.roles.find("name", "@everyone"));

    member.guild.createRole({
        name: member.user.username,
        color: generateHex(),
        permissions: []
    }).then(function(role) {
        member.addRole(role);
    });
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!")
            break;
        case "yönetici":
            message.channel.sendMessage("YÖNETICI DRİFT MERTHAN [19]#2374");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Je ne peux pas lire ça");
            break;
         case "embed":
            var embed = new Discord.RichEmbed()
                .addField("Test Title", "Test Description", true)
                .addField("Test Titl2e", "Test De2scription", true)
                .addField("Test 3Title", "Test De3scription", true)
                .addField("Test 3Titl53e", "Test De3sc345ription")
                .addField("3Test Titl4e", "Test De3s4cription")
                .setColor(0x00FFFF)
                .setFooter("Bu mesaj gayet güzel, ohhh EMBED gotem demek istediğim mesaj mı dedim")
                .setThumbnail(message.author.avatarURL)
            message.channel.sendMessage(embed);
            break;
        case "noticeme":
            message.channel.sendMessage(message.author.toString() + " sadasaasdsdaasd");
            break;
        case "removerole":
            message.channel.sendMessage("removed");
            message.member.removeRole(message.member.guild.roles.find("name", "NewDayNewGame"));
            break;
        case "deleterole":
            message.member.guild.roles.find("name", "NewDayNewGame").delete();
            message.channel.sendMessage("delet");
            break;
        case "oynat":
            if (!args[1]) {
                message.channel.sendMessage("LINK LAZIM");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.sendMessage("Botu carmak icin odaya girin!");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
            break;
        case "skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            break;
        case "shop":
            var server = servers[message.guild.id];
            break;
        default:
            message.channel.sendMessage("")
        }
    });

bot.login(TOKEN);
