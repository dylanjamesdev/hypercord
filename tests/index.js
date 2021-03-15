const { Client, MessageEmbed } = require("../src/index");
let config = require("./config.json");
let client = new Client();

client.on("ready", async () => {
  console.log("ready!");

  client.setPresence({
    status: "online",
    game: {
      name: "VERY NIAS",
      type: "LISTENING",
    },
    client_status: "mobile",
  });
});

client.on("guild_create", (g) => {

});

client.on("message", (m) => {
  if(m.author.bot == true) return;

  let embed = new MessageEmbed()
    .setTitle("Hello!")
    .setDescription("uwu!");

  m.channel.send(embed);
});

client.login(config.token);
