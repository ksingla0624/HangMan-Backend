const maxLives = 6;
const calculateLives = require("../services/calculateLives");
const maskedWord = require("../services/maskedWord");
async function serializeGameSession(gameSession) {
  const gameSessionWord = await gameSession.getWord();
  const actualWord = gameSessionWord.title;
  const masked_Word = maskedWord(gameSession, actualWord);
  const lives = calculateLives(gameSession, actualWord);
  return {
    id: gameSession.id,
    livesLeft: lives,
    result: !!gameSession.endedAt,
    masked_Word: masked_Word,
  };
}

module.exports = { serializeGameSession };
