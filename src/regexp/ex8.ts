interface Validate{
  validate(str: string):boolean
}

export class Exercise8 implements Validate{
  validate(str: string): boolean {
    const pattern = /[A-Z][a-z]+/
    const regexp = new RegExp(pattern, 'g')
    return regexp.test(str)
  }
}
