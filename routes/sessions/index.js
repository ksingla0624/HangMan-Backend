const express = require("express");
const router = express.Router();
const { GameSession, Word, sequelize } = require("../../models");
const {
  serializeGameSession,
} = require("../../serializers/serializeGameSession");
const { gamePlayService } = require("../../services/gamePlayService");
// const {gamePlayService}=require('../../s')
router.post("/", async (req, res) => {
  const name = req.body.name;
  const word = await Word.findOne({
    order: [sequelize.fn("RANDOM")],
  });
  const gameSession = await GameSession.create({
    playerName: name,
    playedLetters: "",
    wordId: word.id,
    startedAt: new Date(),
  });
  res.json(await serializeGameSession(gameSession));
});

router.post("/:id/play", async (req, res) => {
  const gameId = req.params.id;
  const letter = req.body.letter;
  const gameSession = await GameSession.findByPk(gameId);
  console.log(gameSession);
  await gamePlayService(gameSession, letter);
  res.json(await serializeGameSession(gameSession));
});

module.exports = router;
