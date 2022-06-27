module.exports = {
  // the event name
  name: 'ready',
  // if it should run only once, set to true
  once: true,
  // the code that will run when this event trigger
  execute(client) {
    console.log(`Logged as ${client.user.username} in ${client.guilds.cache.size} servers.`)
  }
}