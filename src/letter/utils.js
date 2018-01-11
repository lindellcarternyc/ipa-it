// @flow

const { ACCENTED_VOWELS } = require('../constants')
const { CONSONANT } = require('../models/consonants')

const isSingleChar = (str: string): boolean => {
  return str.length === 1
}

const isVowel = (letter: string): boolean => {
  if (isSingleChar(letter)) {
    if ('aeiou'.split('').indexOf(letter) >= 0) {
      return true
    } else if (ACCENTED_VOWELS.indexOf(letter) >= 0) {
      return true
    } else {
      return false
    }
  } else {
    const errorMsg = 'A Letter must have a length of exactly 1, not ' + letter.length
    throw new Error(errorMsg)
  }
  
}

const isConsonant = (letter: string): boolean => {
  if (isSingleChar(letter)) {
    const key = letter.toUpperCase()
    return CONSONANT[key] !== undefined
  } else {
    const errorMsg = 'A Letter must have a length of exactly 1, not ' + letter.length
    throw new Error(errorMsg)
  }
}

module.exports = {
  isVowel,
  isConsonant
}