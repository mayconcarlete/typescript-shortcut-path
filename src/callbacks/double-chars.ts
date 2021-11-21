interface Perform {
  perform:(str:string) => string
}

export class DoubleChars implements Perform {
  perform(str: string):string{
    return str
      .split('')
      .map(char => `${char}${char}`)
      .join('')
    }
}
