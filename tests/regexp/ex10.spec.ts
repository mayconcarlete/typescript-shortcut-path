// 10. Write a Python program that matches a word at the beginning of a string. Go to the editor
// print(text_match("The quick brown fox jumps over the lazy dog.")) found
// print(text_match(" The quick brown fox jumps over the lazy dog.")) not found

interface Validate{
  validate(str:string): boolean
}

class Exercise10 implements Validate{
  validate(str: string): boolean {
    const pattern = /^[a-zA-Z]+/
    const regex = new RegExp(pattern, 'gi')
    return regex.test(str)
  }
}

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
