const { sayHello } = require('./index')

describe('sayHello', () => {
  it('should return a string', () => {
    const actual = sayHello()
    expect(actual).toEqual(expect.any(String))
  })

  it('should say Hello, Asshole with no arguments', () => {
    const actual = sayHello()
    expect(actual).toBe('Hello, Asshole')
  })

  it('should say Hello, name if given a name', () => {
    const actual = sayHello('Lindell')
    expect(actual).toEqual('Hello, Lindell')
  })
})