// @flow

const { VOWEL } = require('./models/vowels')
const readLetter = (letter: string): string => {
  if(letter.length !== 1) {
    const msg = 'Letter cannot have length ' + letter.length
    throw new Error(msg)
  }

  switch (letter) {
    case 'a':
      return VOWEL.A
    case 'e':
      return VOWEL.E
    case 'i':
      return VOWEL.I
    case 'o':
      return VOWEL.O
    case 'u':
      return VOWEL.U
    default:
      const msg = letter + ' is unrecognized'
      throw new Error(msg)
  }

}

module.exports = {
  readLetter
}