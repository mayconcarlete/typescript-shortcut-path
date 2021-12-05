// 6. Write a Python program that matches a string that has an a followed by two to three 'b'.

interface Validate {
  validate(str: string):boolean
}

class Exercise6 implements Validate {
  validate(str: string): boolean {
    const pattern = /ab{2,3}/
    const regexp = new RegExp(pattern, 'gi')
    return regexp.test(str)
  }
}

describe('Exercise6', () => {
  it('should return true when regexp test returns true', () => {
    const sut = new Exercise6()

    expect(sut.validate('aabbbbbc')).toBeTruthy()
  })

  it('should return false when regexp test returns false', () => {
    const sut  = new Exercise6()

    expect(sut.validate('ab')).toBeFalsy()
  })
})