interface Validator {
  validate(str: string): boolean
}

export class Exercise3 implements Validator{
  validate(str: any): boolean {
    const pattern = /ab+/
    const regex = new RegExp(pattern, 'gi')
    return regex.test(str)
  }
}
