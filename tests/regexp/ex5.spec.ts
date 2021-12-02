// 5. Write a Python program that matches a string that has an a followed by three 'b'. Go to the editor
interface Validate {
  validate(str: string): boolean
}

class ThreeB implements Validate{
  validate(str: string): boolean {
    const pattern = /^.+bbb(.)?$/
    const regexp = new RegExp(pattern, 'gi')
    return regexp.test(str)
  }
}


describe('ThreeB', () => {
  it('should return true when validation succeeds', () => {
    const sut = new ThreeB()

    expect(sut.validate('abbb')).toBeTruthy()
    expect(sut.validate('aabbbbbc')).toBeTruthy()
  })
})
