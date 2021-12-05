interface Validate {
  validate(str: string): boolean
}

export class Exercise1 implements Validate {
  validate(str: string): boolean {
    const pattern = /^[a-zA-Z0-9]+$/
    const regexp = new RegExp(pattern, 'gi')
    return regexp.test(str)
  }
}
