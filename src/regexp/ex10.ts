interface Validate{
  validate(str:string): boolean
}

export class Exercise10 implements Validate{
  validate(str: string): boolean {
    const pattern = /^[a-zA-Z]+/
    const regex = new RegExp(pattern, 'gi')
    return regex.test(str)
  }
}
