import {Exercise4} from '../../src/regexp/ex4'
// 4. Write a Python program that matches a string that has an a followed by zero or one 'b'.


describe('Exercise4', () => {
  it('should return true when validation succeeds', () => {
    const sut = new Exercise4()

    expect(sut.validate('ab')).toBeTruthy()
    expect(sut.validate('abc')).toBeTruthy()
    expect(sut.validate('abbc')).toBeTruthy()
    expect(sut.validate('aabbc')).toBeTruthy()
  })
})
