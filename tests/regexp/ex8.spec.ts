// 8. Write a Python program to find the sequences of one upper case letter followed by lower case letters.]

// print(text_match("AaBbGg"))
// print(text_match("Python"))
// print(text_match("python"))
// print(text_match("PYTHON"))
// print(text_match("aA"))
// print(text_match("Aa"))

// Found a match!
// Found a match!
// Not matched!
// Not matched!
// Not matched!
// Found a match!

interface Validate{
  validate(str: string):boolean
}

class Exercise8 implements Validate{
  validate(str: string): boolean {
    const pattern = /[a-z][A-Z]|[A-Z][a-z]/
    const regexp = new RegExp(pattern, 'g')
    return regexp.test(str)
  }
}

describe('', () => {
  it('should return true when validation returns true', () => {
    const sut = new Exercise8()

    expect(sut.validate('AaBbGg')).toBeTruthy()
    expect(sut.validate('Python')).toBeTruthy()
    expect(sut.validate('aA')).toBeTruthy()
    expect(sut.validate('Aa')).toBeTruthy()
  })
})
