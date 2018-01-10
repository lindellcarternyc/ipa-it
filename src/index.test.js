const { readWord } = require('./index')

describe('readWord', () => {
  it('should return an empty string', () => {
    const read = readWord('hello')
    expect(read).toBe('')
  })
})