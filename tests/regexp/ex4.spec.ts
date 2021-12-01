// 4. Write a Python program that matches a string that has an a followed by zero or one 'b'.

interface Validate {
  validate(str: string): boolean
}

class ZeroOneB implements Validate {
  validate(str: string): boolean {
    const pattern = /ab+?/
    const regex = new RegExp(pattern, 'gi')
    return regex.test(str)
  }
}

describe('ZeroOneB', () => {
  it('should return true when validation succeeds', () => {
    const sut = new ZeroOneB()

    expect(sut.validate('ab')).toBeTruthy()
    expect(sut.validate('abc')).toBeTruthy()
    expect(sut.validate('abbc')).toBeTruthy()
    expect(sut.validate('aabbc')).toBeTruthy()
  })
})
