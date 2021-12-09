interface Validate {
  validate(str: string):boolean
}

export class Exercise6 implements Validate {
  validate(str: string): boolean {
    const pattern = /ab{2,3}/
    const regexp = new RegExp(pattern, 'gi')
    return regexp.test(str)
  }
}
