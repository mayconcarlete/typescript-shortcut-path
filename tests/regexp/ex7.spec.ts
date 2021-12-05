// 7. Write a Python program to find sequences of lowercase letters joined with a underscore.
// print(text_match("aab_cbbbc")) match
// print(text_match("aab_Abbbc")) not match
// print(text_match("Aaab_abbbc")) no match

interface Validate {
  validate(str: string): boolean
}

class Exercise7 implements Validate{
  validate(str: any): boolean {
  const pattern = /^[a-z]+_[a-z]+$/
  const regexp = new RegExp(pattern, 'g')
  return regexp.test(str)
  }
}

describe('Exercise7', () =>{
  it('should return true when validation succeeds', () =>{
    const sut = new Exercise7()

    expect(sut.validate('aab_cbbbc')).toBeTruthy()
    expect(sut.validate('aa_cbbbc')).toBeTruthy()
    expect(sut.validate('abc_aa')).toBeTruthy()
  })
})
