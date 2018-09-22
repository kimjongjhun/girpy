const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
  league: [
    {
      date: { type: Date, default: Date.now },
      position: { type: Number },
      team: {
        id: { type: Number },
        name: { type: String },
        crestUrl: { type: String },
      },
      won: {type: Number},
      draw: {type: Number},
      lost: {type: Number},
      points: {type: Number},
      goalsFor: {type: Number},
      goalsAgainst: {type: Number},
      goalDifference: {type: Number},
    },
  ]
});

module.exports = League = mongoose.model('league', LeagueSchema);