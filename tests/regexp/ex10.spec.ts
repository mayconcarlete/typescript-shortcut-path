import {Exercise10} from '../../src/regexp/ex10'
// 10. Write a Python program that matches a word at the beginning of a string. Go to the editor
// print(text_match("The quick brown fox jumps over the lazy dog.")) found
// print(text_match(" The quick brown fox jumps over the lazy dog.")) not found


describe('Exercise10', () => {
  it('should return true when validate succeeds', () =>{
    const sut = new Exercise10()

    expect(sut.validate('The quick brown fox jumps over the lazy dog.')).toBeTruthy()
  })

  it('should return false when validation fails', () => {
    const sut = new Exercise10()

    expect(sut.validate(' The quick brown fox jumps over the lazy dog.')).toBeFalsy()
  })
})
