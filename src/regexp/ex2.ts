interface Validator {
  validate(str: string): boolean
}

export class Exercise2 implements Validator{
  validate(str: string): boolean {
    const pattern = /a.+/
    const regex = new RegExp(pattern, 'gi')
    return regex.test(str)
  }
}
