interface Validate {
  validate(email: string):boolean
}

class EmailValidator implements Validate{
  validate(email: string): boolean {
    const pattern = /^[\w\.-]{1,64}@mail\.com$/
    const regexp = new RegExp(pattern,'gi')
    return regexp.test(email)
  }
}

describe('EmailValidator', () => {
  it('should return false if email has different quantity if @ than one', () => {
    const email = 'mail.com'
    const sut = new EmailValidator()
    // arrange

    const isValidEmail = sut.validate(email) // act

    expect(isValidEmail).toBeFalsy() // assert
  })

  it('should return false if email has more than 64 before @', () => {
    const email = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@mail.com'
    const sut = new EmailValidator()
    // arrange

    const isValidaEmail = sut.validate(email) // act

    expect(isValidaEmail).toBeFalsy()
  })

  it('should return false if email has lenght 0 before @', () => {
    const email = '@mail.com'
    const sut = new EmailValidator()
    // arrange

    const isValidaEmail = sut.validate(email) // act

    expect(isValidaEmail).toBeFalsy()
  })

  it('should not allow special characters like ! # @ $ %', () => {
    const email = '!#$@mail.com'
    const sut = new EmailValidator()
    // arrange

    const isValidaEmail = sut.validate(email) // act

    expect(isValidaEmail).toBeFalsy()
  })

  it('should return true when email is valid', () => {
    const email = 'va.lid-mail_@mail.com'
    const sut = new EmailValidator()
    // arrange

    const isValidaEmail = sut.validate(email) // act

    expect(isValidaEmail).toBeTruthy() // arrange
  })
})
