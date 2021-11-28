interface Validate {
  validate(email: string):boolean
}

class EmailValidator implements Validate{
  validate(email: string): boolean {
    return false
  }
}

describe('EmailValidator', () => {
  it('should return false if email has more than one @', () => {
    const email = 'mail@@mail.com'
    const sut = new EmailValidator()
    // arrange

    const isValidEmail = sut.validate(email) // act

    expect(isValidEmail).toBeFalsy() // assert
  })
})
