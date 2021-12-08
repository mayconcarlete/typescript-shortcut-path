interface Validate{
  validate(str: string):boolean
}

export class Exercise9 implements Validate{
  validate(str: string): boolean {
    const pattern = /a.*?b$/
    const regexp = new RegExp(pattern, 'g')
    return regexp.test(str)
  }
}
