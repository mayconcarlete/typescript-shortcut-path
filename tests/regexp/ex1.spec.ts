// 1. Write a Python program to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9).

interface Validate {
  validate(str: string): boolean
}

class CheckString implements Validate {
  validate(str: string): boolean {
    const pattern = /^[a-zA-Z0-9]+$/
    const regexp = new RegExp(pattern, 'gi')
    return regexp.test(str)
  }
}

describe('CheckString', () => {
  it('should return true if a given string has only a-z, A-z and 0-9', () => {
    const str = 'aA1'
    const sut = new CheckString()
    // arrange

    const isValid = sut.validate(str) // act

    expect(isValid).toBeTruthy() // assert
  })
  it('should return false if a given string has special character', () => {
    const str = 'a1!'
    const sut = new CheckString()
    // arrange

    const isValid = sut.validate(str) // act

    expect(isValid).toBeFalsy() // assert
  })
})
