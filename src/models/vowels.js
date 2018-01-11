// @flow
const VOWEL = {
  A: 'a',
  E: 'e',
  I: 'i',
  O: 'o',
  U: 'u',

  A_ACCENT_GRAVE: 'à',
  E_ACCENT_GRAVE: 'è',
  I_ACCENT_GRAVE: 'ì',
  O_ACCENT_GRAVE: 'ò',
  U_ACCENT_GRAVE: 'ù',

  E_ACCENT_ACUTE: 'é'
}

const isVowel = (letter: string): string => {
  return VOWEL[letter.toUpperCase()] !== undefined
}

module.exports = {
  VOWEL, isVowel
}