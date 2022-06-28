function maskedWord(gameSession, Word) {
  const actualWord = Word;

  const playedLetters = gameSession.playedLetters;
  const played_set = new Set([...playedLetters]);
  const masked_Word = [...actualWord].map((letter) =>
    played_set.has(letter) ? letter : "_"
  );
  return masked_Word;
}

module.exports = maskedWord;
