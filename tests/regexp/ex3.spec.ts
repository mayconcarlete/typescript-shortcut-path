import {Exercise3} from '../../src/regexp/ex3'
// 3. Write a Python program that matches a string that has an a followed by one or more b's. Go to the editor


describe('AbValidator', () => {
  it('should return true if validation succeeds', () => {
    const sut = new Exercise3()

    expect(sut.validate('ab')).toBeTruthy()
    expect(sut.validate('abc')).toBeTruthy()
  })

  it('should return false if validation fails', () => {
    const sut = new Exercise3()

    expect(sut.validate('axc')).toBeFalsy()
    expect(sut.validate('foo')).toBeFalsy()
  })
})
