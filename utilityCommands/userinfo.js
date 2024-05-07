const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'userinfo',
    aliases: ['user', 'uinfo'],
    description: 'Get information about a user',
    execute(message, args) {
        // Check if a user was mentioned in the command, or use the message author as the default user
        const user = message.mentions.users.first() || message.author;

        // Create an embed object
        const embed = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setAuthor({
        name: 'User Info!',
        iconURL: 'https://cdn.discordapp.com/attachments/736261745483710487/1237231064481796237/yay-yeah.gif?ex=663ae4b8&is=66399338&hm=0e6565dc1867959993e430f5046744cc831076da0e525f39118f43681b992494&', 
        url: 'https://discord.gg/RhMX7TK6'
    })
        .setThumbnail(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setDescription(`**Username**:  ${user.username}\n**Discriminator**:  ${user.discriminator}\n**ID**:  ${user.id}\n**Joined Discord**:  ${user.createdAt.toUTCString()}`)
        .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/FUEHs7RCqz
   YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/c4kaW2sSbm ]
*/
