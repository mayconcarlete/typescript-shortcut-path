import {Exercise9} from '../../src/regexp/ex9'
// 9. Write a Python program that matches a string that has an 'a' followed by anything, ending in 'b'.
// print(text_match("aabbbbd")) not matched
// print(text_match("aabAbbbc")) not matched
// print(text_match("accddbbjjjb")) found a match


describe('', () => {
  it('should return true when validation returns true', () => {
    const sut = new Exercise9()

    expect(sut.validate('accddbbjjjb')).toBeTruthy()
  })

  it('should return false when validation fails', () => {
    const sut = new Exercise9()

    expect(sut.validate('aabbbbd')).toBeFalsy()
    expect(sut.validate('aabAbbbc')).toBeFalsy()
  })
})
