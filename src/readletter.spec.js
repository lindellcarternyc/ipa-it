// @flow

const Constants = require('./constants')
const { readLetter } = require('./readletter')

describe('readLetter', () => {
  it('should accept a single char', () => {
    const read = readLetter('a')
    expect(() => { readLetter('a')}).not.toThrowError()
  })

  it('should reject the empty string', () => {
    expect(() => {
      readLetter('')
    }).toThrowError('Letter cannot have length 0')
  })

  it('should reject more than one character', () => {
    expect(() => {
      readLetter('aa')
    }).toThrowError('Letter cannot have length 2')
  })

  const regular_vowels = 'aeiou'.split('')
  regular_vowels.forEach(vowel => {
    it('should recognize the vowel: ' + vowel, () => {
      const read = readLetter(vowel)
      expect(read).toEqual(vowel)
    })
  })

  const accented_vowels = [
    Constants.A_GRAVE, Constants.E_GRAVE, Constants.I_GRAVE,
    Constants.O_GRAVE, Constants.U_GRAVE, Constants.E_ACUTE
  ]

  accented_vowels.forEach(accented_vowel => {
    it('should recognize the accented vowel: ' + accented_vowel, () => {
      const read = readLetter(accented_vowel)
      expect(read).toEqual(accented_vowel)
    })
  })

  const consonants = 'bcdfghjklmnpqrstvwxyz'.split('')
  consonants.forEach(consonant => {
    it('should recognize the consonant: ' + consonant, () => {
      const read = readLetter(consonant)
      expect(read).toEqual(consonant)
    })
  })
})