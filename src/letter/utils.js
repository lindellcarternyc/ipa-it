// @flow

const { ACCENTED_VOWELS } = require('../constants')
const { CONSONANT } = require('../models/consonants')

const isVowel = (letter: string): boolean => {
  if ('aeiou'.split('').indexOf(letter) >= 0) {
    return true
  } else if (ACCENTED_VOWELS.indexOf(letter) >= 0) {
    return true
  } else {
    return false
  }
}

const isConsonant = (letter: string): boolean => {
  const key = letter.toUpperCase()
  return CONSONANT[key] !== undefined
}

module.exports = {
  isVowel,
  isConsonant
}