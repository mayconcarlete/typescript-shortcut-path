interface Validate {
  validate(str: string): boolean
}

export class Exercise7 implements Validate{
  validate(str: any): boolean {
  const pattern = /^[a-z]+_[a-z]+$/
  const regexp = new RegExp(pattern, 'g')
  return regexp.test(str)
  }
}
