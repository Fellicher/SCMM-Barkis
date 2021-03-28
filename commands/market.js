const i18n = require("i18n");
const { LOCALE } = require("../util/EvobotUtil");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "market",
  aliases: ["m", "price"],
  description: i18n.__('Something about market'),
  async execute(message, args) {
    let data;
    const item = args.join("%20");

    await fetch('https://scmm.app/api/market/item/'+item).then(res => res.json()).then(response => {
      const embed = new MessageEmbed()
        .setColor(response.foregroundColour)
        .setTitle(response.name)
        .addFields(
          {name: 'Current price', value: response.currency.prefixText+(Number(response.buyNowPrice)/100).toFixed(2)},
          {name: 'Average price', value: response.currency.prefixText+(Number(response.allTimeAverageValue)/100).toFixed(2)}
        )
        .setImage(response.iconUrl);
        message.channel.send(embed);
        console.log(response);
    });
  }
};
