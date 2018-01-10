const { CONSONANT } = require('./consonants')

describe('Consonants', () => {
  'bcdfghjklmnpqrstvwxyz'.split('').forEach(letter => {
    it('should recognize the consonant: ' + letter, () => {
      const key = letter.toUpperCase()
      expect(CONSONANT[key]).toEqual(letter)
      // expect(letter.toUpperCase()).toEqual(CONSONANTS[letter])
    })
  })
})