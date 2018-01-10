const { readLetter } = require('./readletter')

describe.only('readLetter', () => {
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
})