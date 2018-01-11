const Utils = require('./utils')

describe('Utils.isVowel method', () => {
  const regular_vowels = ['a', 'e', 'i', 'o', 'u']
  regular_vowels.forEach(vowel => {
    it('should recognize ' + vowel + ' as a vowel', () => {
      const isVowel = Utils.isVowel(vowel)
      expect(isVowel).toBe(true)
    })
  })
})