const cron = require('node-cron');
const fetch = require('node-fetch');
const axios = require('axios');
const leagueCodes = [2002];
const baseUrl = 'http://api.football-data.org/v2';
const footballApi = require('../config/keys').footballDataApi;

const leagueJob = new cron.schedule('*/10 * * * * *', () => {
  leagueCodes.map((league) => {
    console.log('fetching data for league ', league);

    axios.get(baseUrl + `/competitions/${league}/standings`, {
      headers: {
        "X-Auth-Token": footballApi
      }
    })
      .then((res) => {
        console.log('PRE ----- ', res.data.standings[0].table);

        axios.post(`http://localhost:5000/api/leagues`, {
          table: res.data.standings[0].table
        })
          .then(res => console.log('POST ----- ', res))
          .catch(e => console.log(e));
      })
      .catch((e) => console.log(e));
  });
}, null, false);

module.exports = leagueJob;