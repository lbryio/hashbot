let moment = require(`moment-timezone`);
let config = require(`config`);
let { logChannel, commandThrottle } = config.get(`moderation`);
let { pm2Name } = config.get(`General`);
exports.errorHandler = function(process, bot) {
  process.on(`uncaughtException`, err => {
    var time = moment()
      .tz(`America/Los_Angeles`)
      .format(`MM-DD-YYYY hh:mm a`);
    console.log(`[${time} PST] uncaughtException: ${err}`);
  });
  process.on(`unhandledRejection`, err => {
    var time = moment()
      .tz(`America/Los_Angeles`)
      .format(`MM-DD-YYYY hh:mm a`);
    console.log(`[${time} PST] unhandledRejection: ${err}`);
  });
  bot.on(`disconnected`, function() {
    var time = moment()
      .tz(`America/Los_Angeles`)
      .format(`MM-DD-YYYY hh:mm a`);
    console.log(`[${time} PST] Disconnected!`);
  });
  bot.on(`error`, function(error) {
    var time = moment()
      .tz(`America/Los_Angeles`)
      .format(`MM-DD-YYYY hh:mm a`);
    console.log(`[${time} PST] error: ${error}`);
  });
};
