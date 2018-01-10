// @flow

// VOWELS
const { VOWEL } = require('./models/vowels')
const { A_GRAVE, E_GRAVE, I_GRAVE, O_GRAVE, U_GRAVE, E_ACUTE }  = require('./constants')

// CONSONANTS
const { CONSONANT } = require('./models/consonants')

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

    case 'b': return CONSONANT.B
    case 'c': return CONSONANT.C
    case 'd': return CONSONANT.D
    case 'f': return CONSONANT.F
    case 'g': return CONSONANT.G
    case 'h': return CONSONANT.H
    case 'j': return CONSONANT.J
    case 'k': return CONSONANT.K
    case 'l': return CONSONANT.L
    case 'm': return CONSONANT.M
    case 'n': return CONSONANT.N
    case 'p': return CONSONANT.P
    case 'q': return CONSONANT.Q
    case 'r': return CONSONANT.R
    case 's': return CONSONANT.S
    case 't': return CONSONANT.T
    case 'v': return CONSONANT.V
    case 'w': return CONSONANT.W
    case 'x': return CONSONANT.X
    case 'y': return CONSONANT.Y
    case 'z': return CONSONANT.Z
    
    default:
      const msg = letter + ' is unrecognized'
      throw new Error(msg)
  }

}

module.exports = {
  readLetter
}