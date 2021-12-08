// 9. Write a Python program that matches a string that has an 'a' followed by anything, ending in 'b'.
// print(text_match("aabbbbd")) not matched
// print(text_match("aabAbbbc")) not matched
// print(text_match("accddbbjjjb")) found a match

interface Validate{
  validate(str: string):boolean
}

export class Exercise9 implements Validate{
  validate(str: string): boolean {
    const pattern = /a.*?b$/
    const regexp = new RegExp(pattern, 'g')
    return regexp.test(str)
  }
}


describe('', () => {
  it('should return true when validation returns true', () => {
    const sut = new Exercise9()

    expect(sut.validate('accddbbjjjb')).toBeTruthy()
  })
})
