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

  it('should reject empty strings', () => {
    expect(() => {
      Utils.isVowel('')
    }).toThrowError('A Letter must have a length of exactly 1, not 0')
  })

  it('should reject strings that are longer than 1 character', () => {
    expect(() => {
      Utils.isVowel('aaa')
    }).toThrowError('A Letter must have a length of exactly 1, not 3')
  })
})

describe('Utils.isConsonant method', () => {
  const consonants = 'bcdfghjklmnpqrstvwxyz'.split('')
  consonants.forEach(c => {
    const isConsonant = Utils.isConsonant(c)
    expect(isConsonant).toBe(true)
  })

  const empty = ''
  const tooLong = 'fgh'

  it('should reject an empty string', () => {
    expect(() => {
      Utils.isConsonant(empty)
    }).toThrowError('A Letter must have a length of exactly 1, not 0')
  })

  it('should reject a string longer that one character', () => {
    expect(() => {
      Utils.isConsonant(tooLong)
    }).toThrowError('A Letter must have a length of exactly 1, not ' + tooLong.length)
  })
})