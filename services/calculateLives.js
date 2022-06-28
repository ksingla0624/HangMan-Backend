const maxLives = 6;
function calculateLives(gameSession, Word) {
  const actualWord = Word;
  const playedLetters = gameSession.playedLetters;
  const word_set = new Set([...actualWord]);
  const wrongLetter = [...playedLetters].filter((letter) => {
    return !word_set.has(letter);
  });
  const lives = maxLives - wrongLetter.length;
  // console.log(lives);
  return lives;
}

module.exports = calculateLives;
