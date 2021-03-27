const i18n = require("i18n");
const { LOCALE } = require("../util/EvobotUtil");
const fs = require("fs");
const fetch = require("node-fetch");

i18n.setLocale(LOCALE);

module.exports = {
  name: "market",
  description: i18n.__('Something about market'),
  async execute(message, args) {
    let data;
    const item = args.join("%20");

    try {
        var respone = await fetch('https://scmm.app/api/market/item/'+item);
        data = await response.json();
    } catch(e) {
        console.error(e);
    }
    console.log(data);
  }
};
