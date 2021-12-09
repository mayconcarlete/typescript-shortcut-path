interface Validate {
  validate(str: string): boolean
}

export class Exercise5 implements Validate{
  validate(str: string): boolean {
    const pattern = /^.+bbb(.)?$/
    const regexp = new RegExp(pattern, 'gi')
    return regexp.test(str)
  }
}
