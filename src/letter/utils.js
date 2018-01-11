// @flow

const { ACCENTED_VOWELS } = require('../constants')

const isVowel = (letter: string): boolean => {
  if ('aeiou'.split('').indexOf(letter) >= 0) {
    return true
  } else if (ACCENTED_VOWELS.indexOf(letter) >= 0) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isVowel
}