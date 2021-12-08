interface Validate {
  validate(str: string): boolean
}

export class Exercise4 implements Validate {
  validate(str: string): boolean {
    const pattern = /ab+?/
    const regex = new RegExp(pattern, 'gi')
    return regex.test(str)
  }
}
