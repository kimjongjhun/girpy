const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const teams = require('./routes/api/teams');
const leagues = require('./routes/api/leagues');

const leagueJob = require('./cron/leagues');

const PORT = process.env.PORT || 5000;
const db = require('./config/keys').mongoURI;

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(db)
  .then(() => { console.log('mongoDB connected') })
  .catch((e) => { console.log(e) });

app.use('/api/teams', teams);
app.use('/api/leagues', leagues);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});