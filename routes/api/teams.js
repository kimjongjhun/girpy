const express = require('express');
const router = express.Router();

const Team = require('../../models/Teams');

/**
 * GET api/teams
 * get all teams
 */
router.get('/', (req, res) => {
  Team.find()
    .sort({ date: 1 })
    .then((teams) => {
      res.json(teams);
    });
});

/**
 * POST api/teams
 * post a team
 */
router.post('/', (req, res) => {
  const newTeam = new Team({
    name: req.body.name
  });

  newTeam.save()
    .then((team) => {
      res.json(team);
    });
});

/**
 * DELETE api/teams/:id
 * delete a team
 */
router.delete('/:id', (req, res) => {
  Team.findById(req.params.id)
    .then((team) => {
      team.remove()
        .then(() => {
          res.json({ success: true });
        })
        .catch((e) => {
          res.status(404).json({ success: false });
        });
    });
});

module.exports = router;