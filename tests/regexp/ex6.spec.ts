import {Exercise6} from '../../src/regexp/ex6'
// 6. Write a Python program that matches a string that has an a followed by two to three 'b'.



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
