const Discord = require("discord.js"); 
const PREFIX = "]"; 
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
const TOKEN = "NDQ0NDI0NzIzMDk1NjE3NTQ2.DdbuWA.gKBfkvAKHhe-G2Fa-_4rkrx3Zng"

var bot = new Discord.Client(); 

bot.on("ready", async () => {
    console.log(`${bot.user.username} Kembali Online!`); 
      function randomStatus() {
          let status = [`Ketik ]help Untuk Bantuan`, `With ${bot.user.size} User!`, `On ${bot.guilds.size} Server!`]
          let rstatus = Math.floor(Math.random() * status.length);
          bot.user.setActivity(status[rstatus], {type: 'STREAMING' , url: 'https://www.twitch.tv/afif_123'});
  
      }; setInterval(randomStatus, 10000)
});

bot.on('disconnect', async () => console.log('Saya sedang terputus dari jaringan, sedang menghubungkan...'));

bot.on('reconnecting', async () => console.log('Sukses Menghubungkan Kembali!'));

bot.on("message", function(message) { 

    if (message.author.equals(bot.user)) return; 

    if (!message.content.startsWith(PREFIX)) return; 

    if (!message.guild) return; 
    
    var args = message.content.substring(PREFIX.length).split(" "); 
    var command = args[0].toLowerCase() 


    if (command == "help") { 
        var embedhelpmember = new Discord.RichEmbed() 
            .setTitle("💬iPresence Commands\n") 
            .addField(" 👥General :", "`help`, `botinfo`, `userinfo`, `serverinfo`, `ping`, stats") 
            .addField(" 🎶Music :", "`play`, `pause`, `resume`, `skip`, `stop`, `np`, `queue`") 
            .addField(" 🎉Utility & Fun : ", "Not Found**(Error 404)**") 
            .addField(" 🔏Moderation (Comming Soon!) :", "`ban`, `kick`, `report`")   
            .setColor('RANDOM') 
            .setFooter(`Made By: ForceStop#4120 & Afif_#9369. Pesan Untuk: ${message.author}`) 
            .setTimestamp(); 
            message.channel.send(`📩${message.author}, Periksa **Direct Message** Kamu!`) 
            message.author.sendMessage(embedhelpmember); 
    };

    if (command == "botinfo") { 
        let bicon = bot.user.displayAvatarURL; 
        var embedhelpmember = new Discord.RichEmbed() 
            .setTitle("Invite Me") 
            .setURL('https://discordapp.com/oauth2/authorize?client_id=439682605105807360&scope=bot&permissions=2146958591') 
            .setDescription("**:robot:About Me!**") 
            .addBlankField() 
            .addField(" 📜  Nama",` • ${bot.user.tag}`, true) 
            .addField(" 🔖 Library", " • discord.js", true) 
            .addField(" 💬 Prefix", " • `-`", true) 
            .addField(" 🛠 Dibuat Pada", " • Kamis, 10 Mei 2018", true) 
            .addField(" 🚩 Language", " • :flag_id:Indonesian", true) 
            .addField(" 👤 Developer", " • **ForceStop#4120**\n • **Afif_#9369**", true) 
            .addField(" 📡 Terhubung Ke", ` • ${bot.guilds.size} Server\n • ${bot.users.size} Pengguna`, true) 
            .addField(" 📝 Bio", "iPresence BOT, Developed By : ForceStop#4120 & ") 
            .setThumbnail(bicon) 
            .setColor('RANDOM') 
            .setTimestamp()
            .setFooter(`• Pesan Untuk: ${message.author.tag}`); 
            message.channel.send(embedhelpmember); 
    };

    if(command == "userinfo") { 
        let bicon = message.author.displayAvatarURL; 
        var embedhelpmember = new Discord.RichEmbed() 
            .setDescription("**👤Informasi Pengguna**") 
            .addBlankField() 
            .addField(" 🏷 Nama Pengguna", `${message.author.tag}`, true) 
            .addField(" 💳 ID", `${message.author.id}`, true) 
            .addField(" 🕘 Dibuat Pada", `${message.author.createdAt}`, true) 
            .setThumbnail(bicon) 
            .setColor('RANDOM') 
            .setTimestamp()
            .setFooter(`• Pesan Untuk: ${message.author.tag}`);  
            message.channel.send(embedhelpmember) 
    };

    if(command == "serverinfo") { 
        const verificationLevels = ['**None** (Unrestricted)', '**Low** (Must have a verified email on their Discord account.)', '**Medium** (Must also be registered on Discord for longer than 5 Minutes.)', '**Hard** (Must also be a member of this server for longer than 10 Minutes.)', '**Very Hard** (Must have a verified phone on their Discord accounts.)']; 
        const moment = require("moment"); 
             require("moment-duration-format"); 
      
             let TextChannels = message.guild.channels.filter(e => e.type !== 'voice').size; 
             let VoiceChannels = message.guild.channels.filter(e => e.type === 'voice').size; 
             let CategoryChannels = message.guild.channels.filter(e => e.type === 'category').size; 
             let unique = message.guild.members.filter(m => m.presence.status !== 'offline' && m.presence.status !== 'online').size.toLocaleString() 
             let onlinem = message.guild.members.filter(m => m.presence.status === 'online').size.toLocaleString() 
             let idlem = message.guild.members.filter(m => m.presence.status === 'idle').size; 
             let disturbm = message.guild.members.filter(m => m.presence.status === 'dnd').size; 
             let offlinem = message.guild.members.filter(m => m.presence.status === 'offline').size.toLocaleString() 
      
             let sicon = message.guild.iconURL; 
             if(!sicon) return message.channel.send(`❌Server Ini Tidak Memiliki Logo, Membutuhkan Logo Untuk Menggunakan Ini!`) 
             let roleslist = message.guild.roles.array().join(" | "); 
             let serverembed = new Discord.RichEmbed() 
             .setDescription(` 🏷 Nama : ${message.guild.name}\n 💳 ID : ${message.guild.id}`) 
             .addBlankField() 
             .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`) 
             .addField(` ✅ Tingkat Keamanan :`,` ${verificationLevels[message.guild.verificationLevel]}`) 
             .addBlankField() 
             .addField(` 🌎 Negara :`, ` • ${message.guild.region}`, true) 
             .addField(` 📌 Pangkat :`, ` • ${message.guild.roles.size}`, true) 
             .addField(` 📡 Channel : [${message.guild.channels.size}]`, ` • ${CategoryChannels} Kategori\n • ${TextChannels} Text\n • ${VoiceChannels} Voice`, true) 
             .addField(` 👥 Jumlah Member : [${message.guild.memberCount}]`, ` • ${unique} Sedang Online\n • ${onlinem} Online Terus\n • ${idlem} AFK\n • ${disturbm} DND\n • ${offlinem} Offline`, true) 
             .addField(" 👑 Pemilik Server :", ` • **${message.guild.owner.user.tag}**`, true) 
             .addField(" 🕘 Dibuat Pada :", ` • ${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true) 
             .addBlankField() 
             .setThumbnail(`${message.guild.iconURL}`) 
             .setTimestamp() 
             .setColor('RANDOM') 
             .setFooter(`• Pesan Untuk: ${message.author.tag}`);  
             return message.channel.send(serverembed); 
    }

    if (command == "ping") {
        message.react("✅")
        var lat_ms = `${Date.now() - message.createdTimestamp}`
        var api_ms = (bot.ping).toFixed(2)

        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter("© IPresence | discord.js")
        .setTimestamp()
        .setDescription("You Beep, I Boop.")
        .addField("📁 | Latency:", lat_ms + "ms.", true)
        .addField("💻 | API:", api_ms + "ms.", true)

        message.channel.send({embed});
    }
    
          if(command == `kick`){
    
        //!kick @daeshan askin for it
    
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) {
            let qembed = new Discord.RichEmbed()
            .setDescription("**:x: | Tidak ada player yang ingin anda kick**")
            .setColor("#ce0e00")
            return message.channel.send(qembed);
        }
        let kReason = args.join(" ").slice(22);
        if(!kReason) {
            let yembed = new Discord.RichEmbed()
            .setDescription("**:X: | Berikan saya reason**")
            .setColor("#ce0e00")
            return message.channel.send(yembed)
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            let wembed = new Discord.RichEmbed()
            .setDescription("**:X: | Anda tidak ada permission untuk menggunakan command ini!**")
            .setColor("#ce0e00")
            return message.channel.send(wembed);
        }
        if(kUser.hasPermission("MANAGE_MESSAGES")) {
            let eembed = new Discord.RichEmbed()
            .setDescription("**Saya tidak ada permission untuk kick player tersebut!**")
            .setColor("#ce0e00")
            return message.channel.send(eembed)
        }
    
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kicked Player!")
        .setColor("#e56b00")
        .addField("Nama Player", `${kUser}`)
        .addField("Kicked Oleh", `<@${message.author.id}>`)
        .addField("Kicked Di", message.channel)
        .addField("Waktu", message.createdAt)
        .addField("Reason", kReason);
    
        let kickChannel = message.guild.channels.find(`name`, "mod-logs");
        if(!kickChannel) {
            let kickChannel = new Discord.RichEmbed()
            .setDescription("**Tidak ada channel bernama `mod-logs`**")
            .setColor("#ce0e00")
            return message.channel.send(kickChannel)
        }
    
        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);

        message.delete().catch(O_o=>{});
        message.channel.send(":white_check_mark: | Berhasil kicked player tersebut!");
    
    
        return;
      }
    
      if(command === `ban`){
    
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) {
            let qembed = new Discord.RichEmbed()
            .setDescription("**:x: | Tidak ada player yang ingin anda banned!**")
            .setColor("#ce0e00")
            return message.channel.send(qembed);
        }
        let bReason = args.join(" ").slice(22);
        if(!bReason) {
            let yembed = new Discord.RichEmbed()
            .setDescription("**:x: | Berikan saya reason!**")
            .setColor("#ce0e00")
            return message.channel.send(yembed);
        }
        if(!message.member.hasPermission("MANAGE_MEMBERS")) {
            let wembed = new Discord.RichEmbed()
            .setDescription("**:X: | Anda tidak ada permission untuk banned player tersebut!**")
            .setColor("#ce0e00")
            return message.channel.send(wembed);
        }
        if(bUser.hasPermission("MANAGE_MESSAGES")) {
            let eembed = new Discord.RichEmbed()
            .setDescription("**:x: Saya tidak ada permission untuk banned player tersebut!**")
            .setColor("#ce0e00")
            return message.channel.send(eembed)
        }
    
        let banEmbed = new Discord.RichEmbed()
        .setDescription("Banned Player!")
        .setColor("#bc0000")
        .addField("Player Name:", `${bUser} with ID ${bUser.id}`)
        .addField("Banned Oleh:", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned Di:", message.channel)
        .addField("Waktu:", message.createdAt)
        .addField("Reason", bReason);
    
        let incidentchannel = message.guild.channels.find(`name`, "mod-logs");
        if(!incidentchannel) {
            let IncidentChannel = new Discord.RichEmbed()
            .setDescription("**Tidak ada channel bernama `mod-logs`**")
            .setColor("#ce0e00")
            return message.channel.send(incidentChannel)
        }
    
        message.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);

        message.delete().catch(O_o=>{});
        message.channel.send(":white_check_mark: | Berhasil report banned player tersebut!");
    
    
    
        return;
       }
    
    
      if(command === `report`){
    
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) {
            let qembed = new Discord.RichEmbed()
            .setDescription("**Tidak ada player yang ingin anda report.**")
            .setColor("#ce0e00")
            return message.channel.send(qembed);
        }
    
        let rreason = args.join(" ").slice(22);
        if(!rreason) {
            let yembed = new Discord.RichEmbed()
            .setDescription("Berikan saya reason!")
            .setColor("#ce0e00")
            return message.channel.send(yembed)
        }
    
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#15f153")
        .addField("Nama Player", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported Oleh", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Waktu", message.createdAt)
        .addField("Reason", rreason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) {
            let reportsChannel = new Discord.RichEmbed()
            .setDescription("**Tidak ada channel bernama `reports`**")
            .setColor("#ce0e00")
            return message.channel.send(reportschannel)
        }
    
    
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);

        message.channel.send(":white_check_mark: | Berhasil report player tersebut!");
    
        return;
    }


});
bot.login(TOKEN); 
