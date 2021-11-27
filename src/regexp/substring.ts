interface Validate {
  validate(str: string, substring: string): boolean
}

export class VerifyStr implements Validate{
  validate(str: string, substring: string): boolean {
    const regexp = new RegExp(substring, 'gi')
    return regexp.test(str)
  }
}
