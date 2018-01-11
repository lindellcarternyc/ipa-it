const Utils = require('./utils')
const { ACCENTED_VOWELS } = require('../constants')

describe('Utils.isVowel method', () => {
  const regular_vowels = ['a', 'e', 'i', 'o', 'u']
  regular_vowels.forEach(vowel => {
    it('should recognize ' + vowel + ' as a vowel', () => {
      const isVowel = Utils.isVowel(vowel)
      expect(isVowel).toBe(true)
    })
  })

  ACCENTED_VOWELS.forEach(accentedVowel => {
    it('should recognize ' + accentedVowel + ' as a vowel', () => {
      const actual = Utils.isVowel(accentedVowel)
      expect(actual).toBe(true)
    })
  })

  const testConsonants = 'bdcfgh'.split('')
  testConsonants.forEach(consonant => {
    it('should return false for consonant ' + consonant, () => {
      const isVowel = Utils.isVowel(consonant)
      expect(isVowel).toBe(false)
    })
  })
})

describe('Utils.isConsonant method', () => {
  const consonants = 'bcdfghjklmnpqrstvwxyz'.split('')
  consonants.forEach(c => {
    const isConsonant = Utils.isConsonant(c)
    expect(isConsonant).toBe(true)
  })
})