const Constants = require('../constants')
const { VOWEL } = require('./vowels')

describe('Vowel', () => {
  const expected_vowels = [
    'a', 'e', 'i', 'o', 'u', 
    Constants.A_GRAVE, Constants.E_GRAVE, Constants.I_GRAVE,
    Constants.O_GRAVE, Constants.U_GRAVE, Constants.E_ACUTE
  ]
  it('should define 11 vowels [a e i o u] ', () => {
    const actual_vowels = Object.keys(VOWEL).map(key => VOWEL[key])
    expect(actual_vowels).toEqual(expected_vowels)
  })
})