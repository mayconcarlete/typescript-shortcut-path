interface Validate {
  validate(str: string, substring: string): boolean
}

class VerifyStr implements Validate{
  validate(str: string, substring: string): boolean {
    const regexp = new RegExp(substring, 'gi')
    return regexp.test(str)
  }
}

describe('Substring', () => {
  it('should return true if a given substring matches with string', () => {
    const str = 'Maycon Carlete'
    const substring = 'carlete'
    const sut = new VerifyStr()
    // arrange

    const result = sut.validate(str, substring) // act

    expect(result).toBeTruthy() // assert
  })

  it('should return false if a given substring dont matches with string', () => {
    const str = 'Maycon Carlete'
    const substring = 'foo'
    const sut = new VerifyStr()
    // arrange

    const result = sut.validate(str, substring) // act

    expect(result).toBeFalsy() // assert
  })
})
