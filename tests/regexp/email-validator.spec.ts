interface Validate {
  validate(email: string):boolean
}

class EmailValidator implements Validate{
  validate(email: string): boolean {
    if(!this.hasMoreThanOneAt(email)) return false
    return true
  }

  private hasMoreThanOneAt(email: string): boolean{
    return email.split('@').length === 2? true: false
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

  it('should return true when email is valid', () => {
    const email = 'valid@mail.com'
    const sut = new EmailValidator()
    // arrange

    const isValidaEmail = sut.validate(email) // act

    expect(isValidaEmail).toBeTruthy() // arrange
  })
})
