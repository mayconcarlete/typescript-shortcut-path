// 3. Write a Python program that matches a string that has an a followed by one or more b's. Go to the editor

interface Validator {
  validate(str: string): boolean
}

class AbValidator implements Validator{
  validate(str: any): boolean {
    const pattern = /ab+/
    const regex = new RegExp(pattern, 'gi')
    return regex.test(str)
  }
}


describe('AbValidator', () => {
  it('should return true if validation succeeds', () => {
    const sut = new AbValidator()

    expect(sut.validate('ab')).toBeTruthy()
    expect(sut.validate('abc')).toBeTruthy()
  })

  it('should return false if validation fails', () => {
    const sut = new AbValidator()

    expect(sut.validate('axc')).toBeFalsy()
    expect(sut.validate('foo')).toBeFalsy()
  })
})
