const max_lives = 6;
const calculateLives = require("./calculateLives");
const maskedWord = require("./maskedWord");
const checkResult = require("./checkResult");
async function gamePlayService(gameSession, letter) {
  const playedLetters = gameSession.playedLetters;
  const played_set = new Set([...playedLetters]);
  if (played_set.has(letter) == true) {
    return;
  }
  gameSession.playedLetters = playedLetters.concat(letter);
  await gameSession.save();
  await markCompleted(gameSession);
}
async function markCompleted(gameSession) {
  const gameSessionWord = await gameSession.getWord();
  const actualWord = gameSessionWord.title;
  const lives = calculateLives(gameSession, actualWord);
  checkResult(gameSession, lives, actualWord);
}

module.exports = {
  gamePlayService,
};
