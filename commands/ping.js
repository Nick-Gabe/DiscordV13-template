const { Permissions, MessageEmbed  } = require('discord.js');

module.exports = {
    // The name of the command
    name: 'ping',
    // Secondary names of the command
    alias: ['pong'],
    info: {
        // The permissions the bot needs in order to execute this command
        bot_permissions: [
            Permissions.FLAGS.SEND_MESSAGES
        ],
        // The permissions the user needs in order to execute this command
        user_permissions: []
    },
    // This code will be executed if the command is called
    async run(client, message, args) {
        let ping_embed = new MessageEmbed()
        .setColor('#75ac1c')
        .setTitle('🏓 Pong!')
        .setThumbnail(client.user.displayAvatarURL({size: 2048, format: 'png'}))
        .setDescription(`My latency is:`)
        .addFields(
            { name: '✉️ Response Time:', value: `\`${Math.abs(Date.now() - message.createdTimestamp)}\`ms`},
            {name: '📮 API Response Time:', value: `\`${Math.round(client.ws.ping)}\`ms`}
        )
        .setFooter(`🐲 ${client.user.username}`)
        .setTimestamp()

        return message.reply({embeds: [ping_embed]})
    }
}