const CLEAR_MESSAGES = '!sil';
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
  
bot.on('ready', () => {
  console.log('Mesajları Temizleye Hazırım!');
  bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Üzgünüm, komutu yürütme izniniz yok \""+message.content+"\"");
        console.log("Üzgünüm, komutu yürütme izniniz yok \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Üzgünüm, komutu yürütme iznim yok \""+message.content+"\"");
        console.log("Üzgünüm, komutu yürütme iznim yok \""+message.content+"\"");
        return;
      }

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted
 
            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Mesajların başarılı bir şekilde silinmesi. Toplam mesaj silindi: "+messagesDeleted);
            console.log('Mesajların başarılı bir şekilde silinmesi. Toplam mesaj silindi: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Toplu Silme yapılırken hata oluştu');
            console.log(err);
          });
      }
    }
  });
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
	console.log("Bot démarré");
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
	
	if(message.content.substring(0, 7) == "!report")
	{
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("**Rapor siparişi için yardım :** \n\n Uygunsuz davranışa sahip bir veya daha fazla kullanıcıyı rapor etmek için, rapor komutundan sonra kullanıcıların adını veya adlarını koyun. \n\n Nitelikle belirli bir nedeni de ekleyebilirsiniz `-r:\"Senin sebebin\"`. \n\n Bu komutu tamamen kötüye ve dalgaya kullanmayın, teşekkürler :wink: ! \n\n **örnek 1 :** `!report @user` \n **örnek 2 :** `!report @user1 @user2` \n **örnek 3 :** `!report @user1 -r:\"Bir sebep\"`");
			}
		}
		else
		{
			// Vérifier les noms + raison de signalement
			var verifNom = true;
			var raisonSignalement = null;
			var inOptionRaison = false;
			
			for(var i = 1; i < commande.length; i++)
			{
				// Les noms des personnes citées commencent par "<", le caractère suivant étant @
				if(commande[i].charAt(1) !== "@")
				{
					// On ne prend pas en compte l'option -r (raison)
					if(commande[i].substring(0, 4) == "-r:\"")
					{
						raisonSignalement = commande[i].substring(3);
						inOptionRaison = true;
					}
					else
					{
						if(inOptionRaison == false)
						{	
							verifNom = false;
						}
						else
						{
							raisonSignalement = raisonSignalement + " " + commande[i];
						}
					}
				}
			}
			
			if(verifNom === true)
			{
				// Vérification des abus
				var aAppele = false;
				for(var i = 0; i < dernierAppel.length; i++)
				{
					if(dernierAppel[i][0] == message.author.id)
					{
						// Un signalement toutes les 3 minutes autorisé
						if((message.createdTimestamp - dernierAppel[i][1]) < 180000)
						{
							aAppele = true;
						}
						else
						{
							aAppele = false;
							dernierAppel.splice(i, 1);
						}
					}
				}
				
				if(aAppele == false)
				{
					dernierAppel.push([message.author.id, message.createdTimestamp]);
					
					var moderateurs = new Array();
					
					var sontAvertis = true;
					
					message.channel.guild.roles.forEach(function(role)
					{
						// Chercher les modérateurs parmi tous les rôles
						
						if (role.hasPermission('BAN_MEMBERS'))
						{
							role.members.forEach(function(member)
							{
								var estDejaPrevenu = false;
								for(var j = 0; j < moderateurs.length; j++)
								{
									if(member == moderateurs[j])
									{
										// Est déjà prévenu
										estDejaPrevenu = true;
									}
								}
									
								if(estDejaPrevenu == false)
								{
									moderateurs.push(member);
								
									// Fonction conversion timestamp -> Date
									function timeConverter(timestamp)
									{
										var a = new Date(timestamp);
										var tabMois = ['Ocak.','Şubat.','Mart','Nisan.','Mais.','Haziran','Temmuz.','Ağustos','Eylül.','Ekim.','Kasım.','Aralık.'];
										var yıl = a.getFullYear();
										var ay = tabMois[a.getMonth()];
										var tarih = a.getDate();
										var saat = a.getHours();
										var dakika = a.getMinutes();
										var saniye = a.getSeconds();
										var time = "le " + tarih + ' ' + ay + ' ' + yıl + ' à ' + saat + 'h' + dakika + ':' + saniye ;
										return time;
									}
									
									// Reporter les utilisateurs
									var MP = "Gönderilen bir rapor " + timeConverter(message.createdTimestamp) + " tarafından **" + message.author.username + "** karşı yapıldı ";
									
									message.mentions.users.forEach(function(user)
									{
										MP = MP + "@" + user.username + " ";
									});
									
									MP =  MP + "üzerinde *" + member.guild.name + "/" + message.channel.name + "*";
									
									// Prise en charge de la raison du signalement
									if(raisonSignalement != null)
									{
										MP = MP + " aşağıdaki sebepten dolayı : *" + raisonSignalement + "*";
									}
									
									try
									{
										member.user.sendMessage(MP);
									}
									catch(e)
									{
										sontAvertis = false;
									}
								}
							});
						}
					});
					
					if(sontAvertis == true)
					{
						message.reply("Raporlama bitti :wink: !");
					}
				}
			}
		}
	}
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "merhaba") {
        message.reply(":star:MERHABA MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Selam") {
        message.reply(":star:ALEYKUM SELAM MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "selam") {
        message.reply(":star:ALEYKUM SELAM MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Sa") {
        message.reply(":star:AS MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "sa") {
        message.reply(":star:AS MERTHAN BEY SUNUCUSUNA HOŞGELDİNİZ:star:");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "INTERNET") {
        message.reply("Youtube :  Instagram :  Snapchat :  Twitch :  Facebook Groupe :  Discord :  LFN TeamSpeak : ");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Coucou") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "coucou") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "CC") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "cc") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "welcome") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Welcome") {
        message.reply("Welcome To Do LesFamilles NDNG. :)");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "régle") {
        message.reply("Les demandes de votre part: 1. Moins la malédiction, plus nous sommes heureux. 2.Faites vos repères en particulier. 3.Faites vos repères en particulier. 4. Toute annonce de chaîne ou de discord est interdit. 5. Le partage sexuel, de sang, de sauvagerie est interdit. 6. La vente / l'échange de comptes de jeux, de souvenirs, de matériel de jeu, etc., et le partage de liens de référence sont interdits. 7. La religion, la langue, la race et la politique sont strictement interdites. 8. Les spams et les inondations sont interdits.");
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
                message.channel.sendMessage("Vous devez être dans The Voice :)");
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
            message.channel.sendMessage("NE DEDINIZI ANLAMADIM!")
        }
    });

bot.login(TOKEN);