import {Exercise8} from '../../src/regexp/ex8'
// 8. Write a Python program to find the sequences of one upper case letter followed by lower case letters.]


describe('', () => {
  it('should return true when validation returns true', () => {
    const sut = new Exercise8()

    expect(sut.validate('AaBbGg')).toBeTruthy()
    expect(sut.validate('Python')).toBeTruthy()
    expect(sut.validate('Aa')).toBeTruthy()
  })

  it('should return false when validation fails', () => {
    const sut = new Exercise8()

    expect(sut.validate('python')).toBeFalsy()
    expect(sut.validate('PYTHON')).toBeFalsy()
    expect(sut.validate('aA')).toBeFalsy()
  })
})
