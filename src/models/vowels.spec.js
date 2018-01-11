const { ACCENTED_VOWELS } = require('../constants')
const { VOWEL, isVowel } = require('./vowels')

describe('Vowel', () => {
  const expected_vowels = [
    'a', 'e', 'i', 'o', 'u', 
    ...ACCENTED_VOWELS
  ]
  it('should define 11 vowels [a e i o u] ', () => {
    const actual_vowels = Object.keys(VOWEL).map(key => VOWEL[key])
    expect(actual_vowels).toEqual(expected_vowels)
  })
})

describe('isVowel function', () => {
  const regularVowels = 'aeiou'.split('')
  regularVowels.forEach(v => {
    it('should recognize ' + v + ' as a vowel', () => {
      expect(isVowel(v)).toBe(true)
    })
  })
})