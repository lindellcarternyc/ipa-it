// @flow
const isVowel = (letter: string): boolean => {
  return 'aeiou'.split('').indexOf(letter) >= 0
}

module.exports = {
  isVowel
}