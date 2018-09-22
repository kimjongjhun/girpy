const express = require('express');
const router = express.Router();

const League = require('../../models/Leagues');

/**
 * GET api/leagues
 * get all leagues
 */
router.get('/', (req, res) => {
  League.find()
    .sort({ date: 1 })
    .then((leagues) => {
      res.json(leagues);
    });
});

/**
 * POST api/leagues
 * post a league
 */
router.post('/', (req, res) => {
  const newLeague = new League({
    league: req.body.table
  });

  console.log('ROUTER POST HIT ---------- ', req.body);

  newLeague.save()
    .then((league) => {
      res.json(league);
    });
});

/**
 * DELETE api/leagues/:id
 * delete a league
 */
router.delete('/:id', (req, res) => {
  League.findById(req.params.id)
    .then((league) => {
      league.remove()
        .then(() => {
          res.json({ success: true });
        })
        .catch((e) => {
          res.status(404).json({ success: false });
        });
    });
});

module.exports = router;