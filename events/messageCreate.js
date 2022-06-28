const { Permissions, Message } = require('discord.js')

require('dotenv/config')
const prefix = process.env.PREFIX

module.exports = {
  name: 'messageCreate',
  once: false,
  async execute(message = new Message) {
    if (!message.content.startsWith(prefix)) return
    const client = message.client
    const args = message.content.slice(prefix.length).trim().split(/\s+/)
    const cmd_name = args.shift().toLowerCase()
    const command = client.commands.get(cmd_name) || client.commands.find(x => x.alias.includes(cmd_name))
    try {
      if (command.info.bot_permissions
        && !message.guild.me.permissions.has(command.info.bot_permissions)) {
        const invertKeyValue = ([key, value]) => { return { key: value, value: key } }
        const turnIntoObject = (acc, cur) => Object.assign(acc, { [cur.key]: cur.value })

        const permissions = Object.entries(Permissions.FLAGS)
          .map(invertKeyValue)
          .reduce(turnIntoObject, {})

        const permissionNames = command.info.bot_permissions.map(perm => {
          const name = permissions[perm]
            .replace(/(?<=(_|^)[A-Z])[A-Z]+/g, e => e.toLowerCase())
            .replaceAll('_', ' ')

          return `\`${name}\``
        }).join(', ')

        return message.reply(`**I don't have permissions to execute that command.**\n> To execute it, I need: ${permissionNames}`)
      }

      if (command.info.user_permissions
        && !message.member.permissions.has(command.info.user_permissions)) {
        return message.reply("**You don't have permissions to execute that command.**")
      }

      await command.run(client, message, args)
    } catch (err) {
      console.log(err)
      return message.reply('**Oops, an error ocurred.**')
    }
  }
}