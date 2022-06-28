async function checkResult(gameSession, lives, Word) {
  const actualWord = Word;
  const word_set = new Set([...actualWord]);
  const playedLetters = gameSession.playedLetters;
  const played_set = new Set([...playedLetters]);

  const isWon = [...word_set].reduce((acc, curr) => {
    if (!played_set.has(curr)) return false;
    return acc;
  }, true);

  if (lives == 0 || isWon) {
    gameSession.endedAt = new Date();
    await gameSession.save();
  }
}

module.exports = checkResult;
