import {Exercise5} from '../../src/regexp/ex5'
// 5. Write a Python program that matches a string that has an a followed by three 'b'. Go to the editor


describe('ThreeB', () => {
  it('should return true when validation succeeds', () => {
    const sut = new Exercise5()

    expect(sut.validate('abbb')).toBeTruthy()
    expect(sut.validate('aabbbbbc')).toBeTruthy()
  })
})
