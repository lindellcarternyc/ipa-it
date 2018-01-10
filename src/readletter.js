// @flow
const { VOWEL } = require('./models/vowels')
const { A_GRAVE, E_GRAVE, I_GRAVE, O_GRAVE, U_GRAVE, E_ACUTE }  = require('./constants')

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

    case A_GRAVE:
      return VOWEL.A_ACCENT_GRAVE
    case E_GRAVE:
      return VOWEL.E_ACCENT_GRAVE
    case I_GRAVE:
      return VOWEL.I_ACCENT_GRAVE
    case O_GRAVE:
      return VOWEL.O_ACCENT_GRAVE
    case U_GRAVE:
      return VOWEL.U_ACCENT_GRAVE
    case E_ACUTE:
      return VOWEL.E_ACCENT_ACUTE
    default:
      const msg = letter + ' is unrecognized'
      throw new Error(msg)
  }

}

module.exports = {
  readLetter
}