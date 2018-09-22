const cron = require('node-cron');

const teamJob = new cron.schedule('*/10 * * * * *', () => {
  console.log('Team function executed!');
}, null, false);

module.exports = teamJob;